import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
const  Navbar= () => {
    return (
        
        <AppBar position="static">
            <Toolbar>
                <IconButton color="inherit">
                    <MenuIcon />

                </IconButton>
                <Typography variant="h6">Live Score App</Typography>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
