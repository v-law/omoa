import * as types from '../constants/actionTypes';

const initialState = {
  artList: new Array(9).fill(null),
  newLocation: -1,
  artDetails: {},
};

const artReducer = (state = initialState, action) => {
  let newLocation;
  let artList;
  let artDetails;

  switch (action.type) {
    case types.INIT_ART:
      newLocation = -1;
      artList = action.payload[0];
      artDetails = action.payload[1];
      for (let i = 0; i < 9; i++) {
        if (!artList[i]) {
          newLocation = i;
          break;
        }
      }
      console.log('new state: ', artList, newLocation);
      return {
        ...state,
        artList,
        newLocation,
        artDetails,
      }

    case types.ADD_ART:
      artList = state.artList.slice();
      artList[state.newLocation] = action.payload;
      newLocation = -1;
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