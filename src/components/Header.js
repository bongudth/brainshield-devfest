import React from "react"
import "../assets/scss/Header.scss"
import { Link } from "react-router-dom"
import logo from "../assets/images/logo.jpg"
import { Button } from 'antd'

const Header = () => {
  return (
    <div className="header-container">
      <Link to="/">
        <div className="branch-container">
          <img src={logo} className="logo" alt="logo"></img>
          <div className="brainshield">Brainshield</div>
        </div>
      </Link>
      <Link to="/new-product">
        <Button className="new-product-button">New product</Button>
      </Link>
    </div>
  )
}

export default Header
