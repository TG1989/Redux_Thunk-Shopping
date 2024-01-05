import React from "react"
import { useSelector } from "react-redux"
import { Link, NavLink } from "react-router-dom"

const Header = () => {
  const state = useSelector((store) => store.cart)
  const totalAmount = state.cart.reduce(
    (total, item) => total + item.amount, 0)

  return (

    <nav className="navbar bg-body-tertiary position-sticky 
    top-0 z-3 shadow">
      <div className="container-fluid">
        <Link to={'/'} className="navbar-brand" href="#">
          <img src="vite.svg"
            alt="Logo" width="30"
            height="24"
            className="d-inline-block align-text-top" />
          Redux Thunk
        </Link>

        <div>
          <NavLink className={"mx-3"} to='/'>Home</NavLink>
          <NavLink to='/cart'>
            <span>Cart</span>
            <span className="badge bg-danger mx-2">{String(totalAmount)}</span>
          </NavLink>
        </div>
      </div>
    </nav>

  )
}

export default Header