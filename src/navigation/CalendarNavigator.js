import { createStackNavigator } from "react-navigation";

import CalendarScreen from "../component/CalendarScreen/CalendarScreen";


export default createStackNavigator(
  {
    CalendarScreen: { screen: CalendarScreen },

  },
  {
    headerMode: "none"
  }
);
