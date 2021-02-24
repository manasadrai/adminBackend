import React from "react";
import { Switch, Route } from "react-router-dom"

import './App.css';
import logo from './logo.svg';
import Login from './components/Login';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact><Login /></Route>
        <Route path="/home" exact><Home /></Route>
        <Route path="/*" exact>
          <h4>404 Not found</h4>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
