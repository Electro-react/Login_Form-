import React,{useState} from "react";
import "./index.css";



function LoginForm(props){
const [Bata,newdata]=useState("");
const [email,updateemail]=useState();
const showemail=(e)=>{
    e.preventDefault();
    return(
        updateemail(Bata)
    );
}; 
function getemail(data){
    return (newdata(data.target.value))}
    return  (<>
    <form onSubmit={showemail}>
    <p style={{fontWeight:'bold'}}>{props.Email}:{email}</p>
    <input type="text"  onChange={getemail} style={{borderRadius:"5px",fontSize:"20pt",fontWeight:'bold'}} name="Bata.demail" ></input><br/>
    <p style={{paddingTop:"20px",fontWeight:'bold'}}>{props.password}</p>
    <input type="password" style={{borderRadius:"5px",fontSize:"20pt"}} value={Bata.dpassword} name="Bata.dpassword"></input><br/>
    <div style={{paddingTop:"20px",cursor:"pointer"}}><input type="checkbox"  className="box"></input>
    <label><span style={{paddingInline:"10px",fontSize:'15pt',fontWeight:'bold'}}>Remember me?</span> </label><br/> <div style={{paddingTop:"20px"}}>
    <button type="submit" style={{cursor:"pointer",borderRadius:"10px" , paddingInline:"15%",paddingBottom:"5px",paddingTop:"5px"}} className="button" onClick={showemail}>{props.Submit}</button>
    </div></div></form></>)
};
export default LoginForm;   



