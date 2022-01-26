import React from "react";
import "./index.css";
import LoginForm from "./Login_form";
import Login_issue from "./Login_issue";
import Slogan from "./SLOGAN";




function App(){
  return (<><div style={{background: 'linear-gradient(to right,#22395d 70%,white 70%)',fontFamily:"roboto"}}> <Slogan />
  <div id="login">
  <p style={{paddingBottom:"30px",fontSize:"40pt"}} >Log in</p>
  <LoginForm Email="Email/User id" password="Password" Submit="Login now"></LoginForm><br/>
  <Login_issue forget="Forget your password?" /><br/>
  <footer id="footer">Help  | Security</footer>
  </div></div>
  </>)
  }

 
  export default App;
  