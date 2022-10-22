import React from 'react';
import {addNewPostTextCreator, updateNewPostTextCreator} from "../../../redux/reducers/profile-reducer";
import Posts from "./Posts";


const PostsContainer = (props) => {

    let state = props.store.getState().profilePage;

    const sendNewMessageText = () => {
        props.store.dispatch(addNewPostTextCreator());
    }

    const updateNewPostText = (text) => {
        props.store.dispatch(updateNewPostTextCreator(text));
    }

    return <Posts addNewPostText={sendNewMessageText} updateNewPostText={updateNewPostText} profilePage={state}/>

}


export default PostsContainer;