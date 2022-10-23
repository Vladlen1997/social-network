import React from 'react';
import {addNewPostTextCreator, updateNewPostTextCreator} from "../../../redux/reducers/profile-reducer";
import Posts from "./Posts";
import StoreContext from "../../../StoreContext";


const PostsContainer = () => {

    return (
        <StoreContext.Consumer>
            {
                (store) => {

                    let state = store.getState().profilePage;
                    const sendNewPostText = () => {
                        store.dispatch(addNewPostTextCreator());
                    }

                    const updateNewPostText = (text) => {
                        store.dispatch(updateNewPostTextCreator(text));
                    }
                    return <Posts addNewPostText={sendNewPostText}
                                  updateNewPostText={updateNewPostText}
                                  profilePage={state}/>

                }
            }
        < /StoreContext.Consumer>

    )
}


export default PostsContainer;