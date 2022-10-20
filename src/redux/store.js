const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE_NEW_MESSAGE_TEXT';


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
        if(action.type === ADD_POST) {
            let newPost = {post: this._state.profilePage.addNewPost, id: 4, likesCount: 8899};
            this._state.profilePage.post.push(newPost);
            this._state.profilePage.addNewPost = '';
            this._subscriber(this._state);
        } else if(action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.addNewPost = action.text;
            this._subscriber(this._state);
        } else if(action.type === ADD_MESSAGE) {
            let newMessage = {message: this._state.messagesPage.addNewMessage, id: 4};
            this._state.messagesPage.messages.push(newMessage);
            this._state.messagesPage.addNewMessage = '';
            this._subscriber(this._state);
        } else if(action.type === UPDATE_NEW_MESSAGE_TEXT) {
            this._state.messagesPage.addNewMessage = action.message;
            this._subscriber(this._state);
        }
    }

}

export const addNewPostTextCreator = () => ({ type: ADD_POST });
export const updateNewPostTextCreator = (text) => ({ type: UPDATE_NEW_POST_TEXT, text: text });

export const addNewMessageTextCreator = () => ({ type: ADD_MESSAGE });
export const updateNewMessageTextCreator = (message) => ({ type: UPDATE_NEW_MESSAGE_TEXT, message: message });






//window.store = store;
export default store;