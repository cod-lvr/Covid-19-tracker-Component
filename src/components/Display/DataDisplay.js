import React from "react";
import { Fragment } from "react-is";
import styles from "./DataDisplay.module.css";
import Card from './Card';

const DataDisplay = (props) => {
  return (
    <Fragment>
      <section className={styles.boxes}>
        {props.countries.map((country) => {
         return <Card
            id={country.code}
            country={country.country}
            confirmed={country.todayCases}
            deaths={country.deaths}
            cases={country.cases}
          />;
        })}
        
      </section>
    </Fragment>
  );
};

export default DataDisplay;
