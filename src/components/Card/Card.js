import React from "react";
import styles from "./Card.module.css";
const Card = (props) => {
  const { image, name, socialMedia, office, reference } = props;
  return (
    <div className={styles.card} ref={reference}>
      <div className={styles.imageContainer}>
        <img
          src={image ? image : "https://fakeimg.pl/600x800/?text=ups"}
          alt={image ? `Photo of ${name}` : "Placeholder Image"}
          className={styles.image}
        />
      </div>
      <div>
        <div>{name}</div>
        <div>{socialMedia}</div>
        <div>{office}</div>
      </div>
    </div>
  );
};

export default Card;
