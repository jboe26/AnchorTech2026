import React from "react";
import "../style.css";

const packageData = [
  {
    title: "Anchor Foundation",
    price: "$99",
    subtitle: "For businesses getting started",
    description:
      "A clean, intentional website that gives your business a solid, editable foundation online — built on the platform that fits you best.",
    features: [
      "Custom 3‑page website",
      "Built for easy editing",
      "Starter SEO setup",
      "1‑month support + training",
      "Platform‑flexible (WordPress, Squarespace, Wix, Shopify)"
    ]
  },
  {
    title: "Anchor Growth",
    price: "$199",
    subtitle: "For businesses strengthening their identity",
    description:
      "A more complete online presence with refined structure, better flow, and tools that help you grow confidently.",
    features: [
      "Includes Anchor Foundation features",
      "Expanded 5‑page website",
      "Branding + layout refinement",
      "Contact form + basic automations",
      "2‑month support + training",
      "Platform‑flexible"
    ]
  },
  {
    title: "Anchor Elevate",
    price: "$349",
    subtitle: "For businesses stepping into their full potential",
    description:
      "A fully customized website with strategic structure, marketing tools, and analytics to support real growth.",
    features: [
      "Includes Anchor Growth features",
      "Fully customized 8–10 page website",
      "Template system for long‑term consistency",
      "Email marketing integration",
      "Analytics dashboard + insights",
      "4‑month support included",
      "Platform‑flexible"
    ]
  },
  {
    title: "Anchor Alliance",
    price: "$499",
    subtitle: "For long‑term partnership and ongoing support",
    description:
      "Ongoing website care, updates, and strategy — a long‑term partnership built on clarity, trust, and continuous improvement.",
    features: [
      "Includes Anchor Elevate features",
      "Unlimited page updates",
      "Monthly maintenance + backups",
      "SEO improvements + competitor insights",
      "Client portal access",
      "Training materials",
      "12‑month support included",
      "Platform‑flexible"
    ]
  }
];

// Ongoing support options
const supportOptions = {
  title: "AnchorCare Ongoing Support",
  description:
    "When your included support ends, you can continue with an AnchorCare plan for ongoing updates, maintenance, and peace of mind.",
  plans: [
    {
      name: "AnchorCare Monthly",
      price: "$49/mo",
      features: [
        "Unlimited small edits (content, images, wording, tweaks)",
        "Monthly updates + backups",
        "Security + performance monitoring",
        "Priority response"
      ]
    },
    {
      name: "AnchorCare Yearly",
      price: "$199/year",
      features: [
        "Unlimited small edits",
        "Full yearly maintenance + backups",
        "Performance + SEO tune‑ups",
        "Minor fixes throughout the year",
        "Optional 30‑minute strategy call"
      ]
    }
  ]
};

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

      {/* AnchorCare Support Section */}
      <div className="support-section">
        <h2>{supportOptions.title}</h2>
        <p className="support-description">{supportOptions.description}</p>

        <div className="support-grid">
          {supportOptions.plans.map((plan, idx) => (
            <div key={idx} className="support-card">
              <h3 className="support-name">{plan.name}</h3>
              <p className="support-price">{plan.price}</p>
              <ul className="support-features">
                {plan.features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
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
