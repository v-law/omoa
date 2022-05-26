import { combineReducers } from 'redux';

// import all reducers here
import artReducer from './artReducer';


// combine reducers
const reducers = combineReducers({
  // if we had other reducers, they would go here
  art: artReducer,
});

// make the combined reducers available for import
export default reducers;