import styles from "./Privacy.module.css";

export default function Privacy() {
  return (
    <main className={styles.container}>
      <h1 className={styles.heading}>Politique de confidentialité</h1>

      <p className={styles.text}>
        Chez <strong>Awa Consulting</strong>, nous nous engageons à protéger vos
        données personnelles. Cette politique décrit comment nous collectons,
        utilisons et sécurisons vos informations lorsque vous utilisez nos
        services.
      </p>

      <section className={styles.section}>
        <h2 className={styles.subheading}>Collecte de données</h2>
        <p className={styles.text}>
          Nous collectons uniquement les informations nécessaires pour traiter
          vos demandes et améliorer nos services. Les données collectées
          incluent votre nom, email, et les informations que vous nous
          communiquez via nos formulaires.
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.subheading}>Utilisation des données</h2>
        <p className={styles.text}>
          Les informations que vous nous fournissez sont utilisées exclusivement
          pour répondre à vos demandes et vous fournir un accompagnement
          personnalisé.
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.subheading}>Partage des données</h2>
        <p className={styles.text}>
          Nous ne partageons vos informations avec aucun tiers, sauf avec des
          partenaires de confiance nécessaires pour fournir nos services (ex:
          développeur web pour site professionnel).
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.subheading}>Sécurité</h2>
        <p className={styles.text}>
          Nous prenons toutes les mesures techniques et organisationnelles pour
          protéger vos données contre tout accès non autorisé, altération ou
          suppression.
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.subheading}>Vos droits</h2>
        <p className={styles.text}>
          Vous pouvez accéder à vos données, les corriger ou demander leur
          suppression à tout moment. Pour exercer vos droits, contactez-nous via
          notre page{" "}
          <a href="/" className={styles.link}>
            Awa Consulting
          </a>
          .
        </p>
      </section>

      <p className={styles.footerNote}>
        &copy; {new Date().getFullYear()} Awa Consulting. Tous droits réservés.
      </p>
    </main>
  );
}
