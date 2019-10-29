import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render } from 'react-dom';
import './index.css';

const App = () => (
  <BrowserRouter>
    <h1>Hello World</h1>
  </BrowserRouter>
);

render(<App />, document.getElementById('app'));
