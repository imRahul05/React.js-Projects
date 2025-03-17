import {legacy_createStore} from 'redux'

import {reducer} from '../Redux/counterReducer'

export const counterStore = legacy_createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ ?.());


// console.log(counterStore)
// console.log(counterStore.getState())

