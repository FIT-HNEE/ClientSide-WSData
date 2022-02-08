import { USER_DATA_DELETE_LOADING, USER_DATA_DELETE_SUCCESS, USER_DATA_DELETE_FAIL, UserDataDELETEType, UserDataDELETEDispatchTypes } from '../../actions/types/UserDataDeleteTypes';

interface  DefaultStateI {
    loading: boolean,
    UserDataDELETEType?: UserDataDELETEType,
    error: boolean
};

const defaultState: DefaultStateI = {
    loading: false,
    error: false
};

const UserDataDeleteReducer = (state: DefaultStateI = defaultState, action: UserDataDELETEDispatchTypes) : DefaultStateI   => {
    switch (action.type) {
        case USER_DATA_DELETE_FAIL:
            return {
                loading: false,
                error: true
            }
        case USER_DATA_DELETE_LOADING:            
            return {
                loading: true,
                error: false
            }
        case USER_DATA_DELETE_SUCCESS:
           
            return {
                loading: false,
                error: false,
                
            }

        default:
            return state
    }
}

export default UserDataDeleteReducer;