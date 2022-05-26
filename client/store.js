import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducers from './reducers/index';

// add composeWithDevTools to get easy access to the Redux dev tools
const store = createStore(
  reducers,
  composeWithDevTools()
);

export default store;