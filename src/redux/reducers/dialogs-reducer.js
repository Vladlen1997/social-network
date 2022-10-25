const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE_NEW_MESSAGE_TEXT';
export const addNewMessageTextCreator = () => ({type: ADD_MESSAGE});
export const updateNewMessageTextCreator = (message) => ({type: UPDATE_NEW_MESSAGE_TEXT, message: message});

let initialState = {
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
    }


const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_MESSAGE: {
            let newMessage = {message: state.addNewMessage, id: 4};
            let stateCopy = {...state};
            stateCopy.messages = [...state.messages];
            stateCopy.messages.push(newMessage);
            stateCopy.addNewMessage = '';
            return stateCopy;
        }
        case UPDATE_NEW_MESSAGE_TEXT: {
            let stateCopy = {...state};
            stateCopy.addNewMessage = action.message;
            return stateCopy;
        }
        default:
            return state;
    }

}


export default dialogsReducer;