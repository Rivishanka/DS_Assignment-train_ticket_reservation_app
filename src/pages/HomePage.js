import React,{Component} from 'react';
import {Link} from "react-router-dom";

class HomePage extends Component{
    render() {
        return(
            <div className="FormCenter">
                <div className="FormFields">
                    <div className="FormField">
                        <div className="label_home">
                            <label><h2>Train Ticket Reservation System</h2></label>
                        </div>
                        <div className="main_button">
                        <Link to="/trainDetails">
                            <button type="submit" className="HomeField_Button ">New Booking </button><br/><br/>
                        </Link>
                        <Link to="/home">
                            <button type="submit" className="HomeField_Button ">My Booking </button><br/><br/>
                        </Link>
                        <Link to="/home">
                            <button type="submit" className="HomeField_Button">Cancel Ticket</button><br/><br/>
                        </Link>
                        <Link to="/home">
                            <button type="submit" className="HomeField_Button">Booking History</button><br/><br/>
                        </Link>
                        <Link to="/home">
                            <button type="submit" className="HomeField_Button">Show Ticket</button><br/><br/>
                        </Link>
                        <Link to="/home">
                            <button type="submit" className="HomeField_Button">Change Details</button><br/><br/>
                        </Link>
                        <Link to="/home">
                            <button type="submit" className="HomeField_Button">Profile</button><br/><br/>
                        </Link>
                        <Link to="/sign-in">
                            <button type="submit" className="HomeField_Button">Logout</button><br/><br/>
                        </Link>
                        </div>
                    </div>
                </div>

            </div>
        )

    }

}

export default HomePage;