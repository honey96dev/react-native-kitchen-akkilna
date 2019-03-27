import { createStackNavigator } from "react-navigation";

import Kitchen from "../component/Products/Kitchen";
import EditAddress from "../component/AccountScreen/EditAddress";
import ManageAddress from "../component/AccountScreen/ManageAddress";


export default createStackNavigator(
  {
    Kitchen: { screen: Kitchen },
    EditAddress: { screen: EditAddress },
    ManageAddress: { screen: ManageAddress},
  },
  {
    headerMode: "none"
  }
);
