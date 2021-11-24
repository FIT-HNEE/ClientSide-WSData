export const SIGNUP_DATA_LOADING = "SIGNUP_DATA_LOADING";
export const SIGNUP_DATA_FAIL = "SIGNUP_DATA_FAIL";
export const SIGNUP_DATA_SUCCESS = "SIGNUP_DATA_SUCCESS";

export type SignUpType = {
    data: {}
}
export interface SignUpLoading {

    type: typeof SIGNUP_DATA_LOADING    
}
export interface SignUpFail {

    type: typeof SIGNUP_DATA_FAIL
    
}
export interface SignUpSuccess {

    type: typeof SIGNUP_DATA_SUCCESS,
    payload: SignUpType
}

export type SignUpDispatchTypes = SignUpLoading | SignUpFail | SignUpSuccess
