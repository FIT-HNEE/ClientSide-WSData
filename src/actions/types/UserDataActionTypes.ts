export const USER_DATA_LOADING = "USER_DATA_LOADING";
export const USER_DATA_FAIL = "USER_DATA_FAIL";
export const USER_DATA_SUCCESS = "USER_DATA_SUCCESS";

export type UserDataType = {
    data: {}
}
export interface UserDataLoading {

    type: typeof USER_DATA_LOADING    
}
export interface UserDataFail {

    type: typeof USER_DATA_FAIL
    
}
export interface UserDataSuccess {

    type: typeof USER_DATA_SUCCESS,
    payload: UserDataType
}

export type UserDataDispatchTypes = UserDataLoading | UserDataFail | UserDataSuccess
