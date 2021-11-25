import {combineReducers} from "redux";
import PastWeatherDataReducer from "./dataReducers/PastWeatherDataReducer";
import QueryWDReducer from "./dataReducers/QueryWDReducer";
import LogInDataReducer from "./dataReducers/LogInDataReducer";
import SignUpDataReducer from './dataReducers/SignUpDataReducer';
import UserDataReducer from "./dataReducers/UserDataReducer";
import UsersDataReducer from "./dataReducers/UsersDataReducer";
import GetUserDataToModifyReducer from "./dataReducers/GetUserDataToModifyReducer";
import UserDataModificationReducer from "./dataReducers/UserDataModificationReducer";

const RootReducer = combineReducers({
  PWdata: PastWeatherDataReducer,
  QWdata: QueryWDReducer,
  LogIndata: LogInDataReducer,
  SignUpdata: SignUpDataReducer,
  UserData: UserDataReducer,
  UsersData: UsersDataReducer,
  UserDataToModify: GetUserDataToModifyReducer,
  UserDataModification: UserDataModificationReducer
});

export default RootReducer;