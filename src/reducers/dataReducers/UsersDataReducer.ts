import {USERS_DATA_LOADING, USERS_DATA_SUCCESS, USERS_DATA_FAIL, UsersDataType, UsersDataDispatchTypes} from '../../actions/types/UsersDataActionTypes'

interface  DefaultStateI {
    loading: boolean,
    UsersDataType?: UsersDataType,
    error: boolean
};

const defaultState: DefaultStateI = {
    loading: false,
    error: false
};

const UsersDataReducer = (state: DefaultStateI = defaultState, action: UsersDataDispatchTypes) : DefaultStateI   => {
    switch (action.type) {
        case USERS_DATA_FAIL:
            return {
                loading: false,
                error: true
            }
        case USERS_DATA_LOADING:            
            return {
                loading: true,
                error: false
            }
        case USERS_DATA_SUCCESS:
            console.log(action.payload)
            return {
                loading: false,
                error: false,
                UsersDataType: action.payload
            }

        default:
            return state
    }
}

export default UsersDataReducer;