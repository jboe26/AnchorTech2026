import React from "react";
import "../style.css";

const packageData = [
  {
    title: "Anchor Foundation",
    price: "$149",
    subtitle: "For businesses getting started",
    description:
      "A simple, intentional website to help new businesses establish their identity online.",
    features: [
      "Custom 3‑page website",
      "Basic branding setup",
      "Starter SEO",
      "1‑month support included"
    ]
  },
  {
    title: "Anchor Growth",
    price: "$299",
    subtitle: "For businesses strengthening their identity",
    description:
      "A stronger online presence with more pages, refined branding, and tools to help you grow.",
    features: [
      "Includes Anchor Foundation features",
      "Expanded 5‑page website",
      "Branding refinement",
      "Social media setup (1 platform)",
      "2‑month support included"
    ]
  },
  {
    title: "Anchor Elevate",
    price: "$499",
    subtitle: "For businesses stepping into their full potential",
    description:
      "A more customized, strategic build with marketing tools and analytics to support real growth.",
    features: [
      "Includes Anchor Growth features",
      "Fully customized 8‑10 page website",
      "Email marketing setup",
      "Multi‑platform social media strategy",
      "Website analytics dashboard",
      "4‑month support included"
    ]
  },
  {
    title: "Anchor Alliance",
    price: "$799+",
    subtitle: "For long‑term partnership and ongoing support",
    description:
      "Full‑service support, strategy, and improvements. A true partnership built on trust and clarity.",
    features: [
      "Includes Anchor Elevate features",
      "Unlimited page updates",
      "Full marketing suite + analytics",
      "Client portal setup",
      "Competitor analysis + SEO strategy",
      "Training materials",
      "12‑month support included"
    ]
  }
];

const Services = () => {
  return (
    <div className="services-page">
      <div className="services-intro">
        <h1>Service Packages</h1>
        <p className="services-tagline">
          Clear, scalable solutions for small businesses. No gimmicks. No bull.
        </p>
      </div>

      <div className="package-grid">
        {packageData.map((pkg, idx) => (
          <div key={idx} className="package-card">
            <h2 className="package-title">{pkg.title}</h2>
            <p className="package-price">{pkg.price}</p>
            <h5 className="package-subtitle">{pkg.subtitle}</h5>
            <p className="package-description">{pkg.description}</p>
            <ul className="package-features">
              {pkg.features.map((feature, i) => (
                <li key={i}>{feature}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="services-cta">
        <p>Not sure which package fits your business?</p>
        <a href="/contact" className="cta-button">
          Let’s Talk
        </a>
      </div>
    </div>
  );
};

export default Services;
