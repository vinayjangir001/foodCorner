import React, { Component } from 'react'
import logo from '../components/layout/login-bg.jpeg';
import image1 from '../data/foodframe.jpg';
import image2 from '../data/penne.jpg';
import './Home.css';

class Home extends Component {
    render() {
        return (
            // <div className="container">
            //     <div className="container d-none d-md-flex col-md-4 col-lg-6 bg-image">
            //         <img src={logo} style={{align:"left",width:"500px",height:"300px"}}></img>
            //     </div>
            //     <div className="py-4">

            //         <h3>Welcome to the authentic and tasty food ordering portal.</h3>
            //     </div>
            // </div>

            <>
                <div className="bg-image1">
                    <div className="text-header" color='white' >
                        <h1 style={{ color: 'beige', fontSize: '56px' }}>Welcome to Food Corner</h1>
                        <p style={{ color: 'beige', fontSize: '28px' }}>We serve the best food in the city</p>
                    </div>
                </div>
            </>
        )
    }
}

export default Home;