export const LOGIN_DATA_LOADING = "LOGIN_DATA_LOADING";
export const LOGIN_DATA_FAIL = "LOGIN_DATA_FAIL";
export const LOGIN_DATA_SUCCESS = "LOGIN_DATA_SUCCESS";

export type LogInType = {
    data: {}
}
export interface LogInLoading {

    type: typeof LOGIN_DATA_LOADING    
}
export interface LogInFail {

    type: typeof LOGIN_DATA_FAIL    
}
export interface LogInSuccess {

    type: typeof LOGIN_DATA_SUCCESS,
    payload: LogInType
}

export type LogInDispatchTypes = LogInLoading | LogInFail | LogInSuccess
