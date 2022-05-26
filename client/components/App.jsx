import React, { Component } from 'react';

import Art from './Art.jsx';
import CurateArt from './CurateArt.jsx';

const App = props => {
  const pathname = window.location.pathname;
  let componenet;
  if (pathname === '/') { componenet = (<Art />); }
  else if (pathname === '/curate') { componenet = (<CurateArt />); }
  else { componenet = (<h5>this exhibit is under construction</h5>) }
  return (
    <div>
      <main>
        {componenet}
      </main>
    </div>
  );
};

export default App;