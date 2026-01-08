import React from 'react';

function About() {
    return (
        <div className="about-page">
            <main>

                {/* Hero Section */}
                <div className="hero">
                    <div className="hero-content">
                        <h1>Anchoring Small Businesses Into Their Identity</h1>
                        <p>Clarity, purpose, and steady support for every stage of your journey.</p>
                    </div>
                </div>


                {/* Introduction */}
                <section className="intro">
                    <div className="content-wrapper">
                        <h3>
                            AnchorTech Innovations exists to help small businesses simplify their tech, strengthen their identity, and move forward with confidence — without the overwhelm.
                        </h3>
                    </div>

                    {/* Mission & Vision Section */}
                    <section className="values">
                        <div className="content-wrapper">

                            <h2>Mission Statement</h2>
                            <p>
                                AnchorTech Innovations empowers small businesses with practical, scalable digital solutions that bring clarity to their operations and confidence to their brand.
                                Rooted in integrity and steady guidance, we build systems that reflect stability, purpose, and resilience — especially in seasons of uncertainty.
                            </p>

                            <h2>Vision Statement</h2>
                            <p>
                                Our vision is to be the trusted partner for small businesses across North Carolina and beyond.
                                We aim to be known for thoughtful leadership, personal connection, and solutions that strengthen identity and support long‑term growth.
                                AnchorTech stands as a steady presence in a shifting world — meeting clients where they are and helping them move forward with clarity.
                            </p>

                            <h2>Who We Serve</h2>
                            <p>
                                We serve the businesses that make our communities feel like home — family‑run shops, local service providers, solo founders, and passionate entrepreneurs.
                                Our solutions are built to support their growth without unnecessary complexity, giving them the tools they need to thrive in a digital world.
                            </p>

                        </div>
                    </section>
                </section>

            </main>
        </div>
    );
}

export default About;
