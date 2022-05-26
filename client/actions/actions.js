// import actionType constants
import * as types from '../constants/actionTypes';

const initArtActionCreator = artList => ({
  type: types.INIT_ART,
  payload: artList,
});

const addArtActionCreator = artId => ({
  type: types.ADD_ART,
  payload: artId,
});

const setNewPlacementActionCreator = placement => ({
  type: types.SET_NEW_PLACEMENT,
  payload: placement,
});

const deleteArtActionCreator = exhibitId => ({
  type: types.DELETE_ART,
  payload: exhibitId,
});

export {initArtActionCreator, addArtActionCreator, setNewPlacementActionCreator, deleteArtActionCreator};