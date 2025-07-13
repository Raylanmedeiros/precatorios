import React, { useState } from "react";
import App from "./App";
import Sobre from "./pages/Sobre";
import Ajuda from "./pages/Ajuda";

export default function AppRouter() {
  const [page, setPage] = useState("consulta");
  const [menuOpen, setMenuOpen] = useState(false);

  let content;
  if (page === "sobre") content = <Sobre />;
  else if (page === "ajuda") content = <Ajuda />;
  else content = <App />;

  return (
    <div>
      <header className="header">
        <div className="header-content">
          <span className="logo">Precatórios Campo Alegre</span>
          <button
            className="menu-toggle"
            aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
          <nav>
            <ul className={`header-menu ${menuOpen ? "open" : "closed"}`}>
              <li
                className={page === "consulta" ? "active" : ""}
                onClick={() => { setPage("consulta"); setMenuOpen(false); }}
              >
                Consulta
              </li>
              <li
                className={page === "sobre" ? "active" : ""}
                onClick={() => { setPage("sobre"); setMenuOpen(false); }}
              >
                Sobre
              </li>
              <li
                className={page === "ajuda" ? "active" : ""}
                onClick={() => { setPage("ajuda"); setMenuOpen(false); }}
              >
                Ajuda
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {content}
    </div>
  );
}
