import React from "react";
import styles from './Header.Module.css'

const Header = (props) => {
    return (
        <header className={styles.header}>
            <h1 className={styles.title}> The Fellowship of the tretton37</h1>
        </header>
    )
}

export default Header