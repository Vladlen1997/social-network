import {addNewPostTextCreator, updateNewPostTextCreator} from "../../../redux/reducers/profile-reducer";
import Posts from "./Posts";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        post: state.profilePage.post,
        addNewPost: state.profilePage.addNewPost
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addNewPostText: () => {
            dispatch(addNewPostTextCreator());
        },

        updateNewPostText: (text) => {
            dispatch(updateNewPostTextCreator(text));
        }
    }
}
const PostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts);

export default PostsContainer;




