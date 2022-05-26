import React, { Component } from 'react';

import Art from './Art.jsx';
import CurateArt from './CurateArt.jsx';

const App = props => {
  const pathname = window.location.pathname;
  if (pathname === '/') {
    return (
      <div>
        <main>
          <Art />
        </main>
      </div>
    );
  }
  else if (pathname === '/curate') {
    return (
      <div>
        <main>
          <CurateArt />
        </main>
      </div>
    );
  } else {
    return (
      <div>
        <main>
          <h5>this exhibit is under construction</h5>
          {/* <Route
            exact
            path="/"
            component={Art}
          />
          <Route
            exact
            path="/curate"
            component={CurateArt}
          /> */}
        </main>
      </div>
    );
  }
};

export default App;