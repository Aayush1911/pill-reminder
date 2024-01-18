import React, { useState } from 'react'
import './Login.css'
import { Link, useNavigate } from 'react-router-dom'
// import {AxiosClient} from '../../utils/AxiosClient'
// import { KEY_ACCESS_TOKEN, setItem } from '../../utils/LocalStorageManager';

function Login() {

const [email,setemail]=useState('');
const [password,setpassword]=useState('');
// const navigate=useNavigate()

async function handlesubmit(e){
  e.preventDefault();
  try{
    // const result= await AxiosClient.post('/auth/login',{
    //   email,
    //   password
    // })
    // setItem(KEY_ACCESS_TOKEN,result.accesstoken)
    // navigate('/')
    // console.log(result);

  }
  catch(e){
    console.log(e);
  }
}

  return (
    <div className='login'>
      <div className="login-box">
        <h2 className="heading">Login</h2>

        <form onSubmit={handlesubmit}>

            <label htmlFor="email">Email</label>
            <input type='email' className='email'id='email'
             onChange={(e)=>setemail(e.target.value)}/>

            <label htmlFor="password">Password</label>
            <input type='password' className='password'id='password'
            onChange={(e)=>setpassword(e.target.value)}/>

            <input type='submit'className='submit'/>

        </form>
        <p className='subheading'>
            Do not have an account ? <Link to='/signup'>Sign Up</Link>
        </p>
      </div>
    </div>
  )
}

export default Login
