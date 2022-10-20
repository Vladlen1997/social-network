import React from 'react';
import classes from './Messages.module.css';
import MessagesItems from "./MessagesItems/MessagesItems";
import Interlocutor from "./Interlocutor/Interlocutor";
import {addNewMessageTextCreator, updateNewMessageTextCreator} from "../../redux/state";

const Messages = (props) => {


    let messagesEl = props.messagesPage.messages.map(message => <MessagesItems message={message.message} id={message.id}/>);
    let interlocutorEl = props.messagesPage.interlocutor.map(name => <Interlocutor name={name.name} id={name.id}/>);
    let newMessageText = props.messagesPage.addNewMessage;

    const sendMessageText = () => {
        props.dispatch(addNewMessageTextCreator());
    }

    const updateNewMessageText = (e) => {
        let message = e.target.value;
        props.dispatch(updateNewMessageTextCreator(message));
    }


    return (
        <div className={classes.dialogs}>

            <div>{interlocutorEl}</div>

            <div>{messagesEl}</div>

            <div className={classes.messages_block}>
                <div><textarea placeholder='new message..' value={newMessageText} onChange={updateNewMessageText}/></div>
                <div><button onClick={sendMessageText}>Send</button></div>
            </div>

        </div>
    )
}


export default Messages;