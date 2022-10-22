import React from 'react';
import classes from './Profile.module.css';
import PostsContainer from "./Posts/PostsContainer";


const Profile = (props) => {
    return (
        <div className={classes.profile}>

            <PostsContainer store={props.store}/>

        </div>
    )
}


export default Profile;