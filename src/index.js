import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  //o strict mode mostra problemas na aplicação
  //ou seja, ao concluir posso apagar
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


