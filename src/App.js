import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Switch, Route} from "react-router-dom"
import CountriesList from './components/CountriesList'
import CountryDetail from './components/CountryDetail'

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={CountriesList}/>
        <Route path ="/:cca3" component={CountryDetail}/>
      </Switch>
    </div>
  );
}

export default App;
