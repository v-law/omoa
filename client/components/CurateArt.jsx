import React, { Component, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
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
  addArtActionCreator: (artId) => dispatch(actions.addArtActionCreator(artId)),
  setNewPlacementActionCreator: (placement) => dispatch(actions.setNewPlacementActionCreator(placement)),
  deleteArtActionCreator: (exhibitId) => dispatch(actions.deleteArtActionCreator(exhibitId)),
});

const CurateArt = props => {
  const { artList, newLocation } = props;
  let divAddArt;
  if (props.newLocation > -1) {
    divAddArt = (<div className="curatecontainer">
      Search: <input type="text" id='searchinput' />
      <button onClick={async () => {
        const query = document.querySelector('#searchinput').value;
        const objectID = await fetch(`https://collectionapi.metmuseum.org/public/collection/v1/search?hasImages=true&q=${query.split(' ').join('+')}`)
          .then(res => res.json())
          .then(data => {
            for (let i = 0; i < data.objectIDs.length; i++) {
              if (data.objectIDs[i].primaryImage.length > 0) return data.objectIDs[i];
            }
          })
          .catch(err => console.log('artReducer.ADD_ART: Met API search query: ERROR: ', err));
        const info = await fetch(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${objectID}`)
          .then(res => res.json())
          .then(data => {
            return data;
          })
          .catch(err => console.log('artReducer.ADD_ART: Met API objectID query: ERROR: ', err));
        const artId = await fetch('/api/art', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: [JSON.stringify(info), state.newLocation]
        });
        props.addArtActionCreator(artId);
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
      <div className="btnContainer">
        <Link to={'/exhibit'}>
          <button type="button" className="routeButton">
            Back to Exhibit
          </button>
        </Link>
      </div>
      {divAddArt}
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