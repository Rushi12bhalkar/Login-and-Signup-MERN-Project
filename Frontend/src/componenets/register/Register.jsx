import React, { useState } from 'react'
import "./register.css"
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function Register() {

    const navigate = useNavigate()

    const[user,setUser]=useState(
        {
            name:"",
            email:"",
            password:"",
            reEnterPassword:""
        }
    )

    function handleChange(e)
    {
        const name = e.target.name
        const value = e.target.value
        setUser({...user,[name]:value})
    }

    const register = () => {
      const { name, email, password, reEnterPassword } = user
      if( name && email && password && (password === reEnterPassword)){
          axios.post("http://localhost:9002/register", user)
          .then( res => {
              alert(res.data.message)
            
          })
      } else {
          alert("invlid input")
      }
      
  }



  return (
    
    <center>
    <br></br>
    <br></br>
    <div className='register'>
      <h1>Register</h1>
      <input type="text" name="name"  value={user.name} placeholder='Enter Your Name' onChange={handleChange}></input>
      <input type="email" name="email" value={user.email} placeholder='Enter Your Email' onChange={handleChange}></input>
      <input type="password" name="password"  value={user.password} placeholder='Enter Your Password' onChange={handleChange}></input>
      <input type="password" name="reEnterPassword" value={user.reEnterPassword} placeholder='Confirm Password' onChange={handleChange}></input>
      <div className='button' onClick={register}> Register</div>
      <div>or</div>
      <div className='button' onClick={()=>navigate("/login")}>Login</div> 
    </div>
    </center>
  )
}

export default Register