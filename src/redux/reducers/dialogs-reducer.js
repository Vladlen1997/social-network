const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE_NEW_MESSAGE_TEXT';
export const addNewMessageTextCreator = () => ({type: ADD_MESSAGE});
export const updateNewMessageTextCreator = (message) => ({type: UPDATE_NEW_MESSAGE_TEXT, message: message});

const dialogsReducer = (state, action) => {

    switch (action.type) {
        case ADD_MESSAGE:
            let newMessage = {message: state.addNewMessage, id: 4};
            state.messages.push(newMessage);
            state.addNewMessage = '';
            return state;
        case UPDATE_NEW_MESSAGE_TEXT:
            state.addNewMessage = action.message;
            return state;
        default:
            return state;
    }

}


export default dialogsReducer;