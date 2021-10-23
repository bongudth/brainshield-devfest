import React from "react"
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
}

const Header = () => {
  return (
    <GoogleLogin
      clientId="747812372260-8grkkgva5v847ksiag5vuo9gdvknuu7g.apps.googleusercontent.com"
      buttonText="Log in with Google"
      onSuccess={handleLogin}
      onFailure={handleLogin}
      cookiePolicy={'single_host_origin'}
    />
  )
}

export default Header
