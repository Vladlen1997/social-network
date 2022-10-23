import React from 'react';
import StoreContext from "../../StoreContext";
import Header from "./Header";

const HeaderContainer = () => {

    return <StoreContext.Consumer>
        {
            (store) => {
                let state = store.getState().header;
                return <Header header={state}/>
            }
        }
    </StoreContext.Consumer>
}

export default HeaderContainer;