import React, { useState } from "react";
import { useResize } from "../hooks/useResize";

export default function Navbar() {
  useResize().width;

  const [menuVisibility, setMenuVisibility] = useState(false);

  return (
    <nav className="navbar">
      <div className="nav-brand">DesignMinds®</div>
      {useResize().width > 627 ? (
        <ul className="nav-links">
          <li>
            <a href="#" className="nav-link">
              CASE STUDIES
            </a>
          </li>
          <li>
            <a href="#" className="nav-link">
              WORK
            </a>
          </li>
          <li>
            <a href="#" className="nav-link">
              ABOUT
            </a>
          </li>
          <li>
            <a href="#" className="nav-link">
              CONTACT
            </a>
          </li>
        </ul>
      ) : (
        <div className="burger">
          <button className="burger-menu" onClick={()=>setMenuVisibility(!menuVisibility)}>Menu</button>
          {menuVisibility ? <>
            <ul className="burger-nav-links">
          <li>
            <a href="#" className="burger-nav-link" >
              CASE STUDIES
            </a>
          </li>
          <li>
            <a href="#" className="burger-nav-link">
              WORK
            </a>
          </li>
          <li>
            <a href="#" className="burger-nav-link">
              ABOUT
            </a>
          </li>
          <li>
            <a href="#" className="burger-nav-link">
              CONTACT
            </a>
          </li>
        </ul>
          </> : <></>}
        </div>
      )}
    </nav>
  );
}
