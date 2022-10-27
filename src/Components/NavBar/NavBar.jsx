import React from 'react';
import classes from './NavBar.module.css';
import NavBarPage from "./NavBarPage/NavBarPage";

const NavBar = (props) => {

    let navBar = props.navBar;
    let navBarEl = navBar.map(nav => <NavBarPage page={nav.page} key={nav.id} id={nav.id}/>);

    return (
        <div className={classes.nav}>
            {navBarEl}
        </div>
    )
}

export default NavBar;