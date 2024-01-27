import React, { useState } from 'react'
import './Login.css'
import {Link,useNavigate} from 'react-router-dom'
import { Button } from 'react-bootstrap'
import axios from 'axios'
function Login() {
    const navigate =useNavigate()
    const [user,setUser]=useState('')
    const [password,setPassword]=useState('')

    function submit(e){ 
        e.preventDefault();
        // console.log(user)
        // console.log(password)


            axios.post("http://localhost:5000/login/",{user: user,password : password })
            .then(res=>{
                console.log("login response")
                console.log(res)
                if(res.status===200){
                    navigate("/home")
                }
                
            })
            .catch((error)=>{
                if(error.response.status === 404 ){
                    alert("User not found")
                } else if(error.response.status === 401){
                    alert("Wrong Password")
                } else {
                    alert("Something went wrong")
                }            
     
            })

    }
  return (

      <div className='login'>
      <div className="login_form">
      <h1 >Login Page</h1>
      <form method='post' >
        <div>
          <label htmlFor="username">Username:</label>
          <input 
          className='m-3'
            type="text"
            placeholder='username'
            onChange={(e)=>{setUser(e.target.value)}}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
          className='m-2'
            type="password"
          placeholder='password'
          onChange={(e)=>{setPassword(e.target.value)}}
          required
           
          />
        </div>
        <Button onClick={submit}>Login</Button>
        <div>
            <p>OR</p>
            <Link to='/signup'>Signup</Link>
        </div>
      </form>
      </div>
    </div>
  )
}

export default Login