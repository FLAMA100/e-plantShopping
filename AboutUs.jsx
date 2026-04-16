import React from 'react';
import './AboutUs.css';

const AboutUs = () => {
  return (
    <div className="about-container">
      <div className="about-hero">
        <h1>About Paradise Nursery</h1>
        <p className="about-tagline">Bringing Nature Indoors, One Plant at a Time</p>
      </div>

      <div className="about-content">
        <section className="about-section">
          <h2>Our Story</h2>
          <p>
            Founded in 2018, Paradise Nursery began as a small family passion project in the heart
            of California. What started as a weekend farmers' market stall quickly blossomed into a
            thriving online plant shop, serving thousands of plant lovers across the country.
          </p>
          <p>
            We believe that every home deserves a touch of green. Whether you're a seasoned plant
            parent or just starting your botanical journey, we have the perfect plant for you.
          </p>
        </section>

        <section className="about-section">
          <h2>Our Mission</h2>
          <p>
            At Paradise Nursery, our mission is simple: to make plant ownership accessible,
            enjoyable, and rewarding for everyone. We carefully source each plant from sustainable
            growers and provide expert care guides to ensure your plants thrive.
          </p>
        </section>

        <section className="about-values">
          <h2>Our Values</h2>
          <div className="values-grid">
            <div className="value-card">
              <span className="value-icon">🌱</span>
              <h3>Sustainability</h3>
              <p>We partner exclusively with eco-friendly growers who share our commitment to the environment.</p>
            </div>
            <div className="value-card">
              <span className="value-icon">💚</span>
              <h3>Quality</h3>
              <p>Every plant is inspected before shipping to guarantee it arrives healthy and vibrant.</p>
            </div>
            <div className="value-card">
              <span className="value-icon">🤝</span>
              <h3>Community</h3>
              <p>We're more than a shop — we're a community of plant enthusiasts helping each other grow.</p>
            </div>
            <div className="value-card">
              <span className="value-icon">📦</span>
              <h3>Care</h3>
              <p>Each order is packed with love and comes with personalized care instructions.</p>
            </div>
          </div>
        </section>

        <section className="about-section about-contact">
          <h2>Get in Touch</h2>
          <p>We'd love to hear from you! Reach us at:</p>
          <ul>
            <li>📧 hello@paradisenursery.com</li>
            <li>📍 123 Bloom Lane, San Francisco, CA 94101</li>
            <li>📞 (415) 555-0172</li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default AboutUs;
