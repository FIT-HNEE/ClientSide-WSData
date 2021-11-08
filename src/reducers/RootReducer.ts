import {combineReducers} from "redux";
import PastWeatherDataReducer from "./PastWeatherDataReducer";

const RootReducer = combineReducers({
  data: PastWeatherDataReducer
});

export default RootReducer;