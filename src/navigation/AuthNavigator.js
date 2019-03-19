import { createStackNavigator } from "react-navigation";

import Login from "../component/login";

export default createStackNavigator(
  {
    Login: { screen: Login },
  },
  {
    headerMode: "none"
  }
);
