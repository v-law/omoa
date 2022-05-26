import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import ArtDisplay from './ArtDisplay.jsx';

const mapStateToProps = state => ({
  // add pertinent state here
  artList: state.art.artList,
  artDetails: state.art.artDetails,
});

const Art = props => {
  const { artList } = props;
  const exhibitElems = [];
  console.log('props.artList: ', artList);
  for (let i = 0; i < 9; i++) {
    if (typeof artList[i] !== 'string') {
      exhibitElems.push(<article className="artDisplay" id={`article${i}`} key={i}></article>);
    } else { exhibitElems.push(<ArtDisplay artId={artList[i]} data={props.artDetails[artList[i]]} id={`article${i}`} key={i} />) };
  }

  //onClick={event =>  window.location.href='/curate'}
  return (
    <div className="container">
      <div className="exhibitContainer">
        {exhibitElems}
      </div>
      <div className="curateBtnContainer">
        <Link to={'/curate'}>
          <button type="button" className="routeButton">
            Curate Exhibit
          </button>
        </Link>
      </div>
    </div>
  );
};

export default connect(mapStateToProps, null)(Art);