// app/home/page.tsx
'use client';

import React from "react";
import Image from "next/image";

const HomePage = () => {
  return (
    <section className="bg-green-600 min-h-screen flex flex-col justify-center items-center text-center text-white">
      <h2 className="text-4xl font-semibold mb-4">
        Connecting Clients with Engineering Experts for a Sustainable Future
      </h2>
      <div className="search-container mb-8">
        <input
          type="text"
          placeholder="Search for any service..."
          className="search-bar py-2 px-4 rounded-md"
        />
        <button className="bg-green-700 text-white py-2 px-6 rounded-md ml-4">Get Started</button>
      </div>

      <div className="trusted-by mt-8">
        <p>Trusted by:</p>
        <div className="trusted-logos flex justify-center gap-6 mt-4">
          <Image src="/meta.png" alt="Meta" width={80} height={30} />
          <Image src="/payoneer.png" alt="Payoneer" width={80} height={30} />
          <Image src="/paypal.jpg" alt="PayPal" width={80} height={30} />
          <Image src="/google.png" alt="Google" width={80} height={30} />
        </div>
      </div>
    </section>
  );
};

export default HomePage;
