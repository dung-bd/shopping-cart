import React from 'react';
import './App.css';
import Header from './containers/Header';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import ProductListing from './containers/ProductListing';
import ProductDetail from './containers/ProductDetail';
import ProductCart from './containers/ProductCart';
import Login from './containers/Login';
import Header1 from './containers/Header1';
import {useSelector} from "react-redux";
import { selectUser } from './redux/reducers/productReducer';
function App() {
  const user = useSelector(selectUser)
  return (
    <div className="App">
      <Router>
      <Header />
      {user ? <Header1 /> : <Header />}
      <Switch>
      <Route path="/" exact component={ProductListing} />
      <Route path="/product/:productId" exact component={ProductDetail} />
      <Route path="/cart" exact component={ProductCart} />
      <Route path="/login" exact component={Login} />
      <Route>404 Not Found!</Route>
      </Switch>
      </Router>
    </div>
  );
}

export default App;
