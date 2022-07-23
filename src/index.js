import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Form from './components/forms/Form';
import TestJokes from './components/jokes/TestJokes';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Form />
  </React.StrictMode>
);
