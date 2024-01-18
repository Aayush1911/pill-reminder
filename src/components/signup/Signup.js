import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Signup.css'
// import {AxiosClient} from '../../utils/AxiosClient'

function Signup() {
  const [email,setemail]=useState('');
  const [password,setpassword]=useState('');
  const [name,setname]=useState('')

async function handlesubmit(e){
//   e.preventDefault();
//   try{
//     const result= await AxiosClient.post('/auth/signup',{
//       email,
//       password,
//       name
//     })
//   console.log(result);
//   }
//   catch(e){
//     console.log(e);
//   }
}
    return (
        <div className='signup'>
          <div className="signup-box">
            <h2 className="heading">Signup</h2>
            <form onSubmit={handlesubmit}>
             <label htmlFor="name">Name</label>
                <input type='text' className='name'id='name' onChange={(e)=>setname(e.target.value)}/>

                <label htmlFor="email">Email</label>
                <input type='email' className='email'id='email'onChange={(e)=>setemail(e.target.value)}/>

                <label htmlFor="password">Password</label>
                <input type='password' className='password'id='password'onChange={(e)=>setpassword(e.target.value)}/>
    
                <input type='submit'className='submit'/>
            </form>
            <p className='subheading'>
                Already have an account ? <Link to='/login'>Log In</Link>
            </p>
          </div>
        </div>
      )
}

export default Signup
