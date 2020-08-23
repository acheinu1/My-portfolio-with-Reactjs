import React from 'react';
import ReactDOM from 'react-dom';
import Parent from './Parent';
import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js';
import { BrowserRouter} from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter>
    <Parent />
  </BrowserRouter>,
  document.getElementById('root')
);
