import React from "react";
import styles from "./Loading.module.css";

const Loading = () => {
  return (
    <div className={styles["loading-wrapper"]}>
      <span className={styles["loader"]}>Loading</span>
    </div>
  );
};

export default Loading;
