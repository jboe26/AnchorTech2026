import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';
import NotFound from './components/NotFound';

import './style.css';

function App() {
    return (
        <div className="app">
            <header>
                <nav style={{ textAlign: "center" }}>
                    <ul style={{ listStyle: "none", padding: 0, margin: 15 }}>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/services">Pricing</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                    </ul>

                    {/* <ul style={{ listStyle: "none", padding: 0, marginTop: 15 }}>
                        <li><Link to="/companion">AnchorTech Companion</Link></li>
                    </ul> */}

                    <hr />
                </nav>


            </header>

            <main>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/services" element={<Services />} />
                    <Route path="/contact" element={<Contact />} />
                    {/* <Route path="/privacypolicy" element={<PrivacyPolicy />} /> */}
                    {/* <Route path="/companion" element={<CompanionHome />} /> */}
                    {/* <Route path="/companion/calendar" element={<CalendarPage />} /> */}
                    {/* <Route path="/companion/ai" element={<AnchorAI />} /> */}
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </main>
            <Footer />
        </div>
    );
}

export default App;
