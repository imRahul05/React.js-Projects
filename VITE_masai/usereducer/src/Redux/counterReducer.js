import {INCREMENT,DECREMENT,RESET} from '../Components/actionTypes'
export const reducer =(state,action)=>{

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