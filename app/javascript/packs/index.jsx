import React from 'react'
import ReactDOM from 'react-dom'
import 'bulma/css/bulma.min.css';
import Dashboard from '../applications/dashboard/index';

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Dashboard />,
    document.body.appendChild(document.createElement('div')),
  )
});

