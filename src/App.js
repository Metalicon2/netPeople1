import React from 'react';
import './App.css';
import Navigation from './components/Navigation/Navigation';
import Home from './components/Home/Home.js';
import Order from './components/Order/Order.js';
import FAQ from './components/FAQ/FAQ.js';
import Contact from './components/Contact/Contact.js';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

const App = () => {
  return (
    <Router>
        <Navigation/>
      <Switch>
        <Route path="/home">
          <Home/>
        </Route>
        <Route path="/order">
          <Order pageName='ORDER'/>
        </Route>
        <Route path="/faq">
          <FAQ pageName='FAQ'/>
        </Route>
        <Route path="/contact">
          <Contact pageName='CONTACT'/>
        </Route>
      </Switch>
  </Router>
  );
}

export default App;