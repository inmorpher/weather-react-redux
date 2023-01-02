import React from "react";
import styles from "./Search.module.css";
import globalStyles from "../../Global.module.css";

const Search = () => {
  return (
    //    Search item
    <div
      className={`${styles.search} ${globalStyles["grid-item"]} ${globalStyles.flex}`}
    >
      <form action="#">
        <input
          type="text"
          placeholder="type your city..."
          name="weather search"
        />
        <button className={styles["search-location-btn"]}></button>
        <button className={styles["search-form-btn"]} type="submit"></button>
      </form>
      <div
        className={`${styles["search-controls"]} ${globalStyles["bg-blur"]}`}
      >
        <a href="" className={`${styles.metric} ${styles.active}`}>
          metric: °C, m/s
        </a>
        <a href="" className={styles.imperial}>
          imperial: °F, mph
        </a>
      </div>
    </div>
  );
};

export default Search;
