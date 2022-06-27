import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { data } from 'jquery';
import Button from '@mui/material/Button';

import axios from 'axios';

class ExpenseView extends Component {

    state = {
        edata: []
      }

      
    constructor(props) {
        super(props);
        this.getallexpensedata = this.getallexpensedata.bind(this);
    }

    getallexpensedata(){
        axios.get(`/Expenses`)
        .then(res => {
        
          const edata = res.data;
          this.setState({ edata });
        })
    }

    deleteExpense(id){
        debugger;
        axios.delete(`/RemoveExpense/`+id)
        .then(res => {
          
            this.getallexpensedata();
        })
    }

    editExpese(id){
        debugger;
        // axios.delete(`/RemoveExpense/`+id)
        // .then(res => {
          
        //     this.getallexpensedata();
        // })
    }

    componentWillMount() {

    }

    componentDidMount() {
        this.getallexpensedata();
        // axios.get(`/Expenses`)
        // .then(res => {
        //     debugger;
        //   const edata = res.data;
        //   this.setState({ edata });
        // })
    }



    componentWillReceiveProps(nextProps) {

    }

//     shouldComponentUpdate(nextProps, nextState) {
// return true;
//     }

    componentWillUpdate(nextProps, nextState) {

    }

    componentDidUpdate(prevProps, prevState) {

    }

    componentWillUnmount() {

    }

    render() {
        return (
            <div>
                 <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell align="right">User Name</TableCell>
            <TableCell align="right">Price</TableCell>
            <TableCell align="right">Description</TableCell>
            <TableCell align="right"></TableCell>
            <TableCell align="right"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {this.state.edata.map((row) => (
            <TableRow
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
                              <TableCell component="th" scope="row">
                {row.id}
              </TableCell>
              <TableCell align="right">
                {row.user_name}
              </TableCell>
              <TableCell align="right">{row.price}</TableCell>
              <TableCell align="right">{row.description}</TableCell>
              <TableCell align="right"><Button variant="contained" color="primary" onClick={()=>this.editExpese(row.id)}>Edit</Button></TableCell>
              <TableCell align="right"><Button variant="contained" color="error" onClick={()=>this.deleteExpense(row.id)}>Delete</Button></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
            </div>
        );
    }
}

ExpenseView.propTypes = {

};

export default ExpenseView;