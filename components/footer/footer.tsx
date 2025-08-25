"use client";
import styles from "./Footer.module.css";
import { FaLinkedinIn, FaWhatsapp, FaArrowUp } from "react-icons/fa";
import Link from "next/link";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* Logo & description */}
        <div className={styles.brand}>
          <h3>Awa Consulting</h3>
          <p>
            Votre entreprise clé en main, zéro tracas. Awa Consulting s’occupe
            de tout pour vous lancer sereinement.
          </p>
        </div>

        {/* Navigation links */}
        <div className={styles.links}>
          <div className={styles.linkGroup}>
            <h4>Menu</h4>
            <a href="#why" className={styles.menuLink}>
              Pourquoi nous
            </a>
            <a href="#process" className={styles.menuLink}>
              Process
            </a>
            <a href="#portfolio" className={styles.menuLink}>
              Témoignages
            </a>
            <a href="#contact" className={`${styles.menuLink} ${styles.cta}`}>
              Contact
            </a>
          </div>

          <div className={styles.linkGroup}>
            <h4>Réseaux</h4>
            <a
              href="https://www.linkedin.com/in/pauline-marent-creation-entreprise/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.linkedin}
            >
              <FaLinkedinIn />
              LinkedIn
            </a>
            <a
              href="https://wa.me/33612311957"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.whatsapp}
            >
              <FaWhatsapp />
              WhatsApp
            </a>
          </div>

          <div className={styles.linkGroup}>
            <h4>Légal</h4>
            <Link
              href="/privacy"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.menuLink}
            >
              Politique de confidentialité
            </Link>
          </div>
        </div>
      </div>

      {/* Bouton retour en haut */}
      <button
        type="button"
        className={styles.scrollTop}
        onClick={scrollToTop}
        aria-label="Retour en haut de page"
      >
        <FaArrowUp />
      </button>

      <div className={styles.copy}>
        &copy; {new Date().getFullYear()} Awa Consulting. Tous droits réservés.
      </div>
    </footer>
  );
}
