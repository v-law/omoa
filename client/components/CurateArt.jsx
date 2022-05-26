import React, { Component, useState, useEffect } from 'react';
import { connect } from 'react-redux';
// import actions from action creators file
import * as actions from '../actions/actions';

const mapStateToProps = state => ({
  // provide pertinent state here
  artList: state.art.artList,
  newLocation: state.art.newLocation,
});

const mapDispatchToProps = dispatch => ({
  // create functions that will dispatch action creators
  addArtActionCreator: (objectId) => dispatch(actions.addArtActionCreator(objectId)),
  setNewPlacementActionCreator: (placement) => dispatch(actions.setNewPlacementActionCreator(placement)),
  deleteArtActionCreator: (exhibitId) => dispatch(actions.deleteArtActionCreator(exhibitId)),
});

const CurateArt = props => {
  console.log('props', props);
  const {artList, newLocation} = props;
  console.log('artList', artList);
  console.log('newLocation', newLocation);
  let divAddArt;
  if (props.newLocation > -1) {
    divAddArt = (<div className="curatecontainer">
    Search: <input type="text" id='searchinput' />
    <button onClick={() => {
      props.addArtActionCreator(document.querySelector('#searchinput').value);
      document.querySelector('#searchinput').value = '';
    }}>Add Art</button>
  </div>)
  } else {
    divAddArt = (<div className="curatecontainer">
      Your exhibit is currently full! Remove art to add more.
    </div>)
  }

  return (
    <div className="container">
      <div className="curatecontainer">
        {divAddArt}
      </div>
      <div className="curatecontainer">
        Move Placement of Box: <input type="text" id='placementfrominput' /> to <input type="text" id='placementtoinput' />
        <button onClick={() => {
          props.setNewPlacementActionCreator(`${document.querySelector('#placementfrominput').value},${document.querySelector('#placementtoinput').value}`);
          document.querySelector('#placementfrominput').value = '';
          document.querySelector('#placementtoinput').value = '';
        }}>Move Art</button>
      </div>
      <div className="curatecontainer">
        Remove: <input type="text" id='removeinput' />
        <button onClick={() => {
          props.deleteArtActionCreator(document.querySelector('#removeinput').value);
          document.querySelector('#removeinput').value = '';
        }}>Remove Art</button>
      </div>
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(CurateArt);