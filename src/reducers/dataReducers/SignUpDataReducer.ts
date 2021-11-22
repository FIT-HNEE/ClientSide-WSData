import {SIGNUP_DATA_LOADING, SIGNUP_DATA_SUCCESS, SIGNUP_DATA_FAIL, SignUpType, SignUpDispatchTypes} from '../../actions/types/SignUpActionTypes'

interface  DefaultStateI {
    loading: boolean,
    SignUpType?: SignUpType,
    error: boolean
};

const defaultState: DefaultStateI = {
    loading: false,
    error: false
};

const SignUpDataReducer = (state: DefaultStateI = defaultState, action: SignUpDispatchTypes) : DefaultStateI   => {
    switch (action.type) {
        case SIGNUP_DATA_FAIL:
            return {
                loading: false,
                error: true
            }
        case SIGNUP_DATA_LOADING:            
            return {
                loading: true,
                error: false
            }
        case SIGNUP_DATA_SUCCESS:
            console.log(action.payload)
            return {
                loading: false,
                error: false,
                SignUpType: action.payload
            }

        default:
            return state
    }
}

export default SignUpDataReducer;