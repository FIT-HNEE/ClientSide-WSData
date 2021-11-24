import { LOGIN_DATA_LOADING, LOGIN_DATA_SUCCESS, LOGIN_DATA_FAIL, LogInDispatchTypes, LogInType } from '../../actions/types/LoginActionTypes';

interface  DefaultStateI {
    loading: boolean,
    LogInType?: LogInType,
    error: boolean
};

const defaultState: DefaultStateI = {
    loading: false,
    error: false
};

const LogInDataReducer = (state: DefaultStateI = defaultState, action: LogInDispatchTypes) : DefaultStateI   => {
    switch (action.type) {
        case LOGIN_DATA_FAIL:
            return {
                loading: false,
                error: true
            }
        case LOGIN_DATA_LOADING:            
            return {
                loading: true,
                error: false
            }
        case LOGIN_DATA_SUCCESS:
            console.log(action.payload)
            return {
                loading: false,
                error: false,
                LogInType: action.payload
            }

        default:
            return state
    }
}

export default LogInDataReducer;