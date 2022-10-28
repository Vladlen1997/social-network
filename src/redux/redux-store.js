import {combineReducers, legacy_createStore as createStore} from "redux";
import profileReducer from "./reducers/profile-reducer";
import dialogsReducer from "./reducers/dialogs-reducer";
import headerReducer from "./reducers/header-reducer";
import navBarReducer from "./reducers/navBar-reducer";
import usersReducer from "./reducers/users-reducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    messagesPage: dialogsReducer,
    header: headerReducer,
    navBar: navBarReducer,
    usersPage: usersReducer
});
let store = createStore(reducers);

export default store;