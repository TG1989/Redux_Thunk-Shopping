import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getCart } from "../redux/actions/cartActions"
import store from "../redux/store"
import Loading from "../components/Loading"
import CartItem from "../components/CartItem"

const CartPage = () => {
  const state = useSelector(store => store.cart)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getCart())
  }, [])

  const totalPrice = state.cart.reduce((total, i) => 
  total + i.price * i.amount, 0)

  return (
    <div className="row px-4 py-5">
      {state.isLoading && <Loading />}
      {state.isError && (<p className="text-center my-5 fw-bold">
        Sorry: {state.isError}
      </p>
      )}

      <div className="col-md-8 ">
        {state.cart.map((item) => <CartItem item={item} key={item.id} />)}
      </div>

      <div className="col-md-4">
        <div className="bg-white p-5 rounded w-100 text-dark">
          <h5 className="text-center">Total: {totalPrice}</h5>
          <button className="text-white w-100 btn btn-dark my-2">Complate</button>
        </div>
      </div>

    </div>
  )
}

export default CartPage