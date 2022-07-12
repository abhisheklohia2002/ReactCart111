import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router';


const Login = () => {
    const [Info,SetInfo] = useState("");
    const [pass,setpass] = useState("");

    const navigate = useNavigate()
    const Compare = (e)=>{
        e.preventDefault();
        var obj = {
            email : Info,
            password : pass
        }
        var arr = JSON.parse(localStorage.getItem("user"));
        if(obj.email == arr[0].email  &&  obj.password == Number(arr[0].password)){
            // console.log(1)
            navigate("/")

        }
        else{
            alert("please try again")
        }

        // console.log(obj.email,obj.password,arr[0].email,arr[0].password )
        // console.log(arr[0])
    }

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={Compare} className='form'>

        
<label>Email</label><br/>
<input style={{height:"2vw",width:"29vw",marginBottom:"1vw"}}  value={Info} onChange = {(e) => SetInfo(e.target.value)}  text = "email" /><br/>
<label>Password</label><br/>
<input style={{height:"2vw",width:"29vw",marginBottom:"1vw"}}  value={pass} onChange = {(e) => setpass(e.target.value)}  type = "password"/><br/>
<input style={{height:"2vw",width:"20vw",marginBottom:"1vw"}} type = "submit"/><br/>
      </form>
    </div>
  )
}

export default Login
