import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart, increaseAmount } from '../redux/actions/cartActions'

const Card = ({ product }) => {
  const state = useSelector(store => store.cart)
  const dispatch = useDispatch()

  const found = state.cart.find((item) => item.id === product.id)

  const handleClick = () => {
    if (found) {
      dispatch(increaseAmount(found))
    } else {
      dispatch(addToCart(product))
    }
  }


  return (
    <div className='card pt-4' style={{ width: '18rem' }}>
      <div className='d-flex justify-content-center'>

        <img
          src={product.picture}
          width={200}
          height={200}
          className='rounded'
        />

      </div>

      <div className='card-body'>
        <h5 className='card-title'>{product.title}</h5>
        <p>
          <span className='fw-bold me-2'>{product.brand}</span>
          <span>{product.model}</span>
        </p>
        <p className='d-flex flex-column'>
          {product.features.map((spec, i) => (
            <span key={i}>{spec}</span>
          ))}
        </p>

        <button onClick={handleClick} className='w-100 bg-dark text-white'>
          {found ? `Increase the amount (${found.amount})` : 'Add to Cart'}
        </button>
      </div>
    </div>


  )
}

export default Card