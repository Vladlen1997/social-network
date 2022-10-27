import React from 'react';
import classes from './Header.module.css';
import HeaderRef from "./HeaderRef/HeaderRef";

const Header = (props) => {

    let header = props.header;
    let headerEl = header.map(ref => <HeaderRef reference={ref.reference} key={ref.id} id={ref.id}/>);

    return (

        <div className={classes.header}>
            {headerEl}
        </div>

    )
}

export default Header;