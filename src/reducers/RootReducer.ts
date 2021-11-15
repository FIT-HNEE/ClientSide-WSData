import {combineReducers} from "redux";
import PastWeatherDataReducer from "./PastWeatherDataReducer";
import QueryWDReducer from "./QueryWDReducer";

const RootReducer = combineReducers({
  dataPWD: PastWeatherDataReducer,
  dataQWD: QueryWDReducer
});

export default RootReducer;