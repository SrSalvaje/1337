import React from "react";
import styles from './CardGrid.module.css'

const CardGrid = (props) => {
    const {children, reference} = props
    return (
        <div className={styles.grid} ref={reference} >
            {children}
        </div>
    )
}
export default CardGrid;