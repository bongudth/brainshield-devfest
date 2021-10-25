import React from "react"
import "../assets/scss/Header.scss"
import { Link } from "react-router-dom"
import logo from "../assets/images/logo.png"
import metamask from "../assets/images/metamask.png"
import { Button } from 'antd'

const Header = () => {
  return (
    <div className="header-container">
      <Link to="/">
        <div className="header-left">
          <img src={logo} className="logo" alt="logo"></img>
          <div className="brainshield">Brainshield</div>
        </div>
      </Link>
      <div className="header-right">
        <Link to="/explore">
          <Button className="button">Explore products</Button>
        </Link>
        <Link to="/new">
          <Button className="button">New product</Button>
        </Link>
        <Link to="/">
          <Button className="button metamask">
            <img src={metamask} alt="metamask" />
          </Button>
        </Link>
      </div>
    </div>
  )
}

export default Header
