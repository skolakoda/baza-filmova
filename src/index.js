import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router } from 'react-router-dom'

import './index.css';
import App from './App';

const basename = process.env.NODE_ENV === 'development' ? '' : 'programerski-citati'

ReactDOM.render((
  <Router basename={basename}>
    <App />
  </Router>
), document.getElementById('root'))
