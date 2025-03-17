import {INCREMENT,DECREMENT,RESET} from '../Redux/actionTypes'
const initialState={
    firstCounter:0,
}

export const reducer =(state=initialState,action)=>{

    switch(action.type){

        case INCREMENT:
              return {firstCounter:state.firstCounter + action.payload}
        case DECREMENT:
            return {firstCounter:state.firstCounter-action.payload}
        case RESET:
            return {firstCounter:state.firstCounter-state.firstCounter}

        default:
            return state

    }
}