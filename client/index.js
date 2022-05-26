import React from 'react';
import * as ReactDOMClient from 'react-dom/client';
import { Provider } from 'react-redux';
import {ConnectedApp} from './components/App.jsx';
import store from './store';

import styles from './stylesheets/application.scss';

const container = document.getElementById('app');

// Create a root.
const root = ReactDOMClient.createRoot(container);

// Initial render: Render an element to the root.
root.render(
  <Provider store={store}>
    <ConnectedApp />
  </Provider>
);