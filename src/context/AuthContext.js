import { createContext, useReducer } from "react";
import AuthReducer from "./AuthReducer";

const INITIAL_STATE = {
    // user: {
    //     _id: "6218b6d231364a2a26ac96f5",
    //     username: "Pam Beesly",
    //     email: "test2@test.com",
    //     profilePicture: "User/3.jpg",
    //     coverPicture: "",
    //     isAdmin: false,
    //     follower: [],
    //     following: [],
    // },
    user: null,
    isFetching: false,
    error: false
};

export const AuthContext = createContext(INITIAL_STATE);

export const AuthContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);

    return (
        <AuthContext.Provider value={{
            user: state.user,
            isFetching: state.isFetching,
            error: state.error,
            dispatch
        }}>
            {children}
        </AuthContext.Provider>
    )
}
