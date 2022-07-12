import React from 'react'
import { useState } from 'react';
import { NavLink } from 'react-router-dom'
const Shopping = () => {
const [data,SetData] = useState([]);

  var arr = JSON.parse(localStorage.getItem("data"));
//  arr.map((elem)=>{
//   console.log(elem)
//   // SetData(elem.image)
//  })

// SetData([...data,arr])


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



        {
  
arr.map((e)=>
  <>
<div className ='div'>
 <div className="box">
  <p> <img className='img' src={e.image} alt="Coffe Img" /></p>
  <p> Name: {e.title} </p>
  <p>Price: Rs{e.price}</p>
  <p>
      Description:{e.description}
  </p>

  </div>
  </div>
  </>

  )

}
    </div>
  )
}

export default Shopping
