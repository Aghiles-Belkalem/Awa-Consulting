import styles from "./WhyChooseUs.module.css";

import { FaCheckCircle } from "react-icons/fa"; // icônes premium pour bénéfices

export default function WhyChooseUs() {
  return (
    <section className={`${styles.why} section`} id="why">
      <header className={styles.header}>
        <h2>Pourquoi choisir Awa Consulting ?</h2>
        <p>
          Je simplifie toutes les démarches pour créer votre entreprise sans
          stress. Rapidité, sécurité juridique et accompagnement premium sont au
          cœur de mes services.
        </p>
      </header>

      <ul className={styles.cards}>
        <li className={styles.card}>
          <FaCheckCircle className={styles.icon} aria-hidden="true" />
          <h3>Création juridique express</h3>
          <p>
            Statuts, RCS, Kbis : tout est pris en main pour vous lancer
            rapidement.
          </p>
        </li>

        <li className={styles.card}>
          <FaCheckCircle className={styles.icon} aria-hidden="true" />
          <h3>Protection de marque</h3>
          <p>
            Dépôt INPI et conseils premium pour sécuriser votre identité.{" "}
            <strong>
              Les frais liés à l'annonce légale et au dépôt INPI sont à la
              charge du client.
            </strong>
          </p>
        </li>

        <li className={styles.card}>
          <FaCheckCircle className={styles.icon} aria-hidden="true" />
          <h3>Accompagnement digital</h3>
          <p>
            Branding et site web haut de gamme prêt à convertir vos clients.
          </p>
        </li>
      </ul>
    </section>
  );
}
