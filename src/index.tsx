import React from 'react';
import { createRoot } from 'react-dom/client';
import './styles/index.scss';
import App from './App';

const container = document.getElementById('__root__') as HTMLElement;
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
