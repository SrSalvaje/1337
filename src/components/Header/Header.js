import React from "react";
import styles from "./Header.Module.css";

const Header = (props) => {
  return (
    <header className={styles.header}>
      <div className={styles.title}> The Fellowship of the tretton37</div>
    </header>
  );
};

export default Header;
