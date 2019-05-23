import React,{Component} from 'react';
import Noty from "noty";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import TextField from "@material-ui/core/TextField";
import DialogActions from "@material-ui/core/DialogActions";
import Button from "@material-ui/core/Button";
import {Link} from "react-router-dom";
import axios from 'axios';

class Mobile_Bill extends Component{

    constructor(){
        super();

        //set the state
        this.state = {
            mobile_num:'',
            pin_no:'',
            amount:'',
            email:'',
            totalAmount:'',
            open: false


    };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);


    }

    handleChange(e){
        this.setState({[e.target.name]: e.target.value})

    }

    handleSubmit(e) {

        if (this.state.mobile_num ==="" ||this.state.pin_no ==="") {
            new Noty({
                type: "error",
                theme: "bootstrap-v4",
                layout: "topRight",
                text: "Please enter valid details",
                timeout: 3000
            }).show()


        } else {
            e.preventDefault(); //prevent the default behaviour of the browser

            console.log('The form was submitted with the following data:');
            console.log(this.state);
            //window.location.href = 'http://localhost:3000/';

            const newUser = {
                mobile_num:this.state.mobile_num,
                pin_no:this.state.pin_no,
                amount:this.state.amount,
                email:this.state.email,
                totalAmount:this.state.totalAmount,

            }

            axios.post('http://localhost:4000/trainTicket/mobilePay/addMobilePayDetails', newUser)
                .then(res=> console.log(res.data));

        }
    }

    handleClickOpen = () => {

        if (this.state.mobile_num ==="" ||this.state.pin_no ==="") {
            new Noty({
                type: "error",
                theme: "bootstrap-v4",
                layout: "topRight",
                text: "Please enter valid details",
                timeout: 3000
            }).show()


        } else {

            this.setState({open: true});
        }
    };

    handleClose = () => {
        this.setState({ open: false });
        //window.alert("Payment successfully")
    };
    handleCloseWithSuccess = () => {
        this.setState({ open: false });
        console.log(this.state);
        window.alert("Payment successfully")
    };


    render() {
        return(
            <div className="FormCenter">
                <div className="FormFields" onSubmit={this.handleSubmit}>

                    <div className="FormField" style={{textAlign:"center"}}>
                        <label><h1>Payment details</h1></label>
                    </div>
                    <div className="FormField">
                        <label className="FormField__Label" htmlFor="mobile_num">Mobile Number</label>
                        <input type="number" id="mobile_num" className="FormField__Input" placeholder="Enter your mobile number" name="mobile_num" value={this.state.name} onChange={this.handleChange}/>
                    </div>
                    <div className="FormField">
                        <label className="FormField__Label" htmlFor="pin_no">PIN Number</label>
                        <input type="number" id="pin_no" className="FormField__Input" placeholder="Enter your pin Number" name="pin_no" value={this.state.name} onChange={this.handleChange}/>
                    </div>

                    <div className="FormField">
                        <label className="FormField__Label" htmlFor="amount">Amount</label>
                        <input type="number" id="amount" className="FormField__Input" placeholder="Rs.1000" name="amount" value={this.state.name} onChange={this.handleChange}/>
                    </div>

                    <div className="FormField">
                        <label className="FormField__Label" htmlFor="totalAmount">Total Amount with discount</label>
                        <input type="number" id="totalAmount" className="FormField__Input" placeholder="Rs.100" name="totalAmount" value={this.state.name} onChange={this.handleChange}/>
                    </div>

                    <div>
                        <button className="FormField__Button mr-20" onClick={this.handleClickOpen}>Submit </button>

                        <Dialog
                            open={this.state.open}
                            onClose={this.handleClose}
                            aria-labelledby="form-dialog-title"
                        >
                            <DialogTitle id="form-dialog-title">Confirmation</DialogTitle>
                            <DialogContent>
                                <DialogContentText>
                                    Please enter your email address here. We will send
                                    your receipt.
                                </DialogContentText>
                                <TextField
                                    autoFocus
                                    margin="dense"
                                    id="name"
                                    name="email"
                                    label="Email Address"
                                    type="email"
                                    fullWidth
                                />
                            </DialogContent>
                            <DialogActions>
                                <Button onClick={this.handleClose} color="primary">
                                    Cancel
                                </Button>
                                <Link to="/home">
                                <Button onClick={this.handleCloseWithSuccess} color="primary">
                                    Send
                                </Button>
                                </Link>
                            </DialogActions>
                        </Dialog>
                    </div>


                </div>
            </div>
        )
    }

}
export default Mobile_Bill;