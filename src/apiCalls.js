import axios from 'axios';

export const loginCall = async (userCredentials, dispatch) => {
    dispatch({ type: "LOGIN_START" });
    try {
        const response = await axios.post("auth/login", userCredentials);
        dispatch({ type: "LOGIN_SUCCESS", payload: response.data })
    } catch (err) {
        dispatch({ type: "LOGIN_FAIL", payload: err })
    }
}