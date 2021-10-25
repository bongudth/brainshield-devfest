import React from "react"
import "../assets/scss/Header.scss"
import { Link } from "react-router-dom"
import logo from "../assets/images/logo.png"
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
      <div>
        <Link to="/explore">
          <Button className="button">Explore products</Button>
        </Link>
        <Link to="/new">
          <Button className="button">New product</Button>
        </Link>
      </div>
    </div>
  )
}

export default Header
