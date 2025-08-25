"use client";

import { useState, useEffect } from "react";
import styles from "./Header.module.css";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setDarkMode(true);
      document.documentElement.setAttribute("data-theme", "dark");
    }
  }, []);

  const toggleTheme = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    document.documentElement.setAttribute(
      "data-theme",
      newMode ? "dark" : "light",
    );
  };

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className={styles.header}>
      <div className={styles.navContainer}>
        {/* Logo */}
        <a href="#hero" className={styles.logo}>
          Awa Consulting
        </a>

        {/* Desktop menu */}
        <nav className={styles.menu}>
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

          {/* Toggle desktop */}
          <div className={styles.themeSwitch}>
            <input
              type="checkbox"
              checked={darkMode}
              onChange={toggleTheme}
              className={styles.themeCheckbox}
              id="themeDesktop"
            />
            <label htmlFor="themeDesktop" className={styles.themeLabel}>
              <span className={styles.ball}></span>
            </label>
          </div>
        </nav>

        {/* Burger icon mobile */}
        <button
          className={`${styles.burger} ${menuOpen ? styles.open : ""}`}
          onClick={toggleMenu}
          aria-label="Menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      {/* Overlay */}
      {menuOpen && <div className={styles.overlay} onClick={closeMenu}></div>}

      {/* Mobile menu */}
      <div className={`${styles.mobileMenu} ${menuOpen ? styles.open : ""}`}>
        <nav className={styles.mobileNav}>
          <a href="#why" className={styles.menuLink} onClick={closeMenu}>
            Pourquoi nous
          </a>
          <a href="#process" className={styles.menuLink} onClick={closeMenu}>
            Process
          </a>
          <a href="#portfolio" className={styles.menuLink} onClick={closeMenu}>
            Témoignages
          </a>
          <a
            href="#contact"
            className={`${styles.menuLink} ${styles.cta}`}
            onClick={closeMenu}
          >
            Contact
          </a>

          {/* Toggle mobile */}
          <div className={styles.themeSwitchMobile}>
            <input
              type="checkbox"
              checked={darkMode}
              onChange={toggleTheme}
              className={styles.themeCheckbox}
              id="themeMobile"
            />
            <label htmlFor="themeMobile" className={styles.themeLabel}>
              <span className={styles.ball}></span>
            </label>
          </div>
        </nav>
      </div>
    </header>
  );
}
