import React from "react";
import styles from "./Card.module.css";

const Card = (props) => {
  return (
    <ul className={styles.Card}>
      <li key={props.id}>
        <h2>{props.country}</h2>
        <h3>{props.confirmed}</h3>
        <h3>{props.deaths}</h3>
        <h3>{props.cases}</h3>
      </li>
    </ul>
  );
};

export default Card;
