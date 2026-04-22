import styles from "./Home.module.css";

export default function Home() {
  return (
    <>
      <section className={styles.home__section}>
        <div className={styles.home__bg}></div>
        <div className={styles.home__container}>
          <h3 className={styles.home__badge}>Warhorn</h3>
          <h1 className={styles.home__title}>
            Sound the horn. <br />
            Begin the Raid.
          </h1>
          <h2 className={styles.home__tagline}>Fill the roster. Command the night.</h2>
          <p className={styles.home__info}>
            Schedule raids, track RSVPs, and rally your roster - all synced with
            Discord. Built for guilds that mean business.
          </p>
        </div>
        <div className={styles.home__buttons}>
          <button className={styles["home__primary-btn"]}>Enter the Hall</button>
          <button className={styles["home__secondary-btn"]}>View Features</button>
        </div>
        <div className={`rule ${styles.home__rule}`}>
          <div className="diamond"></div>
        </div>
      </section>
      <section className={styles.home__stats}>
        <div className={styles.home__cell}>
          <span className={styles["home__cell-num"]}>500+</span>
          <span className={styles["home__cell-label"]}>Guilds Served</span>
        </div>
        <div className={styles.home__cell}>
          <span className={styles["home__cell-num"]}>500+</span>
          <span className={styles["home__cell-label"]}>Guilds Served</span>
        </div>
        <div className={styles.home__cell}>
          <span className={styles["home__cell-num"]}>500+</span>
          <span className={styles["home__cell-label"]}>Guilds Served</span>
        </div>
      </section>
      <section className={styles.home__features}>
        <div className={styles["home__features-header"]}>
          <div className={`rule ${styles.home__rule}`}>
            <div className="diamond"></div>
          </div>
          <h2 className={styles["home__features-title"]}>
            Features That Rally Your Guild
          </h2>
          <p className={styles["home__features-subtitle"]}>
            From raid scheduling to real-time RSVPs, Warhorn has you covered.
          </p>
        </div>
        <div className={styles["home__features-grid"]}>
          <div className={styles["home__feature-card"]}>
            <span className={styles["home__feature-icon"]}>⚔️</span>
            <div className={styles["home__feature-name"]}>Raid Scheduling</div>
            <p className={styles["home__feature-desc"]}>
              Plan and manage your raids with ease, ensuring everyone is on the
              same page.
            </p>
          </div>
          <div className={styles["home__feature-card"]}>
            <span className={styles["home__feature-icon"]}>⚔️</span>
            <div className={styles["home__feature-name"]}>Raid Scheduling</div>
            <p className={styles["home__feature-desc"]}>
              Plan and manage your raids with ease, ensuring everyone is on the
              same page.
            </p>
          </div>
          <div className={styles["home__feature-card"]}>
            <span className={styles["home__feature-icon"]}>⚔️</span>
            <div className={styles["home__feature-name"]}>Raid Scheduling</div>
            <p className={styles["home__feature-desc"]}>
              Plan and manage your raids with ease, ensuring everyone is on the
              same page.
            </p>
          </div>
          <div className={styles["home__feature-card"]}>
            <span className={styles["home__feature-icon"]}>⚔️</span>
            <div className={styles["home__feature-name"]}>Raid Scheduling</div>
            <p className={styles["home__feature-desc"]}>
              Plan and manage your raids with ease, ensuring everyone is on the
              same page.
            </p>
          </div>
        </div>
      </section>
      <section className={styles.home__final}>
        <div className={`rule ${styles.home__rule}`}>
          <div className="diamond"></div>
        </div>
        <h3 className={styles["home__final-title"]}>Free for all guilds</h3>
        <p className={styles["home__final-subtitle"]}>
          Warhorn is completly free while we build it. No credit card. No catch.
          Just sound the horn.
        </p>
        <button className={styles["home__primary-btn"]}>Enter the Hall</button>
      </section>
    </>
  );
}
