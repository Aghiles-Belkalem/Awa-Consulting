"use client";

import styles from "./CTAContact.module.css";

export default function ContactForm() {
  return (
    <section id="contact" className={styles.ctaSection}>
      <div className={styles.header}>
        <h2>Contactez-nous</h2>
        <p>
          Vous avez un projet en tête ? Échangeons et concrétisons vos idées
          ensemble. Remplissez le formulaire ci-dessous. Ou contactez moi sur
          WhatsApp.
        </p>
      </div>

      <form
        className={styles.form}
        action="https://formsubmit.co/paulinemarent221@gmail.com"
        method="POST"
      >
        <input
          type="text"
          name="name"
          placeholder="Votre nom"
          required
          className={styles.formInput}
        />
        <input
          type="email"
          name="email"
          placeholder="Votre email"
          required
          className={styles.formInput}
        />
        <textarea
          name="message"
          placeholder="Votre message"
          required
          className={styles.formTextarea}
        />
        <button type="submit" className={styles.formButton}>
          Envoyer
        </button>
      </form>
    </section>
  );
}
