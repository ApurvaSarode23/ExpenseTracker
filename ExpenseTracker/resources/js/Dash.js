import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Grid } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import ExpenseView from './components/ExpenseView';

class Dash extends Component {

    constructor(props) {
        super(props);
        this.state = {brand: "Ford"};
    }
    
    CreateExpensePage(){
            alert("Lalaala");
    }
    
    componentDidMount(){

    }

    render() {
        return (
            <div>
     
  
                <h2>Expense Tracker</h2>
                <hr></hr>
                <div id="EMenuBar">
                    <button onClick={()=>this.CreateExpensePage()}> Create Expense</button>
                </div>
                <hr></hr>
                
                <Grid container spacing={2}>
                    <Grid item xs={6}>
                    <h3>Expense History</h3>
                    <ExpenseView></ExpenseView>
                    </Grid>
                    <Grid item xs={6}>
                      <h3>Create expense</h3>
                    </Grid>
                </Grid>
           
            </div>
        );
    }
}

export default Dash;

if (document.getElementById('root')) {
    ReactDOM.render(<Dash />, document.getElementById('root'));
}