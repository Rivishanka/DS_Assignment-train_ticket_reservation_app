import React,{Component} from 'react';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import axios from 'axios';

//import Noty from "./Mobile_Bill";


class Send_email extends Component{
    constructor() {
        super()

        this.state = {
            open: false,
            email: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e){
        this.setState({[e.target.name]: e.target.value})

    }
    async handleSubmit(e) {

        e.preventDefault(); //prevent the default behaviour of the browser
        const {email} = this.state
        console.log('The form was submitted with the following data:');
        console.log(this.state);
            //window.location.href = 'http://localhost:3000/';

        // const form = await axios.post('api/form',{
        //     email
        // })

            //window.alert("Payment successfully")
            //axios.post('http://localhost:4000/users', newUser)
            //             .then(res => {
            //                 console.log(res);
            //                 alert("Successfully Registered !");
            //                 window.location.href = "http://localhost:1234/home";
            //
            //             });;


    }

    handleClickOpen = () => {
        this.setState({ open: true });
    };

    handleClose = () => {
        this.setState({ open: false });
        console.log(this.state);
    };
    render() {
        return(
            <div className="FormCenter">
                <div className="FormFields" onSubmit={this.handleSubmit}>
                    <div className="center_field">

                        <div>
                            <Button variant="outlined" color="primary" onClick={this.handleClickOpen}>
                                Open form dialog
                            </Button>
                            <Dialog
                                open={this.state.open}
                                onClose={this.handleClose}
                                aria-labelledby="form-dialog-title"
                            >
                                <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
                                <DialogContent>
                                    <DialogContentText>
                                        To subscribe to this website, please enter your email address here. We will send
                                        updates occasionally.
                                    </DialogContentText>
                                    <TextField
                                        autoFocus
                                        margin="dense"
                                        id="name"
                                        name="email"
                                        label="Email Address"
                                        type="email"
                                        onChange={this.handleChange}
                                        fullWidth
                                    />
                                </DialogContent>
                                <DialogActions>
                                    <Button onClick={this.handleClose} color="primary">
                                        Cancel
                                    </Button>
                                    <Button onClick={this.handleClose} color="primary">
                                        Subscribe
                                    </Button>
                                </DialogActions>
                            </Dialog>
                        </div>

                        {/*<div>*/}
                        {/*    <Button variant="outlined" color="primary" onClick={this.handleClickOpen}>*/}
                        {/*        Open alert dialog*/}
                        {/*    </Button>*/}
                        {/*    <Dialog*/}
                        {/*        open={this.state.open}*/}
                        {/*        onClose={this.handleClose}*/}
                        {/*        aria-labelledby="alert-dialog-title"*/}
                        {/*        aria-describedby="alert-dialog-description"*/}
                        {/*    >*/}
                        {/*        <DialogTitle id="alert-dialog-title">{"Payment Successfully!!!"}</DialogTitle>*/}

                        {/*        <DialogActions>*/}
                        {/*            <Button onClick={this.handleClose} color="primary" autoFocus>*/}
                        {/*                Done*/}
                        {/*            </Button>*/}
                        {/*        </DialogActions>*/}
                        {/*    </Dialog>*/}
                        {/*</div>*/}
                    </div>
                </div>
            </div>
        )
    }

}
export default Send_email;