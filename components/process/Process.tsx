import styles from "./Process.module.css";
import { FaRegClipboard, FaRegLightbulb, FaRocket } from "react-icons/fa";

export default function Process() {
  return (
    <section className={`${styles.process} section`} id="process">
      <header className={styles.header}>
        <h2>Notre Processus en 3 étapes</h2>
        <p>
          De l'idée à la création effective, Je vous accompagne pour lancer
          votre entreprise sans stress, rapidement et en toute sécurité
          juridique.
        </p>
      </header>

      <ul className={styles.steps}>
        <li className={styles.step}>
          <FaRegClipboard className={styles.icon} aria-hidden="true" />
          <h3>Analyse & stratégie</h3>
          <p>
            Compréhension complète de votre projet pour définir la stratégie
            juridique et business optimale.
          </p>
        </li>

        <li className={styles.step}>
          <FaRegLightbulb className={styles.icon} aria-hidden="true" />
          <h3>Mise en place juridique</h3>
          <p>
            Création de votre entreprise, dépôt INPI et toutes formalités
            administratives prises en charge.
          </p>
        </li>

        <li className={styles.step}>
          <FaRocket className={styles.icon} aria-hidden="true" />
          <h3>Lancement digital accompagné</h3>
          <p>
            Grâce à nos partenaires fiables en création de sites web modernes et
            optimisés, votre entreprise est prête à se lancer efficacement.
          </p>
        </li>
      </ul>
    </section>
  );
}
