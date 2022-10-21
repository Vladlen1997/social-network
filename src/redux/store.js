import profileReducer from "./reducers/profile-reducer";
import dialogsReducer from "./reducers/dialogs-reducer";
import navBarReducer from "./reducers/navBar-reducer";
import headerReducer from "./reducers/header-reducer";


let store = {

    _state: {
        messagesPage: {
            messages: [
                {message: 'Hi, wow', id: 1},
                {message: 'Hi, weh', id: 2},
                {message: 'Hi, wuh', id: 3}
            ],
            interlocutor: [
                {name: 'Oleg', id: 1},
                {name: 'Andrey', id: 2},
                {name: 'Stepa', id: 3}
            ],
            addNewMessage: ""
        },

        profilePage: {
            post: [
                {post: 'new apartment', id: 1, likesCount: 888},
                {post: 'new architect', id: 2, likesCount: 788},
                {post: 'news your friend', id: 3, likesCount: 988}
            ],

            addNewPost: ""
        },


        navBar: [
            {page: 'Profile', id: 1},
            {page: 'Messages', id: 2},
            {page: 'Friends', id: 3},
            {page: 'News', id: 4},
            {page: 'Music', id: 5},
            {page: 'Videos', id: 6}
        ],

        header: [
            {reference: 'Settings', id: 1},
            {reference: 'New', id: 2},
            {reference: 'Log in', id: 3}
        ]


    },
    _subscriber() {
        console.log('state changed');
    },
    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._subscriber = observer;
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.messagesPage = dialogsReducer(this._state.messagesPage, action);
        this._state.navBar = navBarReducer(this._state.navBar, action);
        this._state.header = headerReducer(this._state.header, action);
        this._subscriber(this._state);
    }
}


//window.store = store;
export default store;