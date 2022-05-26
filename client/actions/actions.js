// import actionType constants
import * as types from '../constants/actionTypes';

const addArtActionCreator = objectId => ({
  type: types.ADD_ART,
  payload: objectId,
});

const setNewPlacementActionCreator = placement => ({
  type: types.SET_NEW_PLACEMENT,
  payload: placement,
});

const deleteArtActionCreator = exhibitId => ({
  type: types.DELETE_ART,
  payload: exhibitId,
});

export {addArtActionCreator, setNewPlacementActionCreator, deleteArtActionCreator};