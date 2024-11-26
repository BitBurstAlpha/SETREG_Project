import { PrismaClient } from "@prisma/client";
import Stripe from "stripe";

const stripe = new Stripe(
    "sk_test_51QPUydIbj3tJUIkebMuWlvPg4fQIc5aWl5ixAFu6G0Gjqq2ekwH3rBTLKBcB8c4HYQm3uzOTfqU1xeltFRdzO83i00Ntzwk17G"
  );

export const addOrder = async (req, res, next) => {
    try {
      if (req.body.gigId) {
        const { gigId } = req.body;
        const prisma = new PrismaClient();
        const gig = await prisma.gigs.findUnique({
          where: { id: parseInt(gigId) },
        });
        const paymentIntent = await stripe.paymentIntents.create({
            amount: gig?.price * 100,
            currency: "usd",
            automatic_payment_methods: {
              enabled: true,
            },
        });
        await prisma.orders.create({
            data: {
              paymentIntent: paymentIntent.id,
              price: gig?.price,
              buyer: { connect: { id: req?.userId } },
              gig: { connect: { id: gig?.id } },
            },
        });
        
  
        return res.status(201).json({ clientSecret: paymentIntent.client_secret });
      }
  
      return res.status(400).send("GigId is required.");
    } catch (err) {
      console.log(err);
      return res.status(500).send("Internal Server Error.");
    }
  };

  export const getBuyerOrders = async (req, res, next) => {
    try {
      if (req.userId) {
        const prisma = new PrismaClient();
        const orders = await prisma.orders.findMany({
          where: { buyerId: req.userId, isCompleted: true },
          include: { gig: true },
        });
        return res.status(200).json({ orders });
      }
      return res.status(400).send("User id is required.");
    } catch (err) {
      console.log(err);
      return res.status(500).send("Internal Server Error");
    }
  };

  export const getSellerOrders = async (req, res, next) => {
    try {
      if (req.userId) {
        const prisma = new PrismaClient();
        const orders = await prisma.orders.findMany({
          where: {
            gig: {
              createdBy: {
                id: parseInt(req.userId),
              },
            },
            isCompleted: true,
          },
          include: {
            gig: true,
            buyer: true,
          },
        });
        return res.status(200).json({ orders });
      }
      return res.status(400).send("User id is required.");
    } catch (err) {
      console.log(err);
      return res.status(500).send("Internal Server Error");
    }
  };


  