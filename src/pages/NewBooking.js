import React,{Component} from 'react';
import {Link} from "react-router-dom";
import Noty from "noty";
import axios from 'axios';

class newBooking extends Component{

    constructor(){
        super();

        //set the state
        this.state = {
            values:'',
            from:'',
            to:'',
            station_name:'',
            date:'',
            qty:''

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

        if (this.state.from === "" || this.state.to === "" || this.state.date === ""|| this.state.qty === "") {
            new Noty({
                type: "error",
                theme: "bootstrap-v4",
                layout: "topRight",
                text: "Please enter the booking details",
                timeout: 3000
            }).show()


        } else {
            e.preventDefault(); //prevent the default behaviour of the browser

            console.log('The form was submitted with the following data:');
            console.log(this.state);

            window.location.href = 'http://localhost:3000/payment';
            const newUser = {
                values:this.state.values,
                from:this.state.from,
                to:this.state.to,
                station_name:this.state.station_name,
                date:this.state.date,
                qty:this.state.qty,

            }

            axios.post('http://localhost:4000/trainTicket/train/addTrainBooking', newUser)
                .then(res=> console.log(res.data));
        }
    }

    render() {
        return(
            <div className="FormCenter">
                <div className="FormFields" onSubmit={this.handleSubmit}>
                    <div className="center_field">
                        <label><h1>Train Ticket Reservation System</h1></label>

                        <input type="text" id="values" className="form_Input" placeholder="Train Name :" name="values" value={this.state.name} onChange={this.handleChange} required="required"/><br/><br/><br/>

                    <input type="text" id="from" className="form_Input" placeholder="From :" name="from" value={this.state.name} onChange={this.handleChange} required="required"/><br/><br/><br/>

                    <input type="text" id="to" className="form_Input" placeholder="To :" name="to" value={this.state.name} onChange={this.handleChange}/><br/><br/><br/>

                    <input type="text" id="station_name" className="form_Input" placeholder="Station Name/Code" name="station_name" value={this.state.name} onChange={this.handleChange}/><br/><br/><br/>

                    <input type="date" id="date" className="form_Input" name="date" value={this.state.name} onChange={this.handleChange}/><br/><br/><br/>

                    <input type="number" id="qty" className="form_Input" placeholder="Quantity" name="qty" value={this.state.name} onChange={this.handleChange}/><br/><br/><br/>


                    <button className="done_button" onClick={this.handleSubmit}>Done</button>&nbsp;&nbsp;&nbsp;&nbsp;


                    <Link to="/home">
                        <button className="done_button">Back</button>
                    </Link>
                    </div>
                </div>
            </div>
        )
    }

}
export default newBooking;