
import './App.css';
import FormHandling from './components/FormHandling';
import Card from './cards/Card';
import CardList from "./components/CardList"
import "../node_modules/bootstrap/dist/css/bootstrap.css"
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Navbar from './components/layout/Navbar';
import {BrowserRouter as Router,Route,Routes,Switch} from 'react-router-dom';
import Footer from './components/layout/Footer';
import Login from './components/Login';
import SignUp from './components/SignUp';
import cartList from './cart/cartList';
import { connect } from 'react-redux';
import React from 'react';
import {bindActionCreators} from 'redux';
import { addToCartAction } from './redux/actions/CartAction';
import PlaceOrder from './components/PlaceOrder';
import LogOut from './components/LogOut';
import UserProfile from './components/UserProfile';
import ForgotPassword from './components/ForgotPassword';
import UpdateInfo from './components/UpdateInfo';
class App extends React.Component {

  constructor(props)
  {
    super(props);
  }
  
 render() 
  {
    //console.log("Omkar"+this.props.cart.cartList[1].price);
    //const {cart, addToCartAction} = this.props;
    return (
    <>
    <Router>
      <div>
        <Navbar cart={this.props.cart} />
        
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path ="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/list" component={CardList } />
          <Route exact path="/cartlist" component={cartList } />
          <Route exact path="/placeorder" component={PlaceOrder } /> 
          <Route exact path="/logout" component={LogOut } />
          <Route exact path="/userprofile" component={UserProfile } />
          <Route exact path="/forgotpass" component={ForgotPassword } />
          <Route exact path="/updateinfo" component={UpdateInfo } />
        </Switch>
      </div>
    </Router>
      <Footer/>
    </>
  );
  }
}
const mapStateToProps = ({cart}) =>{
  return{
    cart
  }
}

const mapActionsToProps =(dispatch) =>{
  return bindActionCreators({
      addToCartAction
  },dispatch);

}

export default connect(mapStateToProps,mapActionsToProps) (App);


/* <>
    <div className="container-fluid d-flex"> 
      <h1>Welcome to food Corner</h1>
    </div>
    <div >
      <CardList />
    </div>
    </> */