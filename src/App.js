import React,{Component} from 'react';
import {BrowserRouter as Router, Route,Link, NavLink} from "react-router-dom";
import SignUpForm from './pages/SignUpForm';
import SignInForm from './pages/SignInForm';
import HomePage from './pages/HomePage';
import newBooking from './pages/NewBooking';
import Payment from './pages/Payment';
import Credit_Debit_payment from './pages/Credit_Debit_payment';
import Mobile_Bill from './pages/Mobile_Bill';
import TrainDetails from './pages/TrainDetails';


//import Select_Box from './pages/Select_Box';


import './App.css';
import './style.css';

//import css the noty modules from node module folder
import '../node_modules/noty/lib/noty.css'
import '../node_modules/noty/lib/themes/bootstrap-v4.css' //default theme


class App extends Component {
    render() {
        return (
            <Router>
            <div className="App">
                <div className="App__Aside">

                </div>
                <div className="App__Form">

                    <Route exact path="/" component={SignUpForm}>
                    </Route>

                    <Route path="/sign-in" component={SignInForm}>
                    </Route>

                    <Route path="/home" component={HomePage}>
                    </Route>

                    <Route path="/newBooking" component={newBooking}>
                    </Route>

                    <Route path="/payment" component={Payment}>
                    </Route>

                    <Route path="/credit_payment" component={Credit_Debit_payment}>
                    </Route>

                    <Route path="/mobile_payment" component={Mobile_Bill}>
                    </Route>
                    <Route path="/trainDetails" component={TrainDetails}>
                    </Route>


                </div>
            </div>
            </Router>
        );
    }

}

export default App;
