import React from "react";
import "./Home.css";

export default function Home() {
  return (
    <section className="home__section">
      <div className="home__container">
        <h3 className="home__title">Warhorn</h3>
        <h1 className="home__tagline">Sound the horn. Begin the Raid.</h1>
        <h2 className="home__subtagline">
          Fill the roster. Command the night.
        </h2>
        <p className="home__subtitle-text">
          Schedule raids, track RSVPs, and rally your roster - all synced with
          Discord. Built for guilds that mean business.
        </p>
      </div>
      <div className="home__buttons">
        <button className="home__button">Enter the Hall</button>
        <button className="home__button">View Features</button>
      </div>
    </section>
  );
}
