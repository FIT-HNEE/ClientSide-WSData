export const USER_DATA_DELETE_LOADING = "USER_DATA_DELETE_LOADING";
export const USER_DATA_DELETE_FAIL = "USER_DATA_DELETE_FAIL";
export const USER_DATA_DELETE_SUCCESS = "USER_DATA_DELETE_SUCCESS";


export type UserDataDELETEType = {
    data: {}
    
}
export interface UserDataDELETELoading {

    type: typeof USER_DATA_DELETE_LOADING    
}
export interface UserDataDELETEFail {

    type: typeof USER_DATA_DELETE_FAIL
    
}
export interface UserDataDELETESuccess {

    type: typeof USER_DATA_DELETE_SUCCESS,
    
}


export type UserDataDELETEDispatchTypes = UserDataDELETELoading | UserDataDELETEFail | UserDataDELETESuccess 