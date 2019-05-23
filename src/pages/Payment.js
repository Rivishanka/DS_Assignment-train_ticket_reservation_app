import React,{Component} from 'react';
import {Link} from "react-router-dom";
//import Noty from "noty";

class Payment extends Component{

    render() {
        return(
            <div className="FormCenter">
                <div className="FormFields" >
                    <div className="center_field">


                        <br/><br/><label><h2>Select the payment method</h2></label>

                        <Link to="/credit_payment">
                            <button className="HomeField_Button" >Credit/Debit Card</button><br/><br/>
                        </Link>
                        <Link to="/mobile_payment">
                            <button className="HomeField_Button" >Mobile Pay</button>
                        </Link>


                    </div>
                </div>
            </div>
        )
    }

}
export default Payment;