import React,{Component} from 'react';
import {Link, NavLink} from "react-router-dom";
import Noty from "noty";
import axios from 'axios';

class SignInForm extends Component{

    constructor(props){
        super(props);

        //set the state
        this.state = {
            mobileNum:'',
            password:''

        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }


    handleChange(e){

        this.setState({[e.target.name]: e.target.value});

    }

    handleSubmit(e){
        if (this.state.mobileNum === "" || this.state.password ==="") {
            new Noty({
                type: "error",
                theme: "bootstrap-v4",
                layout: "topRight",
                text: "Please enter Valid Mobile Number Or Password",
                timeout: 3000
            }).show()


        } else {

            e.preventDefault(); //prevent the default behaviour of the browser

            console.log('The form was submitted with the following data:')
            console.log(this.state);

            window.location.href = 'http://localhost:3000/home';
            const newUser = {
                mobileNum:this.state.mobileNum,
                password:this.state.password,

            }

            axios.post('http://localhost:4000/trainTicket/users/signIn_check', newUser)
                .then(res=> console.log(res.data));

        }
    }


    render() {
        return(
            <div className="FormCenter">
                <div onSubmit= {this.handleSubmit} className="FormFields" >

                    <div className="PageSwitcher">
                        <NavLink to="/sign-in" activeClassName="FormTitle__Link--Active" className="PageSwitcher__Item">Sign In</NavLink>
                        <NavLink exact to="/" activeClassName="FormTitle__Link--Active" className="PageSwitcher__Item">Sign Up</NavLink>
                    </div>

                    <div className="FormTitle">
                        <NavLink to="/sign-in" activeClassName="FormTitle__Link--Active" className="FormTitle__Link">Sign In</NavLink> OR <NavLink exact to="/" activeClassName="FormTitle__Link--Active" className="FormTitle__Link">Sign Up</NavLink>
                    </div>

                    <div className="FormField">
                        <label className="FormField__Label" htmlFor="mobileNum">Mobile Number</label>
                        <input type="number" id="mobileNum" className="FormField__Input" placeholder="Enter your Mobile Number"
                               name="mobileNum" value={this.state.mobileNum} onChange={this.handleChange} required="required"/>
                    </div>

                    <div className="FormField">
                        <label className="FormField__Label" htmlFor="password">Password</label>
                        <input type="password" id="password" className="FormField__Input" placeholder="Enter your Password"
                               name="password" value={this.state.password} onChange={this.handleChange} required="required"/>
                    </div>

                    <div className="FormField">

                        <button type="submit" className="FormField__Button mr-20" onClick={this.handleSubmit}>Sign In </button>

                        <Link to="/" className="FormTitle__Link">Create an account </Link>
                    </div>

                </div>
            </div>

        );
    }

}

export default SignInForm;