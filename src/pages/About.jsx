import React from "react";

const About = () => {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold text-center mb-6">
        About MyShop
      </h1>

      <p className="text-gray-600 text-center max-w-3xl mx-auto mb-10">
        MyShop is a modern e-commerce platform built to provide a smooth,
        secure, and enjoyable shopping experience. We focus on quality
        products, affordable pricing, and fast delivery.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="border rounded-xl p-6 shadow hover:shadow-lg transition">
          <h3 className="text-xl font-semibold mb-3">Our Mission</h3>
          <p className="text-gray-600">
            To make online shopping easy, reliable, and accessible for
            everyone with high-quality products and trusted services.
          </p>
        </div>

        <div className="border rounded-xl p-6 shadow hover:shadow-lg transition">
          <h3 className="text-xl font-semibold mb-3">Our Vision</h3>
          <p className="text-gray-600">
            To become a customer-first e-commerce brand that people trust
            for everyday shopping needs.
          </p>
        </div>

        <div className="border rounded-xl p-6 shadow hover:shadow-lg transition">
          <h3 className="text-xl font-semibold mb-3">Why Choose Us</h3>
          <p className="text-gray-600">
            Secure payments, fast delivery, easy returns, and responsive
            customer support—everything you need in one place.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
