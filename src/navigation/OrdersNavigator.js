import {createStackNavigator} from "react-navigation";

import Orders from "../component/Orders/Orders";
import Accepted from "../component/Orders/Accepted";
import OrdersPlaced from "../component/Orders/OrderPlaced";
import OrderDetailed from "../component/Orders/OrderDetailed";
import Rejected from "../component/Orders/Rejected";
import Delivered from "../component/Orders/Delivered";
import Cancelled from "../component/Orders/Cancelled";
import Disputed from "../component/Orders/Disputed";
import Message from "../component/Orders/Message";
import Kitchen from "../component/Products/Kitchen";

export default createStackNavigator(
    {
        // Orders: { screen: Orders },
        Accepted: {screen: Accepted},
        OrdersPlaced: {screen: OrdersPlaced},
        OrderDetailed: {screen: OrderDetailed},
        Rejected: {screen: Rejected},
        Delivered: {screen: Delivered},
        Cancelled: {screen: Cancelled},
        Disputed: {screen: Disputed},
        Message: {screen: Message},
        Kitchen: {screen: Kitchen},


    },
    {
        headerMode: "none"
    }
);
