import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Typography, TextField, Button, Paper, colors } from '@material-ui/core';
import { useParams, useHistory } from 'react-router-dom';

import useStyles from './styles';
import { fetchUser } from '../../api';

// User Account Management
function Account() {
    const [userData, setUserData] = useState({ username: '', email: '', message: '' });

    const { id } = useParams();
    const user = JSON.parse(localStorage.getItem('profile'));
    const history = useHistory();
    const classes = useStyles();

    // check if logged in User is the same as profile User
    const isUser = (id === user?.result?._id) ? true : false;

    const API = axios.create({ baseURL: 'http://localhost:5000' });

    API.interceptors.request.use((req) => {
    if (localStorage.getItem('profile')) {
        req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
    }
    return req;
    });

    const clear = () => {
        getUser();
    };

    async function getUser() {
        try {
            const res = await API.get(`http://localhost:5000/user/${id}`);
            const data = res.data;
            setUserData({...userData, username: data.username, email: data.email, message: data.message});
            
        } catch (error) {
            console.log(error);
        }
    };

    async function updateUser() {
        try {
            const res = await API.patch(`http://localhost:5000/user/${id}`, userData);
            console.log(res.status);
            
        } catch (error) {
            console.log(error);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        updateUser();
        // clear();
    };


    useEffect(() => {
        getUser();
    }, [])

    useEffect(() => {
        console.log(userData);
    }, [userData])

    if(isUser) {
        return (
            <Paper className={classes.main} elevation={6}>
                <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
                    <Typography variant="h4"> Edit My Account </Typography>
                    <TextField name="username" variant="outlined" label="Username" fullWidth value={userData.username} onChange={(e) => setUserData({ ...userData, username: e.target.value })}/>
                    <TextField name="email" variant="outlined" label="Email" fullWidth value={userData.email} onChange={(e) => setUserData({ ...userData, email: e.target.value })}/>
                    <TextField name="message" variant="outlined" label="Message" fullWidth multiline rows={4} value={userData.message} onChange={(e) => setUserData({ ...userData, message: e.target.value })}/>
                
                    <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
                    {/* <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Cancel</Button> */}
                </form>

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
