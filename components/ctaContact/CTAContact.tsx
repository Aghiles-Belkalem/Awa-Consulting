"use client";

import { useState } from "react";
import styles from "./CTAContact.module.css";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const data = new FormData(form);

    fetch(form.action, {
      method: form.method,
      body: data,
      headers: { Accept: "application/json" },
    })
      .then((response) => {
        if (response.ok) {
          setSubmitted(true);
          form.reset();
        } else {
          alert("Oups, quelque chose s'est mal passé !");
        }
      })
      .catch(() => alert("Oups, quelque chose s'est mal passé !"));
  };

  return (
    <section id="contact" className={styles.ctaSection}>
      <div className={styles.header}>
        <h2>Contactez-nous</h2>
        <p>
          Vous avez un projet en tête ? Échangeons et concrétisons vos idées
          ensemble. Remplissez le formulaire ci-dessous. Ou contactez-moi sur
          WhatsApp.
        </p>
      </div>

      {submitted ? (
        <div className={styles.successMessage}>
          Votre message a bien été envoyé ! Nous vous répondrons très bientôt.
        </div>
      ) : (
        <form
          className={styles.form}
          action="https://formsubmit.co/paulinemarent221@gmail.com"
          method="POST"
          onSubmit={handleSubmit}
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
      )}
    </section>
  );
}
