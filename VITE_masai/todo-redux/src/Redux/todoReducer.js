

 export const todoReducer = (state,action) => {
   //newState

   switch(action){
    case ADD_TODO:
        return {
            ...state,
            todos:[...state.todos,action.payload]
        }
   }
}
