import { legacy_createStore, combineReducers } from 'redux';
import counterReducer from './CountReducer';
import themeReducer from './ThemeReducer';

const rootReducer = combineReducers({
  counter: counterReducer,
  theme: themeReducer
});

const store = legacy_createStore(rootReducer);

export default store;
