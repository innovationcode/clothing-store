import React from 'react';
import './App.css';
import {Route, Switch} from 'react-router-dom';

import HomePage from './pages/homepage/homepage.component.jsx'
import ShopPage from './pages/shop/shop.component.jsx'
import Header from './components/header/header.component.jsx';

function App() {
  return (
    // <div className="App">

    //   <h1>Clothing Store....</h1>

    //   <HomePage />
    // </div>
    <div>
      <Header />
      <Switch>
          <Route exact path = '/' component = {HomePage} />
          <Route exact path = '/shop' component = {ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
