import styles from "./Card.module.css";

const Card = ({
  type,
  classStyle,
  title,
  placeholder,
  structure,
  children,
}) => {
  const placeholderContent = (
    <div className={`${styles["card-placeholder"]}`}>
      <img id="image" src={`/img/app_icons/${type}.webp`} />
      <span>{title}</span>
    </div>
  );

  console.log(structure);
  return (
    <div className={`${styles.card} ${classStyle}`}>
      {placeholder ? placeholderContent : null}
      {structure === "column" ? (
        <div className={`${styles["card-content"]}`}>{children}</div>
      ) : (
        children
      )}
    </div>
  );
};

export default Card;
