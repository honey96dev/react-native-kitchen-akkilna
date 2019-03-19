import { createSwitchNavigator, createAppContainer } from "react-navigation";

import AuthNavigator from "./AuthNavigator";
import DrawerNavigator from "./DrawerNavigator";
import SiteNavigator from "./SiteNavigator";
import ProductNavigator from "./ProductNavigator"
import OrdersNavigator from "./OrdersNavigator";
import CalendarNavigator from "./CalendarNavigator";

export default initialRouteName =>
    createAppContainer(createSwitchNavigator(
    {
      Authentication: { screen: AuthNavigator },
      Main: { screen: DrawerNavigator },
      Site: { screen: SiteNavigator },
      Product: { screen: ProductNavigator },
      Orders: {screen: OrdersNavigator},
      Calendar: {screen: CalendarNavigator},
    },
    {
      initialRouteName,
      headerMode: "none"
    }
  ));
