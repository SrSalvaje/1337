import React from "react";
import styles from "./Card.module.css";

const Card = (props) => {
  const {
    image,
    name,
    office,
    twitter,
    gitHub,
    stackOverflow,
    linkedin,
    reference,
  } = props;
  return (
    <div className={styles.card} ref={reference}>
      <div className={styles.cardInner}>
        <div className={styles.cardFront}>
          <div className={styles.imageContainer}>
            <img
              src={image ? image : "https://fakeimg.pl/600x800/?text=ups"}
              alt={image ? `Photo of ${name}` : "Placeholder Image"}
              className={styles.image}
            />
          </div>

          <div>{name}</div>
          <div>{office}</div>
        </div>
        <div className={styles.cardBack}>
          <div>Find them in:</div>
          {twitter && <div>{`Twitter: ${twitter}`}</div>}
          {gitHub && <div>{`GitHub: ${gitHub}`}</div>}
          {stackOverflow && <div>{`StackOverflow: ${stackOverflow}`}</div>}
          {linkedin && <div>{`LinkedIn:${linkedin}`}</div>}
        </div>
      </div>
    </div>
  );
};

export default Card;
