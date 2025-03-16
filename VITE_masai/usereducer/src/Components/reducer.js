import {FETCH_ERROR, FETCH_LOADING, FETCH_SUCCESS} from '../Components/actionTypes'
export  const reducer=(state,action)=>{
    //newState
    switch(action.type){

        case FETCH_LOADING:
            return {
                posts:[],
                loading:true,
                error:''
            }
        case FETCH_SUCCESS:
            return {
                posts:action.payload,
                loading:false,
                error:''
            }
        case FETCH_ERROR:
            return {
                posts:[],
                loading:false,
                error:action.payload
            }
        default:
            return state
    }
}