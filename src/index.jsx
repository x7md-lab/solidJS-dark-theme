/* @refresh reload */
import 'windi.css';
import './styles/main.css'

import { render } from 'solid-js/web';
import { Router, hashIntegration } from 'solid-app-router';
import App from './app';

render(
  () => (
    <Router source={hashIntegration()}>
      <App />
    </Router>
  ),
  document.getElementById('root'),
);
