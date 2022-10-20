import React from 'react';
import classes from './Interlocutor.module.css';
import {NavLink} from "react-router-dom";


const Interlocutor = (props) => {
    let path = '/Messages/' + props.name;
    return (
        <div className={classes.interlocutor}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}


export default Interlocutor;