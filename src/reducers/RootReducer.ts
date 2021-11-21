import {combineReducers} from "redux";
import PastWeatherDataReducer from "./PastWeatherDataReducer";
import QueryWDReducer from "./QueryWDReducer";
import LogInDataReducer from "./LogInDataReducer";

const RootReducer = combineReducers({
  dataPWD: PastWeatherDataReducer,
  dataQWD: QueryWDReducer,
  dataLogIn: LogInDataReducer
});

export default RootReducer;