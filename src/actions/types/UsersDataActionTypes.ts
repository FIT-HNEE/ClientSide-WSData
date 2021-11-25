export const USERS_DATA_LOADING = "USERS_DATA_LOADING";
export const USERS_DATA_FAIL = "USERS_DATA_FAIL";
export const USERS_DATA_SUCCESS = "USERS_DATA_SUCCESS";

export type UsersDataType = {
    data: []    
}
export interface UsersDataLoading {

    type: typeof USERS_DATA_LOADING    
}
export interface UsersDataFail {

    type: typeof USERS_DATA_FAIL
    
}
export interface UsersDataSuccess {

    type: typeof USERS_DATA_SUCCESS,
    payload: UsersDataType
}


export type UsersDataDispatchTypes = UsersDataLoading | UsersDataFail | UsersDataSuccess 
