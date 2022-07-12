import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { NavLink } from "react-router-dom";

import "./styles.css"

const Navbar = () => {

    var info = JSON.parse(localStorage.getItem("user"));
    

    return (
        <div className='navbar'>
            <div>
                <NavLink  to="/">
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
    )
}

export default Navbar
