import React from "react";
import styles from "./Card.module.css";
import PropTypes from "prop-types";

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
          <div className={styles.cardBackContainer}>
            {twitter && (
              <div>
                <span>Twitter: </span>
                {twitter}
              </div>
            )}
            {gitHub && (
              <div>
                <span>GitHub: </span>: {gitHub}
              </div>
            )}
            {stackOverflow && (
              <div>
                <span>StackOverflow:</span> {stackOverflow}
              </div>
            )}
            {linkedin && (
              <div>
                <span>LinkedIn: </span>
                {linkedin}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {
  image: PropTypes.string,
  name: PropTypes.string,
  office: PropTypes.string,
  twitter: PropTypes.string,
  gitHub: PropTypes.string,
  stackOverflow: PropTypes.string,
  linkedin: PropTypes.string,
  reference: PropTypes.string,
};

export default Card;
