import styles from "./WhyChooseUs.module.css";
import { FaCheckCircle } from "react-icons/fa";

export default function WhyChooseUs() {
  return (
    <section className={`${styles.why} section`} id="why">
      <div className={styles.headerWrapper}>
        <header className={styles.header}>
          <h2>Pourquoi choisir Awa Consulting ?</h2>
          <p>
            Je simplifie toutes les démarches pour créer votre entreprise sans
            stress. Rapidité, sécurité juridique et accompagnement premium sont
            au cœur de mes services.
          </p>
        </header>
        <div className={styles.photoWrapper}>
          <img
            src="/paulinePic.png"
            alt="Pauline, fondatrice de Awa Consulting"
            className={styles.photo}
          />
        </div>
      </div>

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
          <h3>Assistance administrative</h3>
          <p>
            Gestion de vos démarches administratives avec un accompagnement
            personnalisé pour vous libérer du stress et gagner du temps.
          </p>
        </li>

        <li className={styles.card}>
          <FaCheckCircle className={styles.icon} aria-hidden="true" />
          <h3>Accompagnement digital simplifié</h3>
          <p>
            Je vous guide pas à pas pour lancer votre présence en ligne avec des
            partenaires fiables et efficaces.
          </p>
        </li>
      </ul>
    </section>
  );
}
