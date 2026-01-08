import React from 'react';
import heroImage from '../assets/logo2.png';
import './Home.css'

const Home = () => {
    return (
        <div>
            <div className="hero-home">
                <img src={heroImage} alt="Tech innovation"/>
                <div>
                    <h2>Welcome to AnchorTech Innovations</h2>
                    <h3>Anchoring Small Businesses into their identity</h3>
                </div>
            </div>
        </div>
    );
};

export default Home;
