const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';


let initialState = {
    users: [
        /* {id: 1, followed: false, fullName: 'Kolya', status: 'rules', location: {city: 'Minsk', country: 'Belarus'}},
        {id: 2, followed: true, fullName: 'Victor', status: 'life', location: {city: 'Tbilisi', country: 'Georgia'}},
        {id: 3, followed: false, fullName: 'Lela', status: 'bulls', location: {city: 'Washington', country: 'USA'}},
        {id: 4, followed: true, fullName: 'Vladislav', status: 'pull', location: {city: 'Moscow', country: 'Russia'}},
        {id: 5, followed: false, fullName: 'Pavel', status: 'cool', location: {city: 'Kiev', country: 'Ukraine'}},
    */]
};

const usersReducer = (state = initialState, action) => {

    switch (action.type) {

        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true};
                    }
                    return u;
                }),
            }

        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false};
                    }
                    return u;
                })
            }

        case SET_USERS: {
            return {...state, users: [...state.users, ...action.users]};
        }
        default:
            return state;


    }
}


export const followAC = (userId) => ({type: FOLLOW, userId});
export const unfollowAC = (userId) => ({type: UNFOLLOW, userId});
export const setUsersAC = (users) => ({type: SET_USERS, users});


export default usersReducer;