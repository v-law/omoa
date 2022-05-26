import * as types from '../constants/actionTypes';

// const artList = new Array(9).fill(null);
// fetch('/api/')
//   .then(res => res.json())
//   .then((info) => {
//     for (let i = 0; i < 9; i++) {
//       artList[info[i]._id - 1] = info[i].art_id;
//     }
//     console.log('initartList: ', artList);
//   })
//   .catch(err => console.log('artReducer.getArtList: get art list: ERROR: ', err));

// let newLocation = -1;
// for (let i = 0; i < 9; i++) {
//   if (!artList[i]) {
//     newLocation = i;
//     break;
//   }
// }

const initialState = {
  artList: new Array(9).fill(null),
  newLocation: -1,
};

const artReducer = (state = initialState, action) => {
  let newLocation;
  let artList;

  switch (action.type) {
    case types.INIT_ART:
      newLocation = -1;
      artList = action.payload;
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