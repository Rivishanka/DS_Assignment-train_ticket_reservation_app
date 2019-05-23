import React,{Component} from 'react';
import { withStyles} from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {Link} from "react-router-dom";

const StyledTableCell = withStyles(theme => ({
    head: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    body: {
        fontSize: 14,
    },
}))(TableCell);

const StyledTableRow = withStyles(theme => ({
    root: {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.background.default,
        },
    },
}))(TableRow);

function createData(name, destination,stationCode, qty, price, link) {
    return { name, destination,stationCode, qty, price, link };
}

const rows = [
    createData('Ruhunu Kumari', 'Maradana/Matara' , 4555,1, 100, <Link to="/newBooking" >Add</Link>),
    createData('Yal devi', 'Mount-Lavinia/Kankasanthurai',1020, 1, 150, <Link to="/newBooking" >Add</Link>),
    createData('Udarata menike', 'Colombo/Badulla',3000, 1, 100, <Link to="/newBooking" >Add</Link>),
    createData('Deyata Kirula intercity express', 'Colombo/Kankesanturai',1001, 1, 180, <Link to="/newBooking" >Add</Link>),
    createData('Samudra Devi ', 'Colombo/Galle',6003, 1, 200, <Link to="/newBooking" >Add</Link>),
    createData('Galu Kumari ', 'Maradana/Matara', 2022,1, 250, <Link to="/newBooking" >Add</Link>),
    createData('Sagarika ', 'Colombo/Matara',7833, 1, 300, <Link to="/newBooking" >Add</Link>),

];


class TrainDetails extends Component{

    render() {


        return(
            <div className="FormCenter">
                <div className="FormFields" >
                    <div className="center_field">
                        <label><h1>Train Ticket Details</h1></label>
                        <Paper className="">
                            <Table className="">
                                <TableHead>
                                    <TableRow>
                                        <StyledTableCell>Train Name</StyledTableCell>
                                        <StyledTableCell align="right">From/To</StyledTableCell>
                                        <StyledTableCell align="right">Station Code</StyledTableCell>
                                        <StyledTableCell align="right">Qty</StyledTableCell>
                                        <StyledTableCell align="right">Ticket Price</StyledTableCell>
                                        <StyledTableCell align="right">Add</StyledTableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {rows.map(row => (
                                        <StyledTableRow key={row.name}>
                                            <StyledTableCell component="th" scope="row">
                                                {row.name}
                                            </StyledTableCell>
                                            <StyledTableCell align="right">{row.destination}</StyledTableCell>
                                            <StyledTableCell align="right">{row.stationCode}</StyledTableCell>
                                            <StyledTableCell align="right">{row.qty}</StyledTableCell>
                                            <StyledTableCell align="right">{row.price}</StyledTableCell>
                                            <StyledTableCell align="right">{row.link}</StyledTableCell>
                                        </StyledTableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </Paper>

                    </div>
                </div>
            </div>
        )
    }

}
export default TrainDetails;