import React from 'react';
import classes from './NavBarPage.module.css';
import {NavLink} from "react-router-dom";

const NavBarPage = (props) => {
    let path = '/' + props.page;
    return (
        <div className={classes.nav_page}>
            <NavLink to={path}>{props.page}</NavLink>
        </div>
    )
}


export default NavBarPage;