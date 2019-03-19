import {LOGIN, LOGIN_SUCCESS, LOGIN_FAILURE} from "../utils";
import {fetch, GET, POST} from "../apis";
import Setting from '../component/common/Setting';


export const loginUser = ({obj, email, pass}) => {
    return async dispatch => {
        dispatch({
            type: LOGIN
        });
        let parameters = {email, pass, login: 1};
        obj.setState({
            loading: true
        });
        fetch(GET, "json.php", parameters)
            .then(response => {
                // alert(response);
                // console.log(response);
                obj.setState({
                    loading: false
                });
                const result = response[0];
                if (result.error == false) {
                    // console.log('success');
                    dispatch({
                        type: LOGIN_SUCCESS,
                        payload: {
                            token: response.token
                        }
                    });
                    // App.kit_id = result.kit;
                    Setting.kit_id = 5;
                    obj.props.navigation.navigate("Home");
                } else {
                    // console.log('fail');
                    dispatch({
                        type: LOGIN_FAILURE,
                        payload: {
                            msg: result.error_msg
                        }
                    });
                    // alert(result.error_msg);
                }
            })
            .catch(err => {
                // console.log(err);
                obj.setState({
                    loading: false
                });
                dispatch({
                    type: LOGIN_FAILURE,
                    payload: {
                        msg: err
                    }
                });
                // alert(err);
            });
    };
};
