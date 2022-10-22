import React from 'react';
import {addNewMessageTextCreator, updateNewMessageTextCreator} from "../../redux/reducers/dialogs-reducer";
import Messages from "./Messages";

const MessagesContainer = (props) => {

    let state = props.store.getState().messagesPage;


    const sendMessageText = () => {
        props.store.dispatch(addNewMessageTextCreator());
    }

    const updateNewMessageText = (message) => {
        props.store.dispatch(updateNewMessageTextCreator(message));
    }


    return <Messages updateNewMessageText={updateNewMessageText} sendMessage={sendMessageText} messagesPage={state}/> //если в одну строку, то скобки не ставим
}


export default MessagesContainer;