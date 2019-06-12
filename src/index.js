import React from 'react';
import ReactDOM from 'react-dom';
// drugi nacin da se BrowserRouter napise skraceno
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import App from './App';

ReactDOM.render(
    // obmotana App komponenta
    <Router>
        <App />
    </Router>,
    document.getElementById('root'));