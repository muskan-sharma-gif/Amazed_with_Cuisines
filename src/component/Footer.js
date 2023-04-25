import React from 'react'
import { useState } from 'react';
const Footer = () => {
  const[submit,setSubmit]=useState(false);
     const [form,setForm]=useState({});
     const[data,setData]=useState({});
     const handleForm=(e)=>{
          
      setForm({
        ...form,
        [e.target.name]:e.target.value
      })
    }
   const handleSubmit= async (e)=>{
      e.preventDefault();
    const response = await fetch('http://localhost:8080/contact',{
        method:'POST',
        body:JSON.stringify(form),
        headers:{
          'content-Type':'application/json'
        }
      })
      const data = await response.json();

      setData(data);
      setSubmit(true);
       }
  return (
    
      <div >
        <div className="card text-center bg-dark text-muted">
          <div className="card-header ">CONTACT US</div>
          <form  onSubmit={handleSubmit}  >
          
            <div className="container text-center">
            <div className="row align-items-center">
          <div className=" col-md-3 offset-md-0">
           <input type="text" onChange={handleForm} className="form-control" name ="username" placeholder="Enter your name"/>
            
            </div>
             <div className="col-md-3 offset-md-6">
             <input type="email" onChange={handleForm} className="form-control" name="email" placeholder="Enter your email" />
            
             </div>
             <div className = "card-header">
            <label htmlFor = "name" >FEEDBACK</label>
            <textarea className = "form-control" onChange={handleForm} rows = "3" placeholder = "Write your Feedback" name="feedback"></textarea>
            </div>
         
             <div className='text-center'>
              <button className="btn btn-sm btn-success col-md-1 "  type="submit">submit</button>
             </div>
             
             </div>
             </div>
             
             </form>
             {submit&&<div>Hi {data.username}, Thank you for valuable feedback ,Our team will contact you soon!</div>}
          <div className="card-body">
            <h5 className="card-title">Amazed With Cuisins</h5>
            <p className="card-text">Provides you latest recipe here.</p>
          </div>
          <div className="card-footer text-muted">
            Developed By:
            <a
              href={"https://github.com/Dev4821"}
              className="link-light text-decoration-none"
              target="_blank"
              rel="noreferrer"
            >
               Muskan , Ayush & Aryan
            </a>
          </div>
        </div>
      </div>
    
  )
}

export default Footer
