import styles from "./Testimonials.module.css";

const companies = [
  {
    src: "/images/DevQodeStudio.png",
    alt: "Entreprise créée par Awa Consulting 1",
  },
  {
    src: "/images/1000005936.jpg",
    alt: "Entreprise créée par Awa Consulting 2",
  },
  {
    src: "/images/1000005939.jpg",
    alt: "Entreprise créée par Awa Consulting 3",
  },
  {
    src: "/images/1000005942.jpg",
    alt: "Entreprise créée par Awa Consulting 4",
  },
];

const testimonials = [
  {
    name: "Sophie L.",
    role: "Fondatrice de StartUp Tech",
    text: "Awa Consulting a transformé mon idée en entreprise opérationnelle en un temps record. Un accompagnement premium et sans stress !",
  },
  {
    name: "Mohamed K.",
    role: "Entrepreneur",
    text: "J’ai pu me concentrer sur mon projet pendant qu’Awa Consulting gérait toutes les démarches juridiques et administratives.",
  },
  {
    name: "Aghiles B.",
    role: "Entrepreneur IT",
    text: "Service impeccable et très professionnel. La création de mon entreprise a été fluide et efficace grâce à Awa Consulting.",
  },
];

export default function CompaniesTestimonials() {
  return (
    <section className={styles.wrapper} id="portfolio">
      {/* Logos entreprises */}
      <div className={styles.companiesSection}>
        <h2>Ils m'ont fait confiance</h2>
        <ul className={styles.logos}>
          {companies.map((company, index) => (
            <li key={index} className={styles.logoItem}>
              <img
                src={company.src}
                alt={company.alt}
                className={styles.logo}
              />
            </li>
          ))}
        </ul>
      </div>

      {/* Témoignages clients */}
      <div className={styles.testimonialsSection}>
        <h2>Ce que disent nos clients</h2>
        <ul className={styles.cards}>
          {testimonials.map((item, index) => (
            <li key={index} className={styles.card}>
              <p className={styles.text}>"{item.text}"</p>
              <h3 className={styles.name}>{item.name}</h3>
              <span className={styles.role}>{item.role}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
