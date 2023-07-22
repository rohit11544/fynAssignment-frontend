import { combineReducers } from "redux";

import adminReducer from "./admin";
import priceConfigReducer from "./priceConfig";
import priceConfigEnableReducer from "./priceConfigEnable";

export default combineReducers({
    adminName: adminReducer,
    priceConfig: priceConfigReducer,
    priceConfigEnable: priceConfigEnableReducer,
});