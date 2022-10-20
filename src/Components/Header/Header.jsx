import React from 'react';
import classes from './Header.module.css';
import HeaderRef from "./HeaderRef/HeaderRef";


const Header = (props) => {

    let headerEl = props.header.map(ref => <HeaderRef reference={ref.reference} id={ref.id}/>);

    return (

        <div className={classes.header}>
            {headerEl}
        </div>


    )
}


export default Header;