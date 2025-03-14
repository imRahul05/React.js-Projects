const INCREMENT='INCREMENT'
const DECREMENT = 'DECREMENT'


function increment(){
    return {type:INCREMENT}
}

function decrement (){
    return {type:DECREMENT}
}

import {legacy_createStore} from 'redux'

const store = legacy_createStore()