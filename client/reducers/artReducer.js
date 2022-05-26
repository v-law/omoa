import * as types from '../constants/actionTypes';

const artList = new Array(9);
fetch('/api/')
  .then(res => res.json())
  .then((info) => {
    for (let i = 0; i < 9; i++) {
      artList[info[i]._id - 1] = info[i].art_id;
    }
    console.log(artList);
  })
  .catch(err => console.log('artReducer.getArtList: get art list: ERROR: ', err));

let newLocation = -1;
for (let i = 0; i < 9; i++) {
  if (!artList[i]) {
    newLocation = i;
    break;
  }
}

const initialState = {
  artList: artList,
  newLocation: newLocation,
};

const artReducer = async (state = initialState, action) => {

  switch (action.type) {
    case types.ADD_ART:
      const query = action.payload;
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
      await fetch('/api/art', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: [JSON.stringify(info), state.newLocation]
      });
      const artList = new Array(9);
      fetch('/api/')
        .then(res => res.json())
        .then((info) => {
          for (let i = 0; i < 9; i++) {
            artList[i] = info[i].art_id;
          }
          console.log(artList);
        })
        .catch(err => console.log('artReducer.getArtList: get art list: ERROR: ', err));
      let newLocation = -1;
      for (let i = 0; i < 9; i++) {
        if (!artList[i]) {
          newLocation = i;
          break;
        }
      }
      return {
        ...state,
        artList,
        newLocation,
      }
    case types.SET_NEW_PLACEMENT:


    case types.DELETE_ART:

    default: {
      console.log('state', state);
      return state;
    }
  }
};

export default artReducer;