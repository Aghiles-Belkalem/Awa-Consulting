import type { Metadata } from "next";
import styles from "./Privacy.module.css";

export const metadata: Metadata = {
  title: "Mentions légales & Politique de confidentialité | AWA Consulting",
  description:
    "Consultez les mentions légales et la politique de confidentialité d’AWA Consulting. Informations légales, RGPD, collecte et gestion des données personnelles.",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Mentions légales & Politique de confidentialité | AWA Consulting",
    description:
      "Informations légales et politique de confidentialité d’AWA Consulting : hébergement, propriété intellectuelle, RGPD et gestion des données.",
    url: "https://awa-consulting.fr/privacy", // ajuste si ton URL est différente
    siteName: "AWA Consulting",
    locale: "fr_FR",
    type: "article",
  },
};

export default function Legal() {
  return (
    <main className={styles.container}>
      <h1 className={styles.heading}>
        Mentions légales & Politique de confidentialité
      </h1>

      {/* ===== Mentions légales ===== */}
      <section className={styles.section}>
        <h2 className={styles.subheading}>Mentions légales</h2>
        <p className={styles.text}>
          <strong>Nom commercial :</strong> Awa Consulting
        </p>
        <p className={styles.text}>
          <strong>Statut juridique :</strong> Micro-entreprise
        </p>
        <p className={styles.text}>
          <strong>SIRET :</strong> 837 794 882 00014
        </p>
        <p className={styles.text}>
          <strong>Adresse :</strong> 69 allée Georges Brassens, 59270 Bailleul
        </p>
        <p className={styles.text}>
          <strong>Email :</strong> paulinemarent221@gmail.com
        </p>
        <p className={styles.text}>
          <strong>Site internet :</strong>{" "}
          <a href="https://awa-consulting.fr" className={styles.link}>
            awa-consulting.fr
          </a>
        </p>
        <p className={styles.text}>
          <strong>Responsable de publication :</strong> Pauline Marent
        </p>

        <h3 className={styles.subSubheading}>Hébergeur du site</h3>
        <p className={styles.text}>
          <strong>Nom :</strong> OVH SAS
        </p>
        <p className={styles.text}>
          <strong>Adresse :</strong> 2 rue Kellermann, 59100 Roubaix
        </p>
        <p className={styles.text}>
          <strong>Téléphone :</strong> +33 (0)9 72 10 10 07
        </p>
        <p className={styles.text}>
          <strong>Site web :</strong>{" "}
          <a href="https://www.ovh.com" className={styles.link}>
            ovh.com
          </a>
        </p>

        <h3 className={styles.subSubheading}>Propriété intellectuelle</h3>
        <p className={styles.text}>
          Tout le contenu du site awa-consulting.fr (textes, images, logos…) est
          la propriété exclusive d’Awa Consulting. Toute reproduction est
          interdite sans accord écrit.
        </p>
      </section>

      {/* ===== Politique de confidentialité ===== */}
      <section className={styles.section}>
        <h2 className={styles.subheading}>Politique de confidentialité</h2>

        <p className={styles.text}>
          Chez <strong>Awa Consulting</strong>, nous protégeons vos données
          personnelles et respectons le RGPD.
        </p>

        <h3 className={styles.subSubheading}>Données collectées</h3>
        <p className={styles.text}>
          Nom, email, téléphone et informations fournies via nos formulaires.
          Ces données sont utilisées uniquement pour répondre à vos demandes et
          ne sont jamais vendues ou cédées.
        </p>

        <h3 className={styles.subSubheading}>Vos droits</h3>
        <p className={styles.text}>
          Accédez, rectifiez ou supprimez vos données en contactant :{" "}
          <a href="mailto:paulinemarent221@gmail.com" className={styles.link}>
            paulinemarent221@gmail.com
          </a>
        </p>

        <h3 className={styles.subSubheading}>Cookies</h3>
        <p className={styles.text}>
          Nous utilisons des cookies pour améliorer l’expérience utilisateur et
          analyser le trafic. Vous pouvez les gérer via votre navigateur.
        </p>
      </section>

      <p className={styles.footerNote}>
        &copy; {new Date().getFullYear()} Awa Consulting. Tous droits réservés.
      </p>
    </main>
  );
}
