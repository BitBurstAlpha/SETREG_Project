import React from "react";
import "./HowItWorks.css";

const HowItWorks = () => {
  return (
    <section className="how-it-works">
      <h2 className="how-it-works-title">How it Works</h2>
      <div className="steps-container">
        <div className="step">
          <h3 className="step-title">Find Experts</h3>
          <p className="step-description">
            Browse a curated list of engineering professionals specializing in sustainable and green technology.
            Filter by skills, expertise, and location to find the perfect match for your project needs. View detailed
            profiles and verified credentials for each expert.
          </p>
        </div>
        <div className="step">
          <h3 className="step-title">Connect and Collaborate</h3>
          <p className="step-description">
            Once you've found the right professional, start a conversation through secure in-platform chat or video
            conferencing. Share project details, set expectations, and outline deliverables directly within the
            platform. Manage project timelines, track deadlines, and progress with tailored tools designed for seamless
            collaboration.
          </p>
        </div>
        <div className="step">
          <h3 className="step-title">Complete Projects with Confidence</h3>
          <p className="step-description">
            Track the project's milestones, exchange files, and receive deliverables as your project progresses. Use the
            secure payment gateway to handle transactions and prioritize ratings and reviews after project completion.
            The platform ensures a smooth, professional experience from start to finish.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;

