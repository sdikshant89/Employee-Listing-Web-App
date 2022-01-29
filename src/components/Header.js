import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch } from 'react-redux';
import { getUser } from '../redux/user';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import IconButton from '@material-ui/core/IconButton';

const useStyles = makeStyles((theme) => ({
    title: {
      flexGrow: 1,
      textAlign: 'left',
      color: 'black',
      bottom: ' 50px',
    },
    bar: {
      background: '#007ba1',
      position: 'static',
      paddingBottom: '15px'
    },
  }));
  
  export default function ButtonAppBar() {
    const classes = useStyles();
    
    const dispatch = useDispatch();
    const GetAllData = () => {
        dispatch(getUser());
    }
    
    return (
      <div>
        <AppBar className={classes.bar}>
          <Toolbar>
          <IconButton>
              <ArrowBackIcon style={{  arialabel: 'Back'}}/>
          </IconButton>
            <Typography variant="h6" className={classes.title}>
              Employee Management
            </Typography>
            <Button variant="contained" color="secondary" onClick = {GetAllData} style = {{color: 'black'}}>Fetch Employees</Button>
          </Toolbar>
        </AppBar>
      </div>
    );
  }  