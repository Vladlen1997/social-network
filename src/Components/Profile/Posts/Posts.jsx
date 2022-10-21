import React from 'react';
import classes from './Posts.module.css';
import Post from "./Post/Post";
import {addNewPostTextCreator, updateNewPostTextCreator} from "../../../redux/reducers/profile-reducer";


const Posts = (props) => {

    let postEl = props.profilePage.post.map(post => <Post post={post.post} likesCount={post.likesCount}/>);
    let addNewPost = props.profilePage.addNewPost;


    const sendNewMessage = () => {
        props.dispatch(addNewPostTextCreator());
    }

    const updateNewPostText = (e) => {
        let text = e.target.value;
        props.dispatch(updateNewPostTextCreator(text));
    }

    return (
        <div className={classes.profile_posts}>
            {postEl}

            <div className={classes.profile_block}>

                <div><textarea placeholder='Write your message' value={addNewPost} onChange={updateNewPostText}/></div>
                <div>
                    <button onClick={sendNewMessage}>Send</button>
                </div>

            </div>
        </div>
    )
}


export default Posts;