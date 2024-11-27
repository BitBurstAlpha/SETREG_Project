// app/privacy-policy/page.tsx
import React from "react";
import Link from "next/link";

const PrivacyPolicyPage = () => {
  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold text-center text-green-600 mb-8">Privacy Policy</h1>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Introduction</h2>
        <p className="text-lg text-gray-700">
          At SETReG, we are committed to protecting your privacy. This Privacy Policy outlines the types of information we collect, how we use it, and the steps we take to safeguard your personal data. By using our platform, you agree to the collection and use of information in accordance with this policy.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Information We Collect</h2>
        <p className="text-lg text-gray-700">
          We collect various types of information in order to provide and improve our services:
        </p>
        <ul className="list-disc pl-6 text-lg text-gray-700">
          <li>Personal Information: Name, email address, phone number, and other contact details.</li>
          <li>Usage Data: Information about how you interact with our platform, including your browsing patterns and IP address.</li>
          <li>Cookies: We use cookies to enhance user experience and collect data for analytics.</li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">How We Use Your Information</h2>
        <p className="text-lg text-gray-700">
          The information we collect is used to:
        </p>
        <ul className="list-disc pl-6 text-lg text-gray-700">
          <li>Provide and maintain our services.</li>
          <li>Personalize user experience and improve our platform.</li>
          <li>Communicate with users about updates, promotions, and support requests.</li>
          <li>Monitor usage and trends to enhance our offerings.</li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Data Security</h2>
        <p className="text-lg text-gray-700">
          We take the security of your personal data seriously and implement a variety of security measures to protect it. However, please note that no method of transmission over the internet or electronic storage is 100% secure.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Third-Party Services</h2>
        <p className="text-lg text-gray-700">
          We may share your information with third-party service providers who assist us in operating our platform, processing payments, and providing customer support. These providers are obligated to protect your data and use it only for the purposes specified.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Your Rights</h2>
        <p className="text-lg text-gray-700">
          You have the right to:
        </p>
        <ul className="list-disc pl-6 text-lg text-gray-700">
          <li>Access your personal data and request copies.</li>
          <li>Request corrections to any inaccurate data.</li>
          <li>Request deletion of your personal data under certain conditions.</li>
          <li>Withdraw consent for data processing where applicable.</li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Changes to This Policy</h2>
        <p className="text-lg text-gray-700">
          We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated revision date. We encourage you to review this policy periodically.
        </p>
      </section>

      <section className="text-center">
        <Link href="/" className="text-green-600 font-semibold underline">
          Return to Home
        </Link>
      </section>
    </div>
  );
};

export default PrivacyPolicyPage;
