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

class Credit_Debit_payment extends Component{

    constructor(){
        super();

        //set the state
        this.state = {
            name_card:'',
            card_no:'',
            card_cvv:'',
            card_expiry:'',
            amount:'',
            totalAmount:'',
            open: false,
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

        if (this.state.name_card ==="" ||this.state.card_no ==="" || this.state.card_cvv ===""|| this.state.card_expiry ==="" ) {
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
                name_card:this.state.name_card,
                card_no:this.state.card_no,
                card_cvv:this.state.card_cvv,
                card_expiry:this.state.card_expiry,
                amount:this.state.amount,
                totalAmount:this.state.totalAmount,

            }

            axios.post('http://localhost:4000/trainTicket/creditCard/addCreditCard', newUser)
                .then(res=> console.log(res.data));

        }
    }


    handleClickOpen = () => {

        if (this.state.name_card ==="" ||this.state.card_no ==="" || this.state.card_cvv ===""|| this.state.card_expiry ==="") {
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
                        <label><h1>Credit card details</h1></label>
                    </div>
                        <div className="FormField">
                            <label className="FormField__Label" htmlFor="name_card">Name on Card</label>
                            <input type="text" id="name_card" className="FormField__Input" placeholder="Enter your name on card" name="name_card" value={this.state.name} onChange={this.handleChange}/>
                        </div>
                        <div className="FormField">
                            <label className="FormField__Label" htmlFor="card_no">Card Number</label>
                            <input type="number" id="card_no" className="FormField__Input" placeholder="Enter your ard card Number" name="card_no" value={this.state.name} onChange={this.handleChange}/>
                        </div>
                        <div className="FormField">
                            <label className="FormField__Label" htmlFor="card_cvv">CVV</label>
                            <input type="number" id="card_cvv" className="FormField__Input" placeholder="Enter your cvv number" name="card_cvv" value={this.state.name} onChange={this.handleChange}/>
                        </div>
                        <div className="FormField">
                            <label className="FormField__Label" htmlFor="card_expiry">Card Expiry</label>
                            <input type="text" id="card_expiry" className="FormField__Input" placeholder="dd/mm" name="card_expiry" value={this.state.name} onChange={this.handleChange} />
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
export default Credit_Debit_payment;