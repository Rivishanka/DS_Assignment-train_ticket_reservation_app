import React,{Component} from 'react';
import {Link, NavLink} from "react-router-dom";
import axios from 'axios';
import Noty from 'noty';


class SignUpForm extends Component{

    constructor(props){
        super(props);

        //set the state
        this.state = {
            name:'',
            address:'',
            mobileNum:'',
            email:'',
            hasAgreed:false,
            password:'',
            idNum:''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    handleChange(e){
        let target = e.target; //select the target element

        let value = target.type === 'checkbox' ? target.checked: target.value; //value is value of the input

        let name= target.name; //name is name attribute on the input

        this.setState({
            [name]: value  //reset the state
        });
    }

    handleSubmit(e) {

        if (this.state.hasAgreed === false || this.state.name ==="" ||this.state.address ==="" || this.state.mobileNum ===""|| this.state.email ==="" || this.state.password ==="" ||this.state.idNum === "") {
            new Noty({
                type: "error",
                theme: "bootstrap-v4",
                layout: "topRight",
                text: "Please enter valid details & fill the checkbox",
                timeout: 3000
            }).show()


        } else {
            e.preventDefault(); //prevent the default behaviour of the browser

            console.log('The form was submitted with the following data:');
            console.log(this.state);

            window.location.href = 'http://localhost:3000/sign-in';

            const newUser = {
                name:this.state.name,
                address:this.state.address,
                mobileNum:this.state.mobileNum,
                email:this.state.email,
                password:this.state.password,
                idNum:this.state.idNum
            }

            axios.post('http://localhost:4000/trainTicket/users/signUp_check', newUser)
                .then(res=> console.log(res.data));
        }
    }


    render() {
        return(
            <div className="FormCenter">
                <div className="FormFields" onSubmit={this.handleSubmit}>

                    <div className="PageSwitcher">
                        <NavLink to="/sign-in" activeClassName="FormTitle__Link--Active" className="PageSwitcher__Item">Sign In</NavLink>
                        <NavLink exact to="/" activeClassName="FormTitle__Link--Active" className="PageSwitcher__Item">Sign Up</NavLink>
                    </div>

                    <div className="FormTitle">
                        <NavLink to="/sign-in" activeClassName="FormTitle__Link--Active" className="FormTitle__Link">Sign In</NavLink> OR <NavLink exact to="/" activeClassName="FormTitle__Link--Active" className="FormTitle__Link">Sign Up</NavLink>
                    </div>


                    <div className="FormField">
                        <label className="FormField__Label" htmlFor="name">Name</label>
                        <input type="text" id="name" className="FormField__Input" placeholder="Enter your name" name="name" value={this.state.name} onChange={this.handleChange}/>
                    </div>
                    <div className="FormField">
                        <label className="FormField__Label" htmlFor="address">Address</label>
                        <input type="text" id="address" className="FormField__Input" placeholder="Enter your address" name="address" value={this.state.address} onChange={this.handleChange}/>
                    </div>
                    <div className="FormField">
                        <label className="FormField__Label" htmlFor="mobileNum">Mobile Number</label>
                        <input type="number" id="mobileNum" className="FormField__Input" placeholder="Enter your Mobile Number" name="mobileNum" value={this.state.mobileNum} onChange={this.handleChange}/>
                    </div>

                    <div className="FormField">
                        <label className="FormField__Label" htmlFor="email">Email</label>
                        <input type="email" id="email" className="FormField__Input" placeholder="Enter your Email" name="email" value={this.state.email} onChange={this.handleChange}/>
                    </div>
                    <div className="FormField">
                        <label className="FormField__Label" htmlFor="password">Password</label>
                        <input type="password" id="password" className="FormField__Input" placeholder="Enter your Password" name="password" value={this.state.password} onChange={this.handleChange}/>
                    </div>

                    <div className="FormField">
                        <label className="FormField__Label" htmlFor="idNum">NIC Number <br/>[if you are government employee you can get discount]</label>
                        <input type="text" id="idNum" className="FormField__Input" placeholder="Enter your ID Card Number" name="idNum" value={this.state.idNum} onChange={this.handleChange}/>
                    </div>

                    <div className="FormField">
                        <label className="FormField__CheckboxLabel">
                            <input className="FormField__Checkbox" type="checkbox" name="hasAgreed" value={this.state.hasAgreed} onChange={this.handleChange} /> I agree all statements in <a href="" className="FormField__TermsLink">terms of service</a>
                        </label>
                    </div>


                    <div className="FormField">
                        <button className="FormField__Button mr-20" onClick={this.handleSubmit}>Sign Up </button><Link to="/sign-in" className="FormTitle__Link">I'm already member</Link>
                    </div>

                </div>
            </div>

        );
    }

}

export default SignUpForm;