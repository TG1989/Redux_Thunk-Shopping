import { ActionTypes } from "../actionTypes"

const initialState = {
  isLoading: false,
  isError: false,
  cart: [],
}

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.SET_CART_LOADING:
      return {
        ...state,
        isLoading: true
      }
    case ActionTypes.SET_CART_ERROR:
      return {
        ...state,
        isLoading: false,
        isError: action.payload
      }

    case ActionTypes.SET_CART:
      return {
        ...state,
        isLoading: false,
        isError: false,
        cart: action.payload
      }

    case ActionTypes.ADD_TO_CART:
      return {
        ...state,
        cart: state.cart.concat(action.payload),
      }
      console.log(action.payload);

    case ActionTypes.UPDATE_ITEM:
      //state.cart.map((item) => {
      // if (item.id === action.payload) {
      //   return { ...item, amount: item + 1 }
      // }else{
      //   return item
      // }})

      const newCart = state.cart.map((i) => i.id === action.payload
        ? { ...i, amount: i.amount + 1 }
        : i
      )
      return { ...state, cart: newCart }

      case ActionTypes.REMOVE_ITEM:
        const updatedCart = state.cart.filter(
          (i)=>i.id!==action.payload
          )
          return {...state, cart: updatedCart}




    default:
      return state
  }
}

export default cartReducer