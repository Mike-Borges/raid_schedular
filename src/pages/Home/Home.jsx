import React from "react";
import "./Home.css";

export default function Home() {
  return (
    <>
      <section className="home__section">
        <div className="home__bg"></div>
        <div className="home__container">
          <h3 className="home__badge">Warhorn</h3>
          <h1 className="home__title">
            Sound the horn. <br />
            Begin the Raid.
          </h1>
          <h2 className="home__tagline">Fill the roster. Command the night.</h2>
          <p className="home__info">
            Schedule raids, track RSVPs, and rally your roster - all synced with
            Discord. Built for guilds that mean business.
          </p>
        </div>
        <div className="home__buttons">
          <button className="home__primary-btn">Enter the Hall</button>
          <button className="home__secondary-btn">View Features</button>
        </div>
        <div className="rule home__rule">
          <div className="diamond"></div>
        </div>
      </section>
      <section className="home__stats">
        <div className="home__cell">
          <span className="home__cell-num">500+</span>
          <span className="home__cell-label">Guilds Served</span>
        </div>
        <div className="home__cell">
          <span className="home__cell-num">500+</span>
          <span className="home__cell-label">Guilds Served</span>
        </div>
        <div className="home__cell">
          <span className="home__cell-num">500+</span>
          <span className="home__cell-label">Guilds Served</span>
        </div>
      </section>
      <section className="home__features">
        <div className="home__features-header">
          <div className="rule home__rule">
            <div className="diamond"></div>
          </div>
          <h2 className="home__features-title">
            Features That Rally Your Guild
          </h2>
          <p className="home__features-subtitle">
            From raid scheduling to real-time RSVPs, Warhorn has you covered.
          </p>
        </div>
        <div className="home__features-grid">
          <div className="home__feature-card">
            <span className="home__feature-icon">⚔️</span>
            <div className="home__feature-name">Raid Scheduling</div>
            <p className="home__feature-desc">
              Plan and manage your raids with ease, ensuring everyone is on the
              same page.
            </p>
          </div>
          <div className="home__feature-card">
            <span className="home__feature-icon">⚔️</span>
            <div className="home__feature-name">Raid Scheduling</div>
            <p className="home__feature-desc">
              Plan and manage your raids with ease, ensuring everyone is on the
              same page.
            </p>
          </div>
          <div className="home__feature-card">
            <span className="home__feature-icon">⚔️</span>
            <div className="home__feature-name">Raid Scheduling</div>
            <p className="home__feature-desc">
              Plan and manage your raids with ease, ensuring everyone is on the
              same page.
            </p>
          </div>
          <div className="home__feature-card">
            <span className="home__feature-icon">⚔️</span>
            <div className="home__feature-name">Raid Scheduling</div>
            <p className="home__feature-desc">
              Plan and manage your raids with ease, ensuring everyone is on the
              same page.
            </p>
          </div>
        </div>
      </section>
      <section className="home__final">
        <div className="rule home__rule">
          <div className="diamond"></div>
        </div>
        <h3 className="home__final-title">Free for all guilds</h3>
        <p className="home__final-subtitle">
          Warhorn is completly free while we build it. No credit card. No catch.
          Just sound the horn.
        </p>
        <button className="home__primary-btn">Enter the Hall</button>
      </section>
    </>
  );
}
