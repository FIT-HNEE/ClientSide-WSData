import {USER_DATA_Modify_LOADING, USER_DATA_Modify_SUCCESS, USER_DATA_Modify_FAIL, UserDataModifyType, UserDataModifyDispatchTypes} from '../../actions/types/UserDataModificationActionTypes'

interface  DefaultStateI {
    loading: boolean,
    UserDataModifyType?: UserDataModifyType,
    error: boolean
};

const defaultState: DefaultStateI = {
    loading: false,
    error: false
};

const UserDataModificationReducer = (state: DefaultStateI = defaultState, action: UserDataModifyDispatchTypes) : DefaultStateI   => {
    switch (action.type) {
        case USER_DATA_Modify_FAIL:
            return {
                loading: false,
                error: true
            }
        case USER_DATA_Modify_LOADING:            
            return {
                loading: true,
                error: false
            }
        case USER_DATA_Modify_SUCCESS:
            console.log(action.payload)
            return {
                loading: false,
                error: false,
                UserDataModifyType: action.payload
            }

        default:
            return state
    }
}

export default UserDataModificationReducer;