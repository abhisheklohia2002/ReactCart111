import React from 'react'
import { useEffect } from 'react'
import { NavLink } from 'react-router-dom';
import axios from "axios"
import { useState } from 'react';
import "./styles.css"
const Product = () => {
   const [title,SetTitle] = useState("");
   const [Store,SetStore] = useState("")

    var Data = `https://masai-mock-api.herokuapp.com/coffee/menu`
    useEffect(()=>{
        const getData = async ()=>{
let Info = await axios.get(Data);

console.log(Info.data.menu.data)
const res = Info.data.menu.data;

// res.map((ele)=>{
//     SetTitle(ele.title)
// })

// Setres(Info.data.menu.data)
SetTitle(res)

        }
        getData();

    },[])

    var arr = [];


arr.push(Store);
localStorage.setItem('data',JSON.stringify(arr))

  
  
    
  return (
    <div>
    
   
      <div className='navbar'>
            <div>
                <NavLink to="/">
                    Home
                </NavLink>
            </div>

            <div> <NavLink to="/product">
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
{
  
    title.map((e)=>
    <>
<div className ='div'>
   <div className="box">
    <p> <img className='img' src={e.image} alt="Coffe Img" /></p>
    <p> Name: {e.title} </p>
    <p>Price: Rs{e.price}</p>
    <p>
        Description:{e.description}
    </p>
    <p> <button onClick={()=>SetStore(e)} className = "btn">Buy</button> </p>
    </div>
    </div>
    </>

    )

}

       
    </div>
  )
}

export default Product
