import React, { Component } from 'react'
import { useState } from 'react'
import { Link ,Redirect} from 'react-router-dom'
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import { setUserEmail,setUserDetails } from '../redux/actions/CartAction'
import ApiService from '../services/ApiService';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import './Login.css';
function Login(props){
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const authenticateUser =()=>
    {
      ApiService.authenticateUser(email,password).then(response => {
        const {data} = response;
        console.log(response);
        props.setUserEmail(data.email);
        props.setUserDetails(data);

        console.log(data);
        if(data === "")
        {
          document.getElementById("error").innerText = "Invalid Email And Password";
          return;
        }

        /*if(localStorage.getItem("user")===null)
        {
          localStorage.setItem("user",data);
          localStorage.setItem("cartinfo",null);
          
        }*/

        props.history.push("/list");
      }).catch(err=>{
        document.getElementById("error").innerText = "Invalid Email And Password";
        console.log(err.toString());
      })

    }

      return (
     <> 
      {(props.cart.user != null)?
               <Redirect to={{pathname: '/list'}} />:""
              }  
      <div className="container-fluid ps-md-0">
        
      <div className="row g-0">
        <div
          className="d-none d-md-flex col-md-4 col-lg-6 bg-image"
        ></div>
        <div className="col-md-8 col-lg-6">
          <div className="login d-flex align-items-center py-5">
            <div className="container">
              <div className="row">
                <div className="col-md-9 col-lg-8 mx-auto">
                  <div id="error"></div>
                  <h3 className="login-heading mb-4">Welcome back!</h3>

                  {/* <!-- Sign In Form --> */}
                  <div className="form-floating mb-3">
                    <input 
                      onChange={(e) => {
                        setEmail(e.target.value)
                      }}
                      
                      type="email"
                      className="form-control"
                      id="floatingInput"
                      placeholder="name@example.com"
                    />
                    <label htmlFor="floatingInput">Email address</label>
                  </div>
                  <div className="form-floating mb-3">
                    <input 
                      onChange={(e) => {
                        setPassword(e.target.value)
                      }}
                      type="password"
                      className="form-control"
                      id="floatingPassword"
                      placeholder="Password"
                    />
                    <label htmlFor="floatingPassword">Password</label>
                  </div>


                  <div className="d-grid">
                    <button
                      onClick={authenticateUser}
                      className="btn btn-lg btn-primary btn-login text-uppercase fw-bold mb-2"
                      // type="submit"
                    >
                      Sign in
                    </button>
                    <div className="text-center">
                      <Link className="small" to="/forgotpass">
                        Forgot password?
                      </Link>
                      <h3 className="fs-6 lh-lg">
                        New User ? <Link to="/signup">Register Here</Link>
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
        )
    
}
const mapStateToProps = ({cart}) =>{
  return{
    cart
  }
}

const mapActionsToProps = (dispatch) => {
  return bindActionCreators({
    setUserEmail,setUserDetails
},dispatch);
 }
export default connect(mapStateToProps,mapActionsToProps) (Login);
