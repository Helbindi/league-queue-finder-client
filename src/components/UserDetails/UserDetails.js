import React, { useState, useEffect } from 'react';
import { Paper, Typography, CircularProgress, Divider, Grid, Button } from '@material-ui/core/';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';

import { getPostsByUser } from '../../actions/posts';
import Post from '../Posts/Post/Post';
import useStyles from './styles';
import image from '../../images/Nunu_2.jpg';
import { fetchUser } from '../../api/index';

function UserDetails() {
    const { posts, isLoading } = useSelector((state) => state.posts);
    const [profile, setProfile] = useState([]);

    const dispatch = useDispatch();
    const history = useHistory();
    const classes = useStyles();
    const { id } = useParams();
    const user = JSON.parse(localStorage.getItem('profile'));

    useEffect(async() => {
        try {
            const { data } = await fetchUser(id);
            setProfile(data);

            dispatch(getPostsByUser(id));
        } catch (error) {
            console.log(error);
        }
    }, [id]);

    const openEdit = (userID) => history.push(`/user/${userID}/edit`);

    if (isLoading) {
        return (
        <Paper elevation={6} className={classes.loadingPaper}>
            <CircularProgress size="7em" />
        </Paper>
        );
    }

    // check if logged in User is the same as profile User
    const isUser = (id == user?.result?._id) ? true : false;

    return (
        <Paper style={{ background: '#f2f2f2', margin: '1em auto', padding: '1em', borderRadius: '15px', maxWidth: '1400px' }} elevation={6}>
            {isUser 
                ? <Button variant="contained" onClick={() => openEdit(id)}>Edit</Button>
                : null
            }
            
            <div className={classes.card}>
                <div className={classes.section}>
                    <Typography variant="h3" component="h2" align='center'><strong>{profile?.username}</strong></Typography>
                    <Divider style={{ margin: '20px 0' }} />
                    <Typography style={{padding: '0 20px'}} gutterBottom variant="body1" component="p"> {profile?.message || 'Hope to see you on the Rift soon!'} </Typography>
                </div>

                <div className={classes.imageSection}>
                    <img className={classes.media} src={image} alt='background' />
                </div>
            </div>

            <Typography gutterBottom variant="h5">{profile?.username}'s Posts: </Typography>
            <Divider style={{ margin: '1em 0' }}/>
            {!!posts.length && (
                <Grid className={classes.container} container alignItems="stretch" spacing={3}>
                    {posts?.map((post) => (
                    <Grid key={post._id} item xs={12} sm={12} md={6} lg={3}>
                        <Post post={post} setCurrentId={id} />
                    </Grid>
                    ))}
                </Grid>
            )}
        </Paper>
    );
}

export default UserDetails;
