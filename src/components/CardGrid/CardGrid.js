import React from "react";
import styles from "./CardGrid.module.css";
import PropTypes from "prop-types";

const CardGrid = (props) => {
  const { children, reference } = props;
  return (
    <div className={styles.grid} ref={reference}>
      {children}
    </div>
  );
};

CardGrid.propTypes = {
  reference: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
};
export default CardGrid;
