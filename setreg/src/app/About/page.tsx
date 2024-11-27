// app/about/page.tsx
import React from "react";
import Link from "next/link";

const AboutPage = () => {
  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold text-center text-green-600 mb-8">About SETReG</h1>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">What is SETReG?</h2>
        <p className="text-lg text-gray-700">
          SETReG is a dynamic and innovative engineering marketplace designed to connect clients with top-tier engineering experts for a wide range of projects. Whether you're a startup, small business, or large corporation, SETReG offers a platform where clients can easily find and hire skilled engineers who match their specific project needs. 
        </p>
        <p className="text-lg text-gray-700 mt-4">
          Our platform leverages cutting-edge technology to bridge the gap between clients seeking engineering solutions and engineers looking for rewarding project opportunities. We aim to foster a seamless, efficient, and professional environment for both parties to collaborate and achieve exceptional results.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Services for Clients</h2>
        <p className="text-lg text-gray-700">
          As a client on SETReG, you have access to a diverse pool of talented engineers with expertise across various fields including software development, mechanical engineering, civil engineering, and more. Whether you need a long-term partnership or a short-term contract, SETReG offers flexibility to meet your project needs.
        </p>
        <p className="text-lg text-gray-700 mt-4">
          Key services for clients include:
        </p>
        <ul className="list-disc pl-6 text-lg text-gray-700">
          <li>Access to a broad network of engineers with specialized skills.</li>
          <li>Streamlined project posting and bidding process.</li>
          <li>Transparent pricing and easy payment options.</li>
          <li>Timely project completion with milestones and deliverables tracking.</li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Services for Engineers</h2>
        <p className="text-lg text-gray-700">
          Engineers on SETReG benefit from access to exciting and diverse projects that match their skill set. The platform offers a streamlined process for bidding on projects, managing timelines, and collaborating with clients to deliver high-quality results.
        </p>
        <p className="text-lg text-gray-700 mt-4">
          Key services for engineers include:
        </p>
        <ul className="list-disc pl-6 text-lg text-gray-700">
          <li>Opportunity to work on a variety of projects from clients around the world.</li>
          <li>Flexible project management tools for tracking tasks and deadlines.</li>
          <li>Ability to set your own rates and work on terms that suit you.</li>
          <li>Secure payment processing and reliable client feedback system.</li>
        </ul>
      </section>

      <section className="text-center">
        <p className="text-lg text-gray-700 mb-6">
          At SETReG, we believe in creating a transparent and efficient marketplace where clients and engineers can connect, collaborate, and innovate together.
        </p>
        <Link href="/signup" className="text-green-600 font-semibold underline">
          Join SETReG Today and Start Collaborating!
        </Link>
      </section>
    </div>
  );
};

export default AboutPage;
