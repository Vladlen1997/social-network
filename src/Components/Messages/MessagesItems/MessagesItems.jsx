import React from 'react';
import classes from './MessagesItems.module.css';


const MessagesItems = (props) => {

    return (
        <div className={classes.messages}>
            {props.message}
        </div>
    )
}


export default MessagesItems;