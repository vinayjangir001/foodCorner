import React, { Component } from 'react'
import './Contact.css';
//import "./Card.css";

class Contact extends Component {
    render() {
        return (
            <div className="bg-image1">
                {/* <div className="py-4">
                    <h1>Contact Page Is Here</h1>
                </div> */}


<div className='contact-form'>
<form className='form'>
<div className="form-group">
    <label className='form-lable' for="name">Name</label>
    <input type="text" className="form-control" id="name" placeholder="Enter your name" />
  </div>

  <div className="form-group">
    <label className='form-lable' for="email">Email address</label>
    <input type="email" className="form-control" id="email" placeholder="name@example.com" />
  </div>
  
 
  <div className="form-group">
    <label className='form-lable'for="message">Message</label>
    <textarea className="form-control" id="message" rows="3"></textarea>
  </div>

  <button type='submit'>Submit</button>
</form>
</div>
            </div>
        )
    }
}

export default Contact;