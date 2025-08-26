import { FaRocket } from "react-icons/fa";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero} id="hero">
      <article className={styles.content}>
        <h1 className={styles.title}>
          Votre entreprise, de A à Z, sans stress
        </h1>
        <p className={styles.subtitle}>
          Votre projet devient officiel. Je gère toutes les formalités
          juridiques et administratives, vous concentrez votre énergie sur le
          lancement.
        </p>

        {/* Remplace "btn btn-primary" par la classe du module */}
        <a
          href="https://calendly.com/awaconsulting/de-l-idee-a-l-action-discutons-de-votre-projet?month=2025-08"
          className={styles.ctaButton}
          target="_blank"
          rel="noopener"
        >
          Démarrer mon projet
          <FaRocket className={styles.ctaIcon} />
        </a>
      </article>

      <figure className={styles.imageWrapper}>
        <img
          src="/images/1000005918.jpg"
          alt="Illustration Logo awa consulting by pauline"
          className={styles.image}
        />
      </figure>
    </section>
  );
}
