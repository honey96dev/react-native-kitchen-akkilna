
import { createStackNavigator } from "react-navigation";
import TabNavigator from "./TabNavigator";
export default createStackNavigator(
  {
    Tabs: TabNavigator
  },
  {
    headerMode: "none"
  }
);

