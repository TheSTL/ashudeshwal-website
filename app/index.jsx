import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render } from 'react-dom';
import MainApp from './Modules/Main/component';
import './index.css';

const App = () => (
  <BrowserRouter>
    <MainApp />
  </BrowserRouter>
);

render(<App />, document.getElementById('app'));
