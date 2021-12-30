import React, { useState } from 'react';
import { Typography, TextField, Button, Paper, colors } from '@material-ui/core';
import { useParams, useHistory } from 'react-router-dom';

import useStyles from './styles';

// User Account Management
function Account() {
    const [userData, setUserData] = useState({ username: '', password: '', email: '', message: '' });

    const { id } = useParams();
    const user = JSON.parse(localStorage.getItem('profile'));
    const classes = useStyles();

    // check if logged in User is the same as profile User
    const isUser = (id === user?.result?._id) ? true : false;

    if(isUser) {
        return (
            <Paper className={classes.main} elevation={6}>
                <Typography variant='h4' align='center'> Welcome, { user?.result?.username }! </Typography>
            </Paper>
        )
    } else {
        return (
            <Paper className={classes.alert} elevation={6}>
                <Typography variant='h4' align='center'> Not Autherized! <a href='/auth'>Sign In</a> to continue.</Typography>
            </Paper>
        )
    }
}

export default Account;
