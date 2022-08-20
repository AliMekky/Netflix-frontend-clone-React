import React from 'react'
import "./register.scss"
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

function Register() {
  const [email,setEmail] = React.useState("");
  const [password,setPassword] = React.useState("");
  const [currEmail,setCurrEmail] = React.useState("");
  const [currPassword,setCurrPassword] = React.useState("");

  function updateEmail(event){
    const current = event.target.value;
    setCurrEmail(current);
  }

  function updatePassword(event){
    const current = event.target.value;
    setCurrPassword(current);
  }
  
  
  
  function handleStart(){
    setEmail(currEmail);
  }


  function handleFinish(event){
    setPassword(currPassword);
  }
  return (
    <div className = "register">
      <div className = "top">
        <div className = "wrapper">
            <img className = "logo "src = "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png" alt = ""/>
            <button className = "loginButton">Sign In</button>
        </div> 
      </div>
      <div className = "registerContainer">
        <h1>Unlimited movies, TV shows, and more.</h1>
        <h2>Watch anywhere. Cancel anytime.</h2>
        <p>
          Ready to watch? Enter your email to create or restart your membership.
        </p>
        {!email ? (
          <div className = "input">
            <input type = "email" placeholder = "Email address" value = {currEmail} onChange = {updateEmail}></input>
            <button className = "registerButton"  onClick = {handleStart}>Get Started<ArrowForwardIosIcon className = "icon"/></button>
          </div>
        ) :     
          (
            <div className = "input">
              <input type = "password" placeholder = "Password" value = {currPassword} onChange = {updatePassword}></input>
              <button className = "registerButton" onClick = {handleFinish}>Start<ArrowForwardIosIcon className = "icon" /></button>
            </div>)}
 
      </div>
    </div>
  )
}

export default Register;
