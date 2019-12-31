import React from 'react';
import { 
  BrowserRouter as Router, 
  Route, 
  Redirect, 
  Switch 
} from 'react-router-dom';

// CSS
import 'bootstrap/dist/css/bootstrap.min.css';

// Pages
import MainNavigation from './shared/components/Navigation/MainNavigation'
import Users from './user/pages/Users'
import NewProduct from './products/pages/NewProduct'
import UserProducts from './products/pages/UserProducts';


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
          <Route path="/:userId/products" exact>
            <UserProducts />
          </Route>
          <Route path="/products/new" exact>
            <NewProduct />
          </Route>
          <Redirect to="/" />
        </Switch>
      </main>
    </Router>
  )
};


export default App;
