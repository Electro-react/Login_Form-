import React from "react";

const happy=()=>{
    return(<h1>be happy</h1>)
}

const Login_issue= (props)=>{
    return(<>
    <span href="#"style={{color:'#22395d',fontWeight: "bold" }} >{props.forget}</ span>
    <p>Don't have an account?<span style={{color:'#22395d',fontWeight: "bold" }}>Register here</span></p>
    </>)
}

export default Login_issue;