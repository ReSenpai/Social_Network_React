import React from "react";

import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";

const Navbar = props => {
  return (
    <nav className={styles.nav}>
      <div>
        <img src="" alt="Logo" />
      </div>
      <div>
        <Link to="Content">Main</Link>
      </div>
      <div>
        <Link to="Profile">Profile</Link>
      </div>
      <div>
        <Link to="Dialogs">Messages</Link>
      </div>
      <div>
        <Link to="Settings">Settings</Link>
      </div>
      <div>Avatar + Descrip</div>
    </nav>
  );
};

export default Navbar;
