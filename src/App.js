import React, { Fragment, useState, useEffect } from 'react';
import './index.css';
import Header from './components/Header';
import Form from './components/Form';

function App() {

  const [search, saveSearch ] = useState({
    city: '',
    country: ''
});

  const [ query, saveQuery ] = useState(false);

  const { city, country } = search;

  useEffect(() => {
    const queryAPI = async () => {

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
              2
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
