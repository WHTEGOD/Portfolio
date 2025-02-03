const SidebarNavbar = () => {
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
    },
    logo: {
      fontSize: "36px",
      fontWeight: "bold",
      color: "#fff",
      marginBottom: "10px",
      
    },
    navLinks: {
      display: "flex",
      flexDirection: "column",
      gap: "5px",
      marginBottom:"500px",
      paddingLeft: "50px",
    },
    navLink: {
      textDecoration: "none",
      fontSize: "14px",
      color: "#aaa",
      opacity: 0.7,
      transition: "all 0.3s ease",
    },
    navLinkHover: {
      color: "#fff",
      opacity: 1,
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
    </div>
  );
};

export default SidebarNavbar;
