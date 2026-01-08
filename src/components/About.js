import React from 'react';

function About() {
    return (
        <div className="about-page">
            <main>
                {/* Hero Section */}
                <div className="hero">
                    <div className="hero-content">
                        <h1>Empowering Your Tech Journey</h1>
                        <p>Anchoring Small Businesses into their identity</p>
                    </div>
                </div>

                {/* Introduction */}
                <section className="intro">
                    <div className="content-wrapper">
                        <h3>
                            Helping businesses and creators simplify, innovate, and transform the way they work.
                        </h3>
                    </div>

                    {/* Mission & Vision Section */}
                    <section className="values">
                        <div className="content-wrapper">
                            <h2>Mission Statement</h2>
                            <p>
                            AnchorTech Innovations empowers small businesses with scalable IT solutions that simplify operations and foster lasting growth. Rooted in integrity and perseverance, we design systems that reflect clarity, trust, and resilience—even in seasons of uncertainty.
                            </p>

                            <h2>Vision Statement</h2>
                            <p>
                            Our vision is to be the trusted partner for small businesses in North Carolina and beyond—recognized for personalized service, thoughtful leadership, and solutions that strengthen operations and build confidence. AnchorTech exists to model stability in a shifting world: meeting clients where they are and empowering them to move forward.
                            </p>

                            <h2>Who We Serve</h2>
                            <p>
                            We serve the kinds of businesses you pass every day—family-run shops, local service providers, and passionate entrepreneurs who care deeply about their work and their communities. Our solutions are built to support their growth, without the complexity.
                            </p>
                        </div>
                    </section>
                </section>
            </main>
        </div>
    );
}

export default About;
