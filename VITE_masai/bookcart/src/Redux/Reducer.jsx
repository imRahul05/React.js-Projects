import { ADD_TO_CART, REMOVE_FROM_CART, CLEAR_CART } from './Actions';

const initialState = {
  cart: [],
  total: 0
};

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const existingBook = state.cart.find(item => item.id === action.payload.id);
      
      if (existingBook) {
        const updatedCart = state.cart.map(item => 
          item.id === action.payload.id 
            ? { ...item, quantity: item.quantity + 1 } 
            : item
        );
        
        return {
          ...state,
          cart: updatedCart,
          total: state.total + action.payload.price
        };
      } else {
        return {
          ...state,
          cart: [...state.cart, { ...action.payload, quantity: 1 }],
          total: state.total + action.payload.price
        };
      }
      
    case REMOVE_FROM_CART:
      const bookToRemove = state.cart.find(item => item.id === action.payload);
      
      if (bookToRemove && bookToRemove.quantity > 1) {
        const updatedCart = state.cart.map(item => 
          item.id === action.payload 
            ? { ...item, quantity: item.quantity - 1 } 
            : item
        );
        
        return {
          ...state,
          cart: updatedCart,
          total: state.total - bookToRemove.price
        };
      } else {
        const updatedCart = state.cart.filter(item => item.id !== action.payload);
        const priceReduction = bookToRemove ? bookToRemove.price : 0;
        
        return {
          ...state,
          cart: updatedCart,
          total: state.total - priceReduction
        };
      }
      
    case CLEAR_CART:
      return initialState;
      
    default:
      return state;
  }
};

export default cartReducer;
