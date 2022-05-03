import './App.css';
import Tittle from './components/Tittle';
import Form from './components/Form';
import Results from './components/Results';
import React, { useState } from 'react';
import axios from 'axios';
import { baseUrl, urlAirQurlity } from './components/Const';

function App() {
  const [city, setCity] = useState("")
  const [results, setResults] = useState({
    country: "",
    cityName: "",
    temperature: "",
    conditionText: "",
    icon: "",
  });
  var url = "";
  const getWeather = (e) => {
    e.preventDefault();
    url = baseUrl + {city}.city + urlAirQurlity
    axios.get(url).then((res) =>
      setResults({
        country: res.data.location.country,
        cityName: res.data.location.name,
        temperature: res.data.current.temp_c,
        conditionText: res.data.current.condition.text,
        icon: res.data.current.condition.icon,
      })
    );
  };
  return (
    <div className="wrapper">
          <div className="container">
      <Tittle />
      <Form  setCity={setCity} getWeather={getWeather}/>
      <Results results ={results} />
      </div>
    </div>
  );
}

export default App;