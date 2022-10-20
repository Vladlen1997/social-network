import React from 'react';
import classes from './HeaderRef.module.css';
import {NavLink} from "react-router-dom";


const HeaderRef = (props) => {
    let ref = props.reference + '/' + props.id;
    return (
        <div className={classes.ref}>
                <NavLink to={ref}>{props.reference}</NavLink>
        </div>
    )
}


export default HeaderRef;


