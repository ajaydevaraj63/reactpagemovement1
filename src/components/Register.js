import React, { useState } from 'react'
import Navbar from './Navbar'

const Register = () => {
var[name,setname]=useState()
 const changename=()=>{
setname(name='anoop')
}

  return (
    <div >          
    <Navbar/>
     
    <div className="container  ">
          <div className="row g-5">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                  <div className="row g-2 ">
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6"><label for="" className="form-label">name</label>
                          <input type="text" className="form-control"placeholder="enter name"/></div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6"><label for="" className="form-label">password</label> 
                         <input type="password" className="form-control"placeholder="enter password"/></div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6"><label for="" className="form-label">mobile number</label>
                          <input type="number" className="form-control"placeholder="enter number"/></div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6"><label for="" className="form-label">date of birth</label>
                          <input type="date" className="form-control"placeholder="enter DOB "/></div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 "> <input type="button" value="register" className="btn btn-dark" /></div>
                  </div>
                    
                </div>
          </div>
    </div></div>
  )
}

export default Register