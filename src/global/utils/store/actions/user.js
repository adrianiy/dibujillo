import { SET_USER, LOGOUT } from '../reducers/user';

const setUser = (userData) => ({
    type: SET_USER,
    userData,
});

const logout = () => ({
    type: LOGOUT,
});

export default {
    setUser,
    logout,
};
