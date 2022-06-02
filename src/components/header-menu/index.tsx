import React from "react";
import { Link } from "react-router-dom";

// Styles
import "./header-menu.css";

const HeaderMenu = () => {
  return (
    <nav className="container-header-menu">
      <ul className="content-header-menu">
        <li className="header-menu-li"><a href="#profile" className="logo-name">Alef S. All</a></li>
        <li className="header-menu-li li-remove-visible">
          <ul className="content-header-menu">
            <li className="header-menu-li"><a href="#benefits" className="nav-main">Benefícios</a></li>
            <li className="header-menu-li"><a href="#projects" className="nav-main">Projetos</a></li>
            <li className="header-menu-li"><a href="#" className="nav-main">Processo</a></li>
            <li className="header-menu-li"><a href="#" className="nav-main">FAQ</a></li>
          </ul>
        </li>
        <li className="header-menu-li"><a href="#"  className="project-request">Solicitar projeto &gt; </a></li>
      </ul>
    </nav>
  )
}

export { HeaderMenu }