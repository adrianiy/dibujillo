export const SET_USER = 'SET_USER';
export const LOGOUT = 'LOGOUT';

const userStore = (state = { loggedIn: false }, action) => {
    switch (action.type) {
    case SET_USER:
        return {
            ...state,
            ...action.userData,
            loggedIn: true,
        };
    case LOGOUT:
        return {
            loggedIn: false,
        };
    default:
        return state;
    }
};

export default userStore;
