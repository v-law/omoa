import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Art from './Art.jsx';
// import CurateArt from './components/CurateArt';

const App = props => {
  return (
    <div className="router">
      <main>
        <Router><Layout><Routes>
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
        </Routes></Layout></Router>
      </main>
    </div>
  );
};

export default App;