import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Grid from '@mui/material/Grid';
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
import Modal from '@mui/material/Modal';
import axios from 'axios';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';

class Dash extends Component {


    constructor(props) {
        super(props);
        this.state = { show:false,  eid:-1, ename:"", eprice:0, edesc:"" };
        this.handleModal = this.handleModal.bind(this);
        this.handleModal = this.handleModal.bind(this);
    }
    
    handleModal(val, id){  
         
        if(val)
        {    
            if(id==-1)
            {
                this.setState({show:val, eid:id, ename:"", eprice:0, edesc:""})  
            }
            else
            {
                this.getExpense(id);
                this.setState({show:val}) ;
            }
        }
        else{
            this.setState({show:val}) 
        }
      }  
    
    

    updateExpense(){
        axios.post(`/UpdateExpense`,{
            eid : this.state.eid,
            ename : this.state.ename,
            eprice : this.state.eprice,
            edesc : this.state.edesc,
       })
       .then(res => {
        debugger;
        this.handleModal(false, -1);  
        window.location.reload(false);
       });
    
    }
    
    getExpense(id){
        axios.get(`/Expense/`+id)
        .then(res => {
         debugger;
            const eid = res.data[0].id;
            const ename = res.data[0].user_name;
            const eprice = res.data[0].price;
            const edesc = res.data[0].description;
   
          this.setState({ eid, ename,eprice, edesc});
        })
    }

    componentDidMount(){

    }

    handleTextChange = name => event => {
        this.setState({ [name]: event.target.value, modified: true });
      }


    render() {
        return (
            <div>
                <Modal></Modal>
  
                <h2>Expense Tracker</h2>
                <hr></hr>
                <div id="EMenuBar">
               <Button variant="contained" color="primary" onClick={()=>this.handleModal(true,-1)}>Create Expense</Button>
                    {/* <button onClick={()=>this.handleModal()()}> Create Expense</button> */}
                </div>
                <hr></hr>
                <React.Fragment>
                <Modal
                        open={this.state.show}
                        onClose={()=>this.handleModal(false,-1)}
                        aria-labelledby="parent-modal-title"
                        aria-describedby="parent-modal-description"
                    >
                        <Box sx={{position: 'absolute',  width: 600,  top: '30%',
                                left: '50%',
                                transform: 'translate(-50%, -30%)',
                                bgcolor: 'background.paper',
                                border: '2px solid #000',
                                boxShadow: 24,
                                pt: 2,
                                px: 4,
                                pb: 3, }}>
                        {this.state.eid==-1? <h2 >Create Expense</h2> :  <h2>Edit Expense {this.state.eid}</h2>}
                        <hr></hr>
                        
                            <React.Fragment>
                            <Grid container spacing={2}>
                            <Grid item xs={6}>
                            <Typography>User Name:</Typography>
                            </Grid>
                            <Grid item xs={6}>
                            <TextField id="ename" type="text" label="User Name" variant="outlined" value={this.state.ename}   
                            onChange= {this.handleTextChange('ename')}  />
                            </Grid>
                            <Grid item xs={6}>
                            <Typography>Price:</Typography>
                            </Grid>
                            <Grid item xs={6}>
                            <TextField id="eprice" type="number" label="Price" variant="outlined" value={this.state.eprice}   onChange= {this.handleTextChange('eprice')}  />
                            </Grid>
                            <Grid item xs={6}>
                            <Typography>Description:</Typography>
                            </Grid>
                            <Grid item xs={6}>
                            <TextField id="edesc" type="text" label="Description" variant="outlined" value={this.state.edesc}   onChange= {this.handleTextChange('edesc')}  />
                            </Grid>
                        </Grid>
                            </React.Fragment>

                     
                        <hr></hr>
                        <Grid container spacing={2} direction="row" justifyContent="flex-end">
                            <Grid item xs={4}>
                            <Button variant="contained" color="primary" onClick={()=>this.updateExpense()}>  {this.state.eid==-1? "Create Expense" :  "Update Expense" }</Button>  
                            </Grid>
                            <Grid item xs={2}>
                            <Button variant="contained" color="error"  onClick={()=>this.handleModal(false,-1)}>Close</Button> 
                           </Grid>
                        </Grid>
                    
                     
                        </Box>
                    </Modal>
                </React.Fragment>
                <Grid container spacing={2}>
                    <Grid item xs={6}>
                    <h3>Expense History</h3>
                    <ExpenseView handleModal={this.handleModal}></ExpenseView>
                    </Grid>
                    {/* <Grid item xs={6}>
                      <h3>Create expense</h3>
                    </Grid> */}
                </Grid>
           
                {/* <Modal show={this.state.show} onHide={()=>this.handleModal()}>  
                <Modal.Header closeButton>This is a Modal Heading</Modal.Header>  
                <Modal.Body>This is a Modal Body</Modal.Body>  
                <Modal.Footer>  
                    <Button onClick={()=>this.handleModal()}>Close</Button>  
                    <Button onClick={()=>this.handleModal(false,-1)}>Close</Button>  
                </Modal.Footer>  
                </Modal>  */}


            </div>
        );
    }
}

export default Dash;

if (document.getElementById('root')) {
    ReactDOM.render(<Dash />, document.getElementById('root'));
}