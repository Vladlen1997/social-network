import React from 'react';
import classes from './Posts.module.css';
import Post from "./Post/Post";


const Posts = (props) => {

    let state = props.profilePage;

    let postEl = state.post.map(post => <Post post={post.post} likesCount={post.likesCount}/>);
    let addNewPost = state.addNewPost;


    const sendNewMessage = () => {
        // props.dispatch(addNewPostTextCreator());
        props.addNewPostText();
    }

    const updateNewPostText = (e) => {
        let text = e.target.value;
        props.updateNewPostText(text);
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