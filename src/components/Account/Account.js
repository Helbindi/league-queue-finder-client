import React, { useState, useEffect, useReducer } from 'react';
import axios from 'axios';
import { Typography, TextField, Button, Paper} from '@material-ui/core';
import { useParams, useHistory } from 'react-router-dom';

import useStyles from './styles';

import Modal from './Modal';
import { reducer } from './reducer';
const defaultState = {
  isModalOpen: false,
  color: '',
  modalContent: '',
};


// User Account Management
function Account() {
    const [userData, setUserData] = useState({ username: '', email: '', message: '' });
    const [state, dispatch] = useReducer(reducer, defaultState); // Todo: generate a success/error message after edit submission.

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

    const back = () => {
        history.push(`/user/${id}`);
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
            dispatch({ type: 'EDIT_USER' });  
        } catch (error) {
            dispatch({ type: 'EDIT_ERROR' });
            setUserData(userData);
            console.log(error);
        }
    };

    const closeModal = () => {
        dispatch({ type: 'CLOSE_MODAL' });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        updateUser();
    };


    useEffect(() => {
        getUser();
    }, [state])


    if(isUser) {
        return (
            <Paper className={classes.main} elevation={6}>
                {state.isModalOpen && (
                    <Modal closeModal={closeModal} modalContent={state.modalContent} modalColor={state.color} />
                )}

                <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
                    <Typography variant="h4"> Edit My Account </Typography>
                    <TextField name="username" variant="outlined" label="Username" fullWidth value={userData.username} onChange={(e) => setUserData({ ...userData, username: e.target.value })}/>
                    <TextField name="email" variant="outlined" label="Email" fullWidth value={userData.email} onChange={(e) => setUserData({ ...userData, email: e.target.value })}/>
                    <TextField name="message" variant="outlined" label="Message" fullWidth multiline rows={4} value={userData.message} onChange={(e) => setUserData({ ...userData, message: e.target.value })}/>
                
                    <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
                    <Button variant="contained" color="secondary" size="small" onClick={back} fullWidth>Back</Button>
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
