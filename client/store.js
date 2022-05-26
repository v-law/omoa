import { configureStore } from '@reduxjs/toolkit';
// import reducers from './reducers/index';
import artReducer from './reducers/artReducer';

const store = configureStore({
  reducer: {art: artReducer,},
});

export default store;