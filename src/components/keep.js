import React, { useState, useEffect } from "react";

const packageData = [
    { title: "Basic", features: ["Custom 3-page website", "Foundational branding", "SEO setup", "1-month tech support"], price: "$149" },
    { title: "Standard", features: ["Expanded 5-page website", "Advanced branding", "SEO + social optimization", "3-month tech support"], price: "$249" },
    { title: "Premium", features: ["Fully customized 10-page website", "Targeted email marketing", "Multi-platform management", "Cloud integration", "Website analytics", "Priority booking", "Content planning", "6-month tech support"], price: "$499" },
    { title: "Ultimate", features: ["Unlimited page design", "Advanced web app & API dev", "Business automation", "Competitor analysis", "Exclusive training", "VIP 24/7 support"], price: "$999" }
];

const services = [
    { title: "Custom Website (3 pages)", description: "Personalized website tailored to your needs.", price: "$150" },
    { title: "Additional Web Pages", description: "Expand beyond the standard package with extra pages.", price: "$30/page" },
    { title: "Basic Branding", description: "Simple logo creation and brand setup for consistency.", price: "$100" },
    { title: "Advanced Branding", description: "Complete brand strategy and high-quality design assets.", price: "$200" },
    { title: "SEO Optimization", description: "Boost visibility and improve rankings on search engines.", price: "$100" },
    { title: "E-commerce Integration", description: "Set up a secure, user-friendly online store.", price: "$250" },
    { title: "Custom API Development", description: "Tailored API solutions to enhance your platform.", price: "$300" }
];

const Services = () => {
    const [openIndex, setOpenIndex] = useState(null);
    const [showAfterHours, setShowAfterHours] = useState(false);

    useEffect(() => {
        const currentHour = new Date().getHours();
        setShowAfterHours(currentHour >= 18);
    }, []);

    const toggleSection = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="services-page">
            <section className="packages">
                <h2>Service Packages</h2>
                <p>Select a plan that fits your needs and scales with your business.</p>

                <div className="package-grid">
                    {packageData.map((pkg, index) => (
                        <div className="package-card" key={index} onClick={() => toggleSection(index)}>
                            <h3>{pkg.title}</h3>
                            {openIndex === index && (
                                <>
                                    <ul>{pkg.features.map((feature, i) => <li key={i}>{feature}</li>)}</ul>
                                    <p className="price">{pkg.price}</p>
                                </>
                            )}
                        </div>
                    ))}
                </div>
            </section>

            <section style={{ padding: "40px", textAlign: "center", maxWidth: "800px", margin: "0 auto" }}>
                <h2>À la Carte Services</h2>

                <div style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
                    {services.map((service, index) => (
                        <div key={index} style={{ border: "1px solid #ddd", borderRadius: "5px", overflow: "hidden" }}>
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                style={{
                                    width: "100%",
                                    padding: "15px",
                                    backgroundColor: "#3A6A96",
                                    color: "#fff",
                                    border: "none",
                                    cursor: "pointer",
                                    textAlign: "left",
                                    fontSize: "18px"
                                }}>
                                {service.title}
                            </button>
                            {openIndex === index && (
                                <div style={{ padding: "15px", backgroundColor: "#f4f4f4" }}>
                                    <p style={{ fontSize: "16px" }}>{service.description}</p>
                                    <p style={{ fontWeight: "bold", fontSize: "18px", color: "#333", marginTop: "10px" }}>{service.price}</p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
                <section className="schedule-consultation">
                    <h2>Schedule a Consultation</h2>
                    {showAfterHours ? (
                        <p>Need help outside regular hours? Book an after-hours session now.</p>
                    ) : (
                        <p>Book a free 30-minute strategy session to discuss your needs.</p>
                    )}
                    <a
                        href={showAfterHours ? "https://calendly.com/contact-anchortech/after-hours" : "https://calendly.com/contact-anchortech"}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="cta-button">
                        {showAfterHours ? "Book After-Hours Session" : "Book Regular Consultation"}
                    </a>
                </section>
            </section>            
        </div >
    );
};

export default Services;
