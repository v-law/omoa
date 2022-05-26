import React, { Component } from 'react';
import { connect } from "react-redux";

import Welcome from './Welcome.jsx';
import Art from './Art.jsx';
import CurateArt from './CurateArt.jsx';

const mapState = state => state;

const App = props => {
  const pathname = window.location.pathname;
  let component;
  if (pathname === '/') { component = (<Welcome />); }
  else if (pathname === '/exhibit') { component = (<Art />); }
  else if (pathname === '/curate') { component = (<CurateArt />); }
  else { component = (<h5>this exhibit is under construction</h5>) }
  return (
    <div>
      <main>
        {component}
      </main>
    </div>
  );
};

export const ConnectedApp = connect(mapState)(App);