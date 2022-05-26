import React, { Component } from 'react';
import { connect } from 'react-redux';

import ArtDisplay from './ArtDisplay.jsx';

const mapStateToProps = state => ({
  // add pertinent state here
  artList: state.art.artList,
});

const Art = props => {
  console.log(props);
  const exhibit = props.artList
  const exhibitElems = new Array(9);
  // for (let i = 0; i < 9; i++) {
  //   if (exhibit[i] == null) {
  //     exhibitElems[i] = (<article className="artDisplay" id={`article${i}`} key={i}>empty</article>);
  //   } else {exhibitElems[i] = (<ArtDisplay exhibitID={exhibitID} id={`article${i}`} key={i} />)};
  // }

  return (
    <div className="container">
      <div className="exhibitContainer">
        {exhibitElems}
      </div>
      <div className="curateBtnContainer">
        <button type="button" className="routeButton" onClick={event =>  window.location.href='/curate'}>
          Curate Exhibit
        </button>
      </div>
    </div>
  );
};

export default connect(mapStateToProps, null)(Art);