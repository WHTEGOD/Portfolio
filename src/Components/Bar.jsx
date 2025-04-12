import React, { useState, useEffect } from "react";
import { FaSun, FaMoon } from "react-icons/fa";

const SidebarNavbar = ({ toggleTheme, isDarkMode }) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [menuVisible, setMenuVisible] = useState(window.innerWidth >= 768);

  useEffect(() => {
    const handleResize = () => {
      const isNowMobile = window.innerWidth < 768;
      setIsMobile(isNowMobile);
      if (!isNowMobile) setMenuVisible(true);
      else setMenuVisible(false);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const styles = {
    sideNavbar: {
      display: menuVisible ? "flex" : "none",
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
      zIndex: 999,
    },
    logo: {
      fontSize: "36px",
      fontWeight: "bold",
      color: isDarkMode ? "#fff" : "#000",
      marginBottom: "10px",
      cursor: isMobile ? "pointer" : "default",
    },
    navLinks: {
      display: "flex",
      flexDirection: "column",
      gap: "5px",
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

  const handleLogoClick = () => {
    if (isMobile) setMenuVisible(!menuVisible);
  };

  return (
    <>
      {/* Show top-left toggle only on mobile and when sidebar is hidden */}
      {isMobile && !menuVisible && (
  <div
    onClick={handleLogoClick}
    style={{
      position: "fixed",
      top: "10px",
      left: "10px",
      zIndex: 1000,
      fontSize: "36px",
      fontWeight: "bold",
      color: isDarkMode ? "#fff" : "#000",
      cursor: "pointer",
      width: "80px",
      height: "60px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "transparent",
    }}
  >
    P
  </div>
)}


      {/* Sidebar full when open */}
      <div style={styles.sideNavbar}>
        <div style={styles.logo} onClick={handleLogoClick}>
          {!isMobile && "P"}
        </div>
        <nav style={styles.navLinks}>
          {["Intro", "Technologies", "Projects", "Experience", "Contact"].map((item, index) => (
            <a
              key={index}
              href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
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
                document.querySelector(e.target.getAttribute("href")).scrollIntoView({
                  behavior: "smooth",
                });
                if (isMobile) setMenuVisible(false);
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
    </>
  );
};

export default SidebarNavbar;
