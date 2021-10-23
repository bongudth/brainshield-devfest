import React from "react"
import "../assets/scss/Header.scss"
import { Link } from "react-router-dom"
import logo from "../assets/images/logo.jpg"
import { Button } from 'antd'
import GoogleLogin from 'react-google-login'

const handleLogin = async googleData => {
  const res = await fetch("http://localhost:8080/api/v1/auth/google", {
    method: "POST",
    body: JSON.stringify({
      token: googleData.tokenId
    }),
    headers: {
      "Content-Type": "application/json"
    }
  })
  const data = await res.json()
  console.log(data)
  console.log(googleData)
}

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
        <Link to="/new-product">
          <Button className="new-product-button">New product</Button>
        </Link>
        <GoogleLogin
          clientId="747812372260-8grkkgva5v847ksiag5vuo9gdvknuu7g.apps.googleusercontent.com"
          buttonText="Log in with Google"
          onSuccess={handleLogin}
          onFailure={handleLogin}
          cookiePolicy={'single_host_origin'}
        />
      </div>
    </div>
  )
}

export default Header
