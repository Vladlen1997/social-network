import React from 'react';
import StoreContext from "../../StoreContext";
import NavBar from "./NavBar";

const NavBarContainer = () => {
    return (
        <StoreContext.Consumer>
            {
                (store) => {
                    return <NavBar navBar={store.getState().navBar}/>
                }
            }
        </StoreContext.Consumer>
    )
}

export default NavBarContainer;