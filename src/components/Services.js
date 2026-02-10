import React from "react";
import "../style.css";

const packageData = [
  {
    title: "Anchor Foundation",
    price: "$149",
    subtitle: "For businesses getting started",
    description:
      "A clean, simple WordPress build that gives new businesses a solid, editable foundation online.",
    features: [
      "Custom 3‑page WordPress site",
      "Built with Divi for easy editing",
      "Starter SEO setup",
      "1‑month support + training"
    ]
  },
  {
    title: "Anchor Growth",
    price: "$299",
    subtitle: "For businesses strengthening their identity",
    description:
      "A more complete WordPress presence with additional pages, refined structure, and tools to help you grow confidently.",
    features: [
      "Includes Anchor Foundation features",
      "Expanded 5‑page WordPress site",
      "Branding + layout refinement",
      "Contact form + basic automations",
      "2‑month support + training"
    ]
  },
  {
    title: "Anchor Elevate",
    price: "$499",
    subtitle: "For businesses stepping into their full potential",
    description:
      "A fully customized WordPress build with strategic structure, marketing tools, and analytics to support real growth.",
    features: [
      "Includes Anchor Growth features",
      "Fully customized 8–10 page WordPress site",
      "Divi Theme Builder templates",
      "Email marketing integration",
      "Analytics dashboard + insights",
      "4‑month support included"
    ]
  },
  {
    title: "Anchor Alliance",
    price: "$799+",
    subtitle: "For long‑term partnership and ongoing support",
    description:
      "Ongoing WordPress care, updates, and strategy. A long‑term partnership built on clarity, trust, and continuous improvement.",
    features: [
      "Includes Anchor Elevate features",
      "Unlimited page updates",
      "Monthly maintenance + backups",
      "SEO improvements + competitor insights",
      "Client portal access",
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
