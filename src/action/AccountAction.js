import {LOGOUT, TESTAPI, TESTAPI_SUCCESS, TESTAPI_FAIL} from "../utils";
import {fetch, GET} from "../apis";

export const logout = () => {
    return {
        type: LOGOUT
    };
};

export const testapi = () => {
    return async dispatch => {
        fetch(GET, "users/test")
            .then(response => {
                console.log("test api", response);
                dispatch({
                    type: TESTAPI,
                    payload: {
                        ...response
                    }
                });
            })
            .catch(err => {
                dispatch({
                    type: TESTAPI_FAIL,
                    payload: {
                        message: err
                    }
                });
            });
    };
};
