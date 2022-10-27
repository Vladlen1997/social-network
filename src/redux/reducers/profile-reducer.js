const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
export const addNewPostTextCreator = () => ({type: ADD_POST});
export const updateNewPostTextCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, text: text});

let initialState = {
    post: [
        {post: 'new apartment', id: 1, likesCount: 888},
        {post: 'new architect', id: 2, likesCount: 788},
        {post: 'news your friend', id: 3, likesCount: 988}
    ],

    addNewPost: ""

}
const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST: {
            let newPost = {post: state.addNewPost, id: 4, likesCount: 8899};
            return {
                ...state,
                post: [...state.post, newPost],
                addNewPost: ''
            };

        }
        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                addNewPost: action.text
            };

        }
        default:
            return state;

    }


}


export default profileReducer;