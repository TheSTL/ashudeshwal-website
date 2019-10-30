import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Navbar from '../Navbar/component';
import Introduction from '../Introduction/component';
import Contact from '../Contact/component';

export default function component() {
  return (
    <div className="main-app">
      <Navbar />
      <Switch>
        <Route exact path="/" component={Introduction} />
        <Route exact path="/about" component={Contact} />
        <Route exact path="/contact" component={Contact} />
      </Switch>
    </div>
  );
}
