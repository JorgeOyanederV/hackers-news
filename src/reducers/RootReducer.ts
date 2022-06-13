import { combineReducers } from "redux";
import newsReducer from "./NewsReducer";

const RootReducer = combineReducers({
   news: newsReducer
});

export default RootReducer;