import { legacy_createStore as createStore } from 'react-redux';
import cartReducer from './Reducer';

const store = createStore(
  cartReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
