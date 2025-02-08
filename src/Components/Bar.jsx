import React from "react";
import { FaSun, FaMoon } from "react-icons/fa";

const SidebarNavbar = ({ toggleTheme, isDarkMode }) => {
  const styles = {
    sideNavbar: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "space-between",
      position: "fixed",
      left: 0,
      top: 0,
      bottom: 0,
      width: "80px",
      padding: "20px 0",
      backgroundColor: isDarkMode ? "#000" : "#fff",
      transition: "background 0.3s ease",
    },
    logo: {
      fontSize: "36px",
      fontWeight: "bold",
      color: isDarkMode ? "#fff" : "#000",
      marginBottom: "10px",
    },
    navLinks: {
      display: "flex",
      flexDirection: "column",
      gap: "5px",
      marginBottom: "500px",
      paddingLeft: "50px",
    },
    navLink: {
      textDecoration: "none",
      fontSize: "14px",
      color: isDarkMode ? "#aaa" : "#555",
      opacity: 0.7,
      transition: "all 0.3s ease",
    },
    navLinkHover: {
      color: isDarkMode ? "#fff" : "#000",
      opacity: 1,
    },
    toggleButton: {
      background: "none",
      border: "none",
      cursor: "pointer",
      fontSize: "24px",
      color: isDarkMode ? "#fff" : "#000",
      transition: "color 0.3s ease",
    },
  };

  return (
    <div style={styles.sideNavbar}>
      <div style={styles.logo}>P</div>
      <nav style={styles.navLinks}>
        {["Intro", "Technologies", "Projects", "Experience", "Contact"].map((item, index) => (
          <a
            key={index}
            href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
            style={styles.navLink}
            onMouseEnter={(e) => {
              e.target.style.color = styles.navLinkHover.color;
              e.target.style.opacity = styles.navLinkHover.opacity;
            }}
            onMouseLeave={(e) => {
              e.target.style.color = styles.navLink.color;
              e.target.style.opacity = styles.navLink.opacity;
            }}
            onClick={(e) => {
              e.preventDefault();
              document.querySelector(e.target.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
              });
            }}
          >
            {item}
          </a>
        ))}
      </nav>
      <button onClick={toggleTheme} style={styles.toggleButton}>
        {isDarkMode ? <FaSun /> : <FaMoon />}
      </button>
    </div>
  );
};

export default SidebarNavbar;
