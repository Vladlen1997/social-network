import React from 'react';
import classes from './NavBar.module.css';
import NavBarPage from "./NavBarPage/NavBarPage";


const NavBar = (props) => {

    let navBarEl = props.navBar.map(nav => <NavBarPage page={nav.page} id={nav.id}/>);

    return (
        <div className={classes.nav}>
            {navBarEl}
        </div>
    )
}


export default NavBar;