const { SET_USER, LOGOUT } = require("../reducers/user")

const setUser = userData => {
    return {
        type: SET_USER,
        userData
    }
}

const logout = () => {
    return {
        type: LOGOUT
    }
}

export default {
    setUser,
    logout
}
