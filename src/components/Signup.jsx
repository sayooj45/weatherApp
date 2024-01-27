import React,{useState} from 'react'
import './Signup.css'
import {Link, useNavigate} from 'react-router-dom'
import axios from 'axios'
import { Button } from 'react-bootstrap'
function Signup() {
    const [user,setUser]=useState('')
    const [password,setPassword]=useState('')
    const navigate =useNavigate()

    function submit(e){
        e.preventDefault();

        

            axios.post("http://localhost:5000/signup",{
                user:user,password:password
            })
            .then(res=>{
                if(res.status===201){
                    navigate("/home")
                }
                
            })
            .catch(error=>{
                if (error.response.status===409){
                    
                    alert("user already exist")
                }
                else{
                    alert("wrong details")
                    console.log(e);
                }
                
            })
        
    }
  return (

  <div className='signup'>
      <div className="signup_form">
    <h1>Signup Page</h1>
      <form method='post' >
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type='text'
            className='m-3'
            onChange={(e)=>{setUser(e.target.value)}}

            placeholder='username'
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
        <Button onClick={submit}>Signup</Button>
        <div>
            <p>OR</p>
            <Link to='/'>Login</Link>
        </div>
      </form>
      </div>
    </div>
    
  )
}

export default Signup