import React from "react";
import "./Home.css";

export default function Home() {
  return (
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
  );
}
