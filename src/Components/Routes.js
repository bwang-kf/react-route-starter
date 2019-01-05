import React, { Fragment } from 'react';
import {Switch, Route, Link} from 'react-router-dom';
import {Home, About, Events, Products, Contact, NotFound} from './Pages';

const Routes = () => (
  <main>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/about" component={About} />
      <Route path="/events" component={Events} />
      <Route path="/products" component={Products} />
      <Route path="/contact" component={Contact} />
      <Route component={NotFound} />
    </Switch>
  </main>
)

export default Routes;