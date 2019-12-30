import React from 'react';
import { 
  BrowserRouter as Router, 
  Route, 
  Redirect, 
  Switch 
} from 'react-router-dom';

// CSS
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

// Pages
import MainNavigation from './shared/components/Navigation/MainNavigation'
import Users from './user/pages/Users'
import Basket from './products/pages/Product'

// Components


const App = () => {
  return (
    <Router>
      <MainNavigation />
      <main>
        <Switch>
          <Route path="/" exact>
            <Users />
          </Route>
          <Route path="/products/new" exact>
            <Basket />
          </Route>
          <Redirect to="/" />
        </Switch>
      </main>
    </Router>
  )
};


export default App;
