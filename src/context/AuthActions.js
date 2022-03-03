export const loginStart = (userCredentials) => ({
    type: "LOGIN_START"
})

export const loginSuccess = (user) => ({
    type: "LOGIN_SUCCESS",
    payload: user,
})

export const loginFail = (error) => ({
    type: "LOGIN_FAIL",
    payload: error
})

export const Follow = (userId) => ({
    type: "FOLLOW",
    payload: userId
})

export const unFollow = (userId) => ({
    type: "UNFOLLOW",
    payload: userId
})