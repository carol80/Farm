import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';

// CSS
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

// Pages
import Users from './pages/Users'
import Basket from './pages/Basket'

// Components


const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Users />
        </Route>
        <Route path="/baskets/new" exact>
          <Basket />
        </Route>
        <Redirect to="/" />
      </Switch>
    </Router>
  )
};


export default App;
