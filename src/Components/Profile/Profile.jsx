import React from 'react';
import classes from './Profile.module.css';
import PostsContainer from "./Posts/PostsContainer";


const Profile = () => {
    return (
        <div className={classes.profile}>

            <PostsContainer/>

        </div>
    )
}


export default Profile;