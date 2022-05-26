import React, { Component } from 'react';
import { connect } from 'react-redux';

import ArtDisplay from './ArtDisplay.jsx';

const mapStateToProps = state => ({
  // add pertinent state here
  artList: state.art.artList,
});

const Art = props => {
  const {artList} = props;
  const exhibitElems = [];
  console.log('props.artList: ', artList);
  for (let i = 0; i < 9; i++) {
    console.log(i, ': ', artList[i], artList[i] == null);
    if (artList[i] == null) {
      exhibitElems[i] = (<article className="artDisplay" id={`article${i}`} key={i}>empty</article>);
    } else {exhibitElems[i] = (<ArtDisplay artId={parseInt(exhibitElems[i])} id={`article${i}`} key={i} />)};
  }

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