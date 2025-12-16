import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState("");

  const sections = [
    { id: "#timeline", label: "Jornada" },
    { id: "#skills", label: "Skills" },
    { id: "#contato", label: "Contato" },
  ];

  const handleScroll = (id) => {
    if (location.pathname !== "/") {
      navigate("/", { replace: false });
      setTimeout(() => {
        const section = document.querySelector(id);
        if (section) section.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      const section = document.querySelector(id);
      if (section) section.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const handleScrollEvent = () => {
      let current = "";
      sections.forEach(({ id }) => {
        const section = document.querySelector(id);
        if (section) {
          const top = section.getBoundingClientRect().top;
          if (top <= 100) {
            current = id;
          }
        }
      });
      setActiveSection(current);
    };

    if (location.pathname === "/") {
      window.addEventListener("scroll", handleScrollEvent);
      return () => window.removeEventListener("scroll", handleScrollEvent);
    }
  }, [location.pathname]);

  return (
    <header>
      <nav className="navbar" aria-label="Menu principal">
        <div className="logo">
          <Link to="/">KRV</Link>
        </div>

        <ul className="nav-links">
          {sections.map(({ id, label }) => (
            <li key={id}>
              <button
                onClick={() => handleScroll(id)}
                className={activeSection === id ? "active" : ""}
              >
                {label}
              </button>
            </li>
          ))}

          <li>
            <Link to="/projetos">Projetos</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
