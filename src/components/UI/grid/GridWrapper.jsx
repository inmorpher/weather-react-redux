import styles from "./GridWrapper.module.css";
const GridWrapper = (props) => {
  return <main className={styles["content-grid"]}>{props.children}</main>;
};

export default GridWrapper;
