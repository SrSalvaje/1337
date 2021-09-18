import React from "react";
import styles from './CardGrid.module.css'

const CardGrid = (props) => {
    const {children} = props
    return (
        <div className={styles.grid} >
            {children}
        </div>
    )
}
export default CardGrid;