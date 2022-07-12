import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router';
import { NavLink } from 'react-router-dom';
import "./styles.css"

const Sign = () => {
    const [Info,SetInfo] = useState("");
    const [pass,setpass] = useState("");
    // const [Stor,Setstor] = useState([]);
var navigate = useNavigate();

    const SubmitData = (e) =>{
        e.preventDefault()

        
        var obj = {
            email:Info,
            password : pass
        }

 var arr= [] || JSON.parse(localStorage.getItem("user"));
 arr.push(obj)

if(obj.email !== "" || obj.password !== ""){
    localStorage.setItem("user",JSON.stringify(arr));
    navigate("/login")
}





    }

  return (
    <div>
       <div className='navbar'>
            <div>
                <NavLink to="/">
                    Home
                </NavLink>
            </div>

            <div>      <NavLink to="/product">
                Product
            </NavLink></div>
            <div>
                <NavLink to="/about">
                Shopping Cart
                    
                </NavLink></div>

            <div>      <NavLink to="/signin">
               Sigin
            </NavLink></div>

        </div>



      <div>
        <form onSubmit={SubmitData} className='form'>
<label>First Name</label><br/>
<input style={{height:"2vw",width:"29vw",marginBottom:"1vw"}}  type = "text"/><br/>
<label>Surname</label><br/>
<input style={{height:"2vw",width:"29vw",marginBottom:"1vw"}}  text = "text"/><br/>

<label>Email</label><br/>
<input style={{height:"2vw",width:"29vw",marginBottom:"1vw"}}  value={Info} onChange = {(e) => SetInfo(e.target.value)}  text = "email" /><br/>
<label>Password</label><br/>
<input style={{height:"2vw",width:"29vw",marginBottom:"1vw"}}  value={pass} onChange = {(e) => setpass(e.target.value)}  type = "password"/><br/>
<input style={{height:"2vw",width:"20vw",marginBottom:"1vw"}}  type = "submit"/><br/>




        </form>
      </div>

   
    </div>
  )
}

export default Sign
