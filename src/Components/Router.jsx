import React from 'react'
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import Login from './Login';

import Navbar from './Navbar'
import Product from './Product';
import Shopping from './Shoppingcart';
import Sign from './signin';

const Router = () => {
  return<><BrowserRouter>

  <Routes>

    <Route path = "/"  element = {<div><Navbar/></div>}/>
    <Route path = "/product"  element = {<div><Product/></div>}/>
    <Route path = "/signin"  element = {<div><Sign/></div>}/>
<Route path = "/about" element = {<div> <Shopping/> </div>}/>
    <Route path = "/login" element = { <div> <Login/>  </div> }/>



  </Routes>
  </BrowserRouter>
  </> 
}

export default Router;

