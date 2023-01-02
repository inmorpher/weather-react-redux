import React from "react";
import styles from "./Card.module.css";
import globalStyles from "../../../Global.module.css";

const Card = (props) => {
  const cardClass = props.class;
  console.log(props);
  return (
    <div
      className={`${globalStyles["grid-item"]} ${styles.card} ${globalStyles["bg-blur"]}`}
    >
      <div className={`${styles["card-placeholder"]} ${styles.flex}`}>
        <img id="image" src="/img/app_icons/feels_like.webp" />
        <span>feeling</span>
      </div>
      <div className={`${styles["card-content"]} ${styles.flex}`}>
        {props.children}
      </div>
    </div>
  );
};

export default Card;
