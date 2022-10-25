import React from 'react';
import classes from './Messages.module.css';
import MessagesItems from "./MessagesItems/MessagesItems";
import Interlocutor from "./Interlocutor/Interlocutor";


const Messages = (props) => {

    let state = props.messagesPage;

    let messagesEl = state.messages.map(message => <MessagesItems message={message.message} id={message.id}/>);
    let interlocutorEl = state.interlocutor.map(name => <Interlocutor name={name.name} id={name.id}/>);
    let newMessageText = state.addNewMessage;

    const sendMessageText = () => {
        props.sendMessageText();
    }

    const updateNewMessageText = (e) => {
        let message = e.target.value;
        props.updateNewMessageText(message);

    }

    return (
        <div className={classes.dialogs}>

            <div>{interlocutorEl}</div>

            <div>{messagesEl}</div>

            <div className={classes.messages_block}>
                <div>
                    <textarea placeholder='new message..' value={newMessageText} onChange={updateNewMessageText}/>
                </div>

                <div>
                    <button onClick={sendMessageText}>Send</button>
                </div>
            </div>
        </div>
    )
}

export default Messages;