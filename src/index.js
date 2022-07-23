import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import TestJokes from './components/jokes/TestJokes';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <TestJokes />
  </React.StrictMode>
);
