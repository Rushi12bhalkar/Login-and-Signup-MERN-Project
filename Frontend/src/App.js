import React, { useState } from 'react'
import Homepage from './componenets/homepage/Homepage'
import './App.css'
import Login from './componenets/login/Login'
import Register from './componenets/register/Register'
import { BrowserRouter, Route, Routes } from "react-router-dom";

//npm install --save react-router-dom

function App() {

  const[user, setLoginUser]=useState({})

  return (
    <>
    <BrowserRouter>
     <Routes>

      <Route exact path="/" element={user && user._id ? <Homepage setLoginUser={setLoginUser} /> : <Login setLoginUser={setLoginUser} />} />
      <Route path="/login" element={<Login setLoginUser={setLoginUser}></Login>}></Route>
      <Route path="/register" element={<Register></Register>}></Route>
     </Routes>
    </BrowserRouter>
    </>
  )
}

export default App