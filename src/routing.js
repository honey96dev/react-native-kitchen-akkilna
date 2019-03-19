import React, {PureComponent} from "react";
import {connect} from "react-redux";
import {Root} from "native-base";
import {Expo, AppLoading, Font} from "expo";
import {setBaseURL, setCustomHeaders} from "./apis";
import {createAppContainer} from 'react-navigation';

import AppNavigator from "./navigation/AppNavigator";

class Routing extends PureComponent {
    constructor(props) {
        super(props);
        // setBaseURL("http://localhost:5000/api");
        setBaseURL("http://phpstack-153485-682919.cloudwaysapps.com/json");
        if (props.token) {
            setCustomHeaders([
                {
                    name: "Authorization",
                    value: props.token
                }
            ]);
        }
        this.state = {
            isReady: false
        };
    }

    async componentWillMount() {
        await Font.loadAsync({
            Poppins: require("../assets/Fonts/poppin/Poppins-Regular.ttf"),
            Poppins_medium: require("../assets/Fonts/poppin/Poppins-SemiBold.ttf"),
            Poppins_bold: require("../assets/Fonts/poppin/Poppins-Bold.ttf"),
            Roboto: require("../assets/Fonts/roboto/Roboto-Regular.ttf"),
            Roboto_medium: require("../assets/Fonts/roboto/Roboto-Medium.ttf"),
            Roboto_bold: require("../assets/Fonts/roboto/Roboto-Bold.ttf"),
            Ionicons: require("../assets/Icons/ionicons/fonts/ionicons.ttf"),
            FontAwesome: require("../assets/Icons/FontAwesome.ttf"),


        });

        this.setState({isReady: true});
    }

    render() {
        if (!this.state.isReady) {
            return <AppLoading/>;
        }
        console.log("TOKEN", this.props.token);
        let Navigator = AppNavigator(this.props.token ? "Main" : "Authentication");
        // const App = createAppContainer(Navigator);
        // export default App;

        return (
            <Root>
                <Navigator />
            </Root>
        );
    }
}

const mapStateToProps = ({user}) => {
    const {token} = user;
    return {token};
};

export default connect(
    mapStateToProps,
    {}
)(Routing);

