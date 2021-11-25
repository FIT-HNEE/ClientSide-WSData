export const USER_DATA_Modify_LOADING = "USER_DATA_Modify_LOADING";
export const USER_DATA_Modify_FAIL = "USER_DATA_Modify_FAIL";
export const USER_DATA_Modify_SUCCESS = "USER_DATA_Modify_SUCCESS";


export type UserDataModifyType = {
    data: {}
    
}
export interface UserDataModifyLoading {

    type: typeof USER_DATA_Modify_LOADING    
}
export interface UserDataModifyFail {

    type: typeof USER_DATA_Modify_FAIL
    
}
export interface UserDataModifySuccess {

    type: typeof USER_DATA_Modify_SUCCESS,
    payload: UserDataModifyType
}


export type UserDataModifyDispatchTypes = UserDataModifyLoading | UserDataModifyFail | UserDataModifySuccess 
