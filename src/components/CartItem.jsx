import { useDispatch } from "react-redux"
import { deleteItem, increaseAmount } from "../redux/actions/cartActions"


const CartItem = ({ item }) => {
  const dispatch = useDispatch()
  return (
    <div className="rounded-2 p-4 bg-white d-flex justify-content-between align-items-center mb-5 text-black">
      <div className="d-flex align-items-center gap-3">
        <img width={60} height={60} src={item.picture} alt="" />
        <h4>
          <span className="mx-1">{item.brand}</span>
          <span className="text-secondary">{item.model}</span>
        </h4>
        <h4 className="text-success">${item.price}</h4>
      </div>

      <div className="d-flex align-items-center gap-2">
        <span>Amount: {item.amount}</span>
        <button 
        onClick={() => dispatch(increaseAmount(item))} 
        className="btn btn-sm btn-primary">+
        </button>

        <button onClick={() => dispatch(deleteItem(item.id))} className="btn btn-sm btn-danger">
          X
          </button>
      </div>
    </div>
  )
}

export default CartItem