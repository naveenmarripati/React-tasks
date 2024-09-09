import { useState } from "react"
import { login,logout } from "./loginReducer"
import React from "react"
import { useDispatch } from "react-redux"
import { useSelector } from "react-redux"
function LoginComponent(){
    const result = useSelector((state) => {
        return state
    })
    const dispatch=useDispatch()
    const [value,setValue]=useState("")
    const [uname,setUsername]=useState("")
    const [uemail,setEmail]=useState("")
   
    const handleChange=(e,keyword)=>{
       if(keyword==="uname"){
        setUsername(e.target.value)
       }
       else{
        setEmail(e.target.value)
       }
    }
    const len=result.todoData.length
    let count=0
    const handleLogin=(e)=>{
        count=len+1
       dispatch(login({ id:count,email:uemail,username:uname,status:false,active: true}))
    }
    const handleLogout=(e)=>{
        dispatch(logout())
     
    }
    return(
        <>
        {console.log("signin page")}
        Username:<input type='text'   onChange={(e)=>handleChange(e,"uname")}></input>
     
        email:<input type='text'   onChange={(e)=>handleChange(e,"email")}></input>
      
        <button onClick={(e)=>handleLogin(e)}>login</button>
        <button onClick={(e)=>handleLogout(e)}>logout</button>
        </>
    )
}
export default LoginComponent