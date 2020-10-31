import React, { Fragment, useState, useEffect } from 'react';
import './index.css';
import Header from './components/Header';
import Form from './components/Form';
import Weather from './components/Weather';

function App() {

  const [search, saveSearch ] = useState({
    city: '',
    country: ''
});

  const [ query, saveQuery ] = useState(false);

  const [ result, saveResult ] = useState({});

  const { city, country } = search;

  useEffect(() => {
    const queryAPI = async () => {
      if(query){
        const appId = 'a8298308b9b07993fb6328d8db06db02';
        const url = `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${appId}`;
        const response = await fetch(url);
        const result = await response.json();
        saveResult(result);
        saveQuery(false);
      }
    }
    queryAPI();
  },[query]);

  return (
    <Fragment>
      <Header
        title='Weather App'
      />
      <div className="contenedor-form">
        <div className="container">
          <div className="row">
            <div className="col m6 s12">
              <Form
                search={search}
                saveSearch={saveSearch}
                saveQuery={saveQuery}
              />
            </div>
            <div className="col m6 s12">
              <Weather
                result={result}
              />
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
