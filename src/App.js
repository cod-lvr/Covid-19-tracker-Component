import React from 'react';
import Search from './components/search/Search';

function App() {

  const searchInputHandler = (data) => {
    console.log(data);
  }

  return (
    <React.Fragment>
      <section>
        <h2>COVID-19 Api</h2>
      </section>
      <section>
        <Search onSearch={searchInputHandler}/>
      </section>
    </React.Fragment>
  );
}

export default App;
