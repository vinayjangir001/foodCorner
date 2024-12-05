//import { color } from '@mui/system'
import React, { Component } from 'react'
import {Link} from 'react-router-dom'
class Navbar extends Component {
    checkForUserLogIn =()=>{
        if(this.props.cart.user === null){
            return(
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul className="navbar-nav">
                  <li className="nav-item">
                      <Link className="nav-link" to="/">Home</Link>
                  </li>
                  <li className="nav-item">
                      <Link className="nav-link" to="/about">About</Link>
                  </li>
                  <li className="nav-item">
                      <Link className="nav-link" to="/contact">Contact</Link>
                  </li>
                  <li className="nav-item">
                      <Link className="nav-link" to="/login">Login/SignUp</Link>
                  </li>
                     
                  </ul>
                </div>) 
        }
        else{
            return(<ul className="navbar-nav  auto-ml">
            <li className="nav-item">
            <a className="nav-link" href="#">
               <strong style={{color:"black"}}> Welcome {this.props.cart.user.name}</strong>
            </a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="/logout">
                   logout
                </a>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/userprofile">
                   Profile
                </Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/list">
                   Cart
                </Link>
            </li>

            
        </ul>)
        }
    }
    render() {
        
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <Link className="navbar-brand" to="/">Food Corner</Link>
                {this.checkForUserLogIn()}
                </nav>
                </div>
        )
    }
}

export default Navbar


