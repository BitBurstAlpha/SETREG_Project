import React from "react";
import Home from "./home/page";
import HowItWorks from "./components/HowItWorks";
import Testimonials from "./components/Testimonials";

export default function HomePage() {
  return (
    <div>
      <Home />
      <HowItWorks />
      <Testimonials />
    </div>
  );
}

