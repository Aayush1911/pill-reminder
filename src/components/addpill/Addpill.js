import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom'
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './addpill.css'
import Button from 'react-bootstrap/Button';
import { useDispatch } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
import { addnewreminder } from '../../redux/slices/addnew';


function Addpill() {
  const[medname,setmedname]=useState('');
  const[datetime,setdatetime]=useState('');
  const[carename,setcarename]=useState('');
  const[email,setemail]=useState('');

  const navigate=useNavigate()
  const navigatehome=()=>{
    navigate('/')
  }
  const dispatch=useDispatch()
  const form = useRef();
  function handlesubmit(e) {
    e.preventDefault();
  
    // Get the current date and time
    const currentDate = new Date();
  
    // Convert the datetime input to a Date object
    const selectedDate = new Date(datetime);
  
    // Check if the selected date is in the future
    if (selectedDate > currentDate) {
      // Dispatch the new reminder
      dispatch(addnewreminder({
        medname,
        datetime,
        carename,
        email,
        id: nanoid(10)
      }));
      
      // Calculate the time difference in milliseconds
      const timeDifference = selectedDate.getTime() - currentDate.getTime();
      
      // Schedule the email sending after the time difference
      setTimeout(() => {
        emailjs.sendForm('service_9z8bofd', 'template_i290ove', form.current, 'SaQf6F2ugQTasxG3Q')
        .then((result) => {
          console.log(result.text);
        }, (error) => {
          console.log(error.text);
        });
        
        // Navigate to the home page or perform any other necessary actions
        navigatehome();
      }, timeDifference);
    } else {
      // If the selected date is not in the future, provide feedback or handle as needed
      console.log("Selected date must be in the future.");
    }
  }
  
  return (
    <div>
      <form ref={form} >
        <div className="box">
      <h3>Add New Reminder</h3>
        <div className="med">
        <label htmlFor="medname">Medicine Name</label><br />
        <input type="text" name='medicine_name' id='medname' className='medname' onChange={(e)=> setmedname(e.target.value)}/>
        </div>
        <div className="datetime">
        <label htmlFor="date_time">Date & Time </label><br />
            <input type="datetime-local" name="date_time" id="date_time" onChange={(e)=> setdatetime(e.target.value)}/>
        </div>
        <div className="carename">
        <label htmlFor="carename">Name</label><br />
        <input type="text" name='care_name' id='carename' className='care_name' onChange={(e)=>setcarename(e.target.value)}/>
        </div>
        <div className="emails">
        <label htmlFor="email">Email</label><br />
        <input type="email" name='email' id='email' className='mail' onChange={(e)=>setemail(e.target.value)}/>
        </div>
        <Button type='submit' variant="primary" className='submitbtn' onClick={handlesubmit}>Add Reminder</Button>
        </div>
        </form>
    </div>
  )
}

export default Addpill
