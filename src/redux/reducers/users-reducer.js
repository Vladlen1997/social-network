const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';

let initialState = {
    users: [
        {id: 1, followed: false, fullName: 'Kolya', status: 'rules', location: {city: 'Minsk', country: 'Belarus'}},
        {id: 2, followed: true, fullName: 'Victor', status: 'life', location: {city: 'Tbilisi', country: 'Georgia'}},
        {id: 3, followed: false, fullName: 'Lela', status: 'bulls', location: {city: 'Washington', country: 'USA'}},
        {id: 4, followed: true, fullName: 'Vladislav', status: 'pull', location: {city: 'Moscow', country: 'Russia'}},
        {id: 5, followed: false, fullName: 'Pavel', status: 'cool', location: {city: 'Kiev', country: 'Ukraine'}},
    ]
};

const usersReducer = (state = initialState, action) => {

    switch (action.type) {
        default:
            return state;
    }

}

export const followActionCreator = () => ({type: FOLLOW});
export const unfollowActionCreator = () => ({type: UNFOLLOW});


export default usersReducer;