import { SET_USER, LOGOUT, SET_THEME } from '../reducers/user';

const setUser = (userData) => ({
    type: SET_USER,
    userData,
});

const setTheme = (userTheme) => ({
    type: SET_THEME,
    userTheme,
});

const logout = () => ({
    type: LOGOUT,
});

export default {
    setUser,
    setTheme,
    logout,
};
