import React from "react";
import styles from './Card.module.css'
const Card = props => {
    const {image, name, socialMedia, office} = props
    return (
        <div className={styles.card}>
            <div className={styles.imageContainer}>
                <img src={image} className={styles.image} />
            </div>
            <div>
                <span>{name}</span><span>{socialMedia}</span>
            </div>
            <div>
                {office}
            </div>
        </div>
    )
}

export default Card;