import {combineReducers} from "redux";
import PastWeatherDataReducer from "./dataReducers/PastWeatherDataReducer";
import QueryWDReducer from "./dataReducers/QueryWDReducer";
import LogInDataReducer from "./dataReducers/LogInDataReducer";
import SignUpDataReducer from './dataReducers/SignUpDataReducer';

const RootReducer = combineReducers({
  PWdata: PastWeatherDataReducer,
  QWdata: QueryWDReducer,
  LogIndata: LogInDataReducer,
  SignUpdata: SignUpDataReducer
});

export default RootReducer;