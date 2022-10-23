import React from 'react';
import {addNewMessageTextCreator, updateNewMessageTextCreator} from "../../redux/reducers/dialogs-reducer";
import Messages from "./Messages";
import StoreContext from "../../StoreContext";

const MessagesContainer = () => {

    return <StoreContext.Consumer>
        {
            (store) => {

                let state = store.getState().messagesPage;

                const sendMessageText = () => {
                    store.dispatch(addNewMessageTextCreator());
                }

                const updateNewMessageText = (message) => {
                    store.dispatch(updateNewMessageTextCreator(message));
                }

                return <Messages updateNewMessageText={updateNewMessageText} sendMessage={sendMessageText}
                                 messagesPage={state}/>
            }
        }

    </StoreContext.Consumer>

}

export default MessagesContainer;


