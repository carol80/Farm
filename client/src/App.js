import React, { useState, useCallback } from 'react';
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
import UpdateProduct from './products/pages/UpdateProduct';
import Auth from './user/pages/Auth';
import { AuthContext } from './shared/context/auth-context';
import Footer from './shared/components/Navigation/Footer';


// Components


const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userId, setuserId] = useState(null);

  const login = useCallback((uid) => {
    setIsLoggedIn(true);
    setuserId(uid);
  }, []);

  const logout = useCallback(() => {
    setIsLoggedIn(false);
    setuserId(null);
  }, []);

  let routes;

  if (isLoggedIn) {
    routes = (
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
        <Route path="/products/:productId">
          <UpdateProduct />
        </Route>
        <Redirect to="/" />
      </Switch>
    );
  } else {
    routes = (
      <Switch>
        <Route path="/" exact>
          <Users />
        </Route>
        <Route path="/:userId/products" exact>
          <UserProducts />
        </Route>
        <Route path="/auth">
          <Auth />
        </Route>
        <Redirect to="/auth" />
      </Switch>
    );
  }

  return (
    <AuthContext.Provider
      value={{ 
        isLoggedIn: isLoggedIn, 
        userId: userId, 
        login: login, 
        logout: logout 
      }}
    >
      <Router>
        <MainNavigation />
        <main>{routes}</main>
        <Footer />
      </Router>
    </AuthContext.Provider>
  )
};


export default App;
