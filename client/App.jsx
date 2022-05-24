import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Art from './components/Art';
import CurateArt from './components/CurateArt';

import './stylesheets/styles.css';

const App = props => {
  return (
    <div className="router">
      <main>
        <Switch>
          <Route
            exact
            path="/"
            component={Art}
          />
          <Route
            exact
            path="/curate"
            component={CurateArt}
          />
        </Switch>
      </main>
    </div>
  );
};

export default App;