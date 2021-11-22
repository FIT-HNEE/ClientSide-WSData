import {USER_DATA_LOADING, USER_DATA_SUCCESS, USER_DATA_FAIL, UserDataType, UserDataDispatchTypes} from '../../actions/types/UserDataActionTypes'

interface  DefaultStateI {
    loading: boolean,
    UserDataType?: UserDataType,
    error: boolean
};

const defaultState: DefaultStateI = {
    loading: false,
    error: false
};

const UserDataReducer = (state: DefaultStateI = defaultState, action: UserDataDispatchTypes) : DefaultStateI   => {
    switch (action.type) {
        case USER_DATA_FAIL:
            return {
                loading: false,
                error: true
            }
        case USER_DATA_LOADING:            
            return {
                loading: true,
                error: false
            }
        case USER_DATA_SUCCESS:
            console.log(action.payload)
            return {
                loading: false,
                error: false,
                UserDataType: action.payload
            }

        default:
            return state
    }
}

export default UserDataReducer;