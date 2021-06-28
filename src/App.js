import React, { useState } from "react";
import DataDisplay from "./components/Display/DataDisplay";
import Search from "./components/search/Search";
import styles from "./App.module.css";

function App() {
  const [countrie, setCountries] = useState([]);
  

  const searchInputHandler = (data) => {
    console.log(data);
  };

  const newUpdateHandler = () => {

    fetch("https://corona.lmao.ninja/v2/countries?yesterday=&sort=", {
      method: "GET",
    })
      .then((response) => {
        return response.json();
      })
      .then(data => {
        const returnedData = data.map(countries => {
          return {
            code: countries.countryInfo['_id'],
            country: countries.country,
            cases: countries.cases,
            todayCases: countries.recovered,
            deaths: countries.deaths,
          }
        })
        setCountries(returnedData);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <React.Fragment>
      <section>
        <h2>COVID-19 Api</h2>
      </section>
      <section>
        <Search onSearch={searchInputHandler} />
        <button onClick={newUpdateHandler} className={styles.btn}>last Update</button>
      </section>
      <section>
        <DataDisplay countries={countrie} />
      </section>
    </React.Fragment>
  );
}

export default App;