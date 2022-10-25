import React from 'react';
import classes from './Posts.module.css';
import Post from "./Post/Post";


const Posts = (props) => {
    let post = props.post;

    let postEl = post.map(post => <Post post={post.post} likesCount={post.likesCount}/>);
    let addNewPost = props.addNewPost;


    const addNewPostText = () => {
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
                    <button onClick={addNewPostText}>Send</button>
                </div>

            </div>
        </div>
    )
}


export default Posts;