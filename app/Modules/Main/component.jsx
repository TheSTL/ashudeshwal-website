import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Config from '../../config/config';

import Navbar from '../Navbar/component';
import Introduction from '../Introduction/component';
import Contact from '../Contact/component';
import About from '../About/component';

export default function component() {
  return (
    <div className="main-app">
      <Helmet>
        <title>Ashu Deshwal</title>
        <link rel="icon" href={Config.ENGINEER_IMAGE} type="image/png" />
      </Helmet>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Introduction} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
      </Switch>
    </div>
  );
}
