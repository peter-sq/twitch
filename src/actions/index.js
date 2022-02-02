import { SIGN_IN, SIGN_OUT } from "../actions/Types";

export const SignIn = (userId) => {
    return {
        type: SIGN_IN,
        payload: userId
    };
};

export const SignOut = () => {
    return {
        type: SIGN_OUT
    };
};

