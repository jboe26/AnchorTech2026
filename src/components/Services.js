import React from "react";
import "../style.css";

const packageData = [
  {
    title: "Launch",
    subtitle: "For solo founders and new businesses",
    description: "Get online with clarity and confidence. We’ll handle the tech so you can focus on your mission.",
    features: [
      "Custom 3-page website",
      "Foundational branding",
      "Basic SEO setup",
      "1-month support included"
    ]
  },
  {
    title: "Thrive",
    subtitle: "For growing teams and expanding reach",
    description: "Strengthen your brand and connect with your audience. No fluff—just what works.",
    features: [
      "Includes Launch features",
      "Expanded 5-page website",
      "Refined branding strategy",
      "SEO + social media setup (1 platform)",
      "3-month support included"
    ]
  },
  {
    title: "Elevate",
    subtitle: "For established businesses ready to scale",
    description: "Build a digital presence that reflects your full vision. We’re here every step of the way.",
    features: [
      "Includes Thrive features",
      "Fully customized 10-page website",
      "Email marketing setup",
      "Multi-platform social media strategy",
      "Website performance analytics",
      "6-month support included"
    ]
  },
  {
    title: "Legacy",
    subtitle: "For leaders building long-term impact",
    description: "Full-service support with advanced tools and strategy. No gimmicks—just real partnership.",
    features: [
      "Includes Elevate features",
      "Unlimited page design with advanced customization",
      "Comprehensive marketing suite with analytics insights",
      "Client portal for streamlined business management",
      "Competitor analysis & custom SEO strategy",
      "Training materials & resources",
      "12-month support included"
    ]
  }
];

const Services = () => {
  return (
    <div className="services-page">
      {/* Intro */}
      <div className="services-intro">
        <h1>Service Packages</h1>
        <p className="services-tagline">
          Clear, scalable solutions for small businesses. No gimmicks. No bull.
        </p>
        <p className="services-note">

        </p>
      </div>

      {/* Packages */}
      <div className="package-grid">
        {packageData.map((pkg, idx) => (
          <div key={idx} className="package-card">
            <h2 className="package-title">{pkg.title}</h2>
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
    </div>
  );
};

export default Services;
