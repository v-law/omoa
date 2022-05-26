import React, { Component, useState, useEffect } from 'react';
import { connect } from 'react-redux';
// import actions from action creators file
import * as actions from '../actions/actions';

const mapDispatchToProps = dispatch => ({
  // create functions that will dispatch action creators
  initArtActionCreator: (artList) => dispatch(actions.initArtActionCreator(artList)),
});

const CurateArt = props => {

  return (
    <div className="container">
      <button onClick={async () => {
        const artList = new Array(9).fill(null);
        const data = await fetch('/api/')
          .then(res => res.json())
          .catch(err => console.log('initArtList: get art list: ERROR: ', err));
        for (let i = 0; i < 9; i++) {
          artList[data[i]._id - 1] = data[i].art_id;
        }
        console.log(artList);
        await props.initArtActionCreator(artList)
        window.location.href='/exhibit';
      }} className='routeButton'>Welcome</button>
    </div>
  )
}

export default connect(null, mapDispatchToProps)(CurateArt);