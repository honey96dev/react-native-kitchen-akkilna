import {LOGIN, LOGIN_SUCCESS, LOGIN_FAILURE} from "../utils";
import {fetch, GET, POST} from "../apis";
import Setting from '../component/common/Setting';
import {Toast} from "native-base";


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
                console.log(result);
                Setting.kit_id = 5;
                if (result.error == false) {
                    // console.log('success');
                    dispatch({
                        type: LOGIN_SUCCESS,
                        payload: {
                            token: response.token
                        }
                    });
                    // Setting.kit_id = 5;
                    Setting.kit_id = result.kit;
                    obj.props.navigation.navigate("Home");
                } else {
                    // console.log('fail');
                    dispatch({
                        type: LOGIN_FAILURE,
                        payload: {
                            msg: result.error_msg
                        }
                    });
                    Toast.show({
                        text: "Please input valid credentials!!!",
                        textStyle: {textAlign: "center"},
                        type: "danger",
                        duration: 3000
                    });
                    // alert(result.error_msg, "Error");
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
