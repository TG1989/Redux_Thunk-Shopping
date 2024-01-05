import axios from "axios"
import { ActionTypes } from "../actionTypes"

export const getCart = () => (dispatch) => {

  dispatch({ type: ActionTypes.SET_CART_LOADING })

  axios
    .get("http://localhost:3050/cart")
    .then(
      (res) => dispatch({
        type: ActionTypes.SET_CART,
        payload: res.data
      })
    )
    .catch(
      (err) => dispatch({
        type: ActionTypes.SET_CART_ERROR,
        payload: res.data
      })
    )
}

export const addToCart = (product) => (dispatch) => {
  //1. Create new object and add amount:1
  const newProduct = ({ ...product, amount: 1 });

  //2.remove unnecessary items from object
  delete newProduct.features
  delete newProduct.color
  delete newProduct.title

  //3. add the product to api
  axios.post('http://localhost:3050/cart', newProduct)
    //4. add the new product to store
    .then(() => {
      dispatch({
        type: ActionTypes.ADD_TO_CART,
        payload: newProduct
      })
    })

}

export const increaseAmount = (product) => (dispatch) => {

  axios.patch(`http://localhost:3050/cart/${product.id}`,
    { amount: product.amount + 1, })
    .then(() => {
      dispatch({
        type: ActionTypes.UPDATE_ITEM,
        payload: product.id,
      })
    })
}

export const deleteItem = (id) => (dispatch) => {
axios.delete(`http://localhost:3050/cart/${id}`)
.then(()=>{
  dispatch({
    type:ActionTypes.REMOVE_ITEM,
    payload: id,
   })
})
}