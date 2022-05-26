import React, { Component, useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { connect } from 'react-redux';
// import actions from action creators file
import * as actions from '../actions/actions';

const mapDispatchToProps = dispatch => ({
  // create functions that will dispatch action creators
  initArtActionCreator: (artList) => dispatch(actions.initArtActionCreator(artList)),
});

const CurateArt = props => {

  let navigate = useNavigate();

  return (
    <div className="container">
      <div className="welcomecontainer">
        <button onClick={async () => {
          const artList = new Array(9).fill(null);
          const artDetails = {};
          const data = await fetch('/api/')
            .then(res => res.json())
            .catch(err => console.log('initArtList: get art list: ERROR: ', err));
          for (let i = 0; i < 9; i++) {
            artList[data[i]._id - 1] = data[i].art_id;
            if (typeof data[i].art_id === 'string') {
              artDetails[data[i].art_id] = await fetch(`/api/art?id=${data[i].art_id}`)
                .then(res => res.json())
                .catch(err => console.log('initArtDetails: get display info: ERROR: ', err));
            }
          }
          // console.log(artList);
          await props.initArtActionCreator([artList, artDetails])
          navigate('/exhibit');
        }} className='routeButton'>Welcome</button>
      </div>
    </div>
  )
}

export default connect(null, mapDispatchToProps)(CurateArt);