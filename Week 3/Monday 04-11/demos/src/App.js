import React, { Component } from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import Category from './Category';

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
)

const Products = () => (
  <div>
    <h2>Products</h2>
  </div>
)

export default function App() {
  return (
    
    <div>
      <nav className="navbar navbar-light">
        <ul className="nav navbar-nav">

          /* Link components are used for linking to other views */
          <li><Link to="/">Home</Link></li>
          <li><Link to="/category">Category</Link></li>
          <li><Link to="/products">Products</Link></li>

        </ul>
      </nav>


      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/category" component={Category} />
        <Route path="/products" component={Products} />
        <Route path="/:id/:id" render={() => (<p> I want this text to show up for all routes other than '/', '/products' and '/category' </p>)} />
      </Switch>

    </div>
  );
}
