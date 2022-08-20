import React from 'react'
import "./login.scss"
import {useMediaQuery} from "react-responsive"; 
//import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

function Login() {

  const isTabletOrMobile = useMediaQuery({
    query : '(max-width: 600px)'
  })

  return (
    <div className = "login">
      <div className = "top">
        <div className = "wrapper">
        <img  style = {!isTabletOrMobile ? {height : "1.875rem"} : {position : "absolute", left: "10px", top : "10px", width : "50px",height : "50px"}} src = {!isTabletOrMobile ? "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png" : "https://preview.redd.it/gj1t3nckxyx61.png?auto=webp&s=a0925041ccf11f7453ba4b27cfec24afa0f34594"} alt = ""/>
        </div> 
      </div>
      <div className = "formContainer">
        <form>
          <h1>Sign In</h1>
          <input type = "email" placeholder = "Email or phone number"/>
          <input type = "password" placeholder = "Password"/>
          <button className = "loginButton">Sign In</button>
          <span>New to Netflix? <b>Sign up now.</b></span>
          <small>
            This page is protected by Google reCAPTCHA to ensure you're not a bot <b>Learn more</b>
          </small>
        </form>
 
      </div>
    </div>
  )
}

export default Login;
