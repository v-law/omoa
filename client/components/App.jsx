import React, { Component } from 'react';
import { Routes, Route } from 'react-router-dom';

import { connect } from "react-redux";

import Welcome from './Welcome.jsx';
import Art from './Art.jsx';
import CurateArt from './CurateArt.jsx';

const mapState = state => state;

const App = props => {
  // const pathname = window.location.pathname;
  // let component;
  // if (pathname === '/') { component = (<Welcome />); }
  // else if (pathname === '/exhibit') { component = (<Art />); }
  // else if (pathname === '/curate') { component = (<CurateArt />); }
  // else { component = (<h5>this exhibit is under construction</h5>) }
  return (
    <div>
      <main>
        {/* {component} */}
        <Routes>
          <Route
            exact
            path="/"
            element={<Welcome />}
          />
          <Route
            exact
            path="/exhibit"
            element={<Art />}
          />
          <Route
            exact
            path="/curate"
            element={<CurateArt />}
          />
        </Routes>
      </main>
    </div>
  );
};

export const ConnectedApp = connect(mapState)(App);