export const SET_USER = 'SET_USER';
export const SET_THEME = 'SET_THEME';
export const LOGOUT = 'LOGOUT';

const userStore = (state = { loggedIn: false, theme: 'light' }, action) => {
    switch (action.type) {
        case SET_USER:
            return {
                ...state,
                ...action.userData,
                loggedIn: true,
            };
        case SET_THEME:
            return {
                ...state,
                theme: action.userTheme,
            };
        case LOGOUT:
            return {
                loggedIn: false,
                theme: state.theme,
            };
        default:
            return state;
    }
};

export default userStore;
