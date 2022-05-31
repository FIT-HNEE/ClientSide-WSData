export const LOCATION_DATA_LOADING = "LOCATION_DATA_LOADING";
export const LOCATION_DATA_FAIL = "LOCATION_DATA_FAIL";
export const LOCATION_DATA_SUCCESS = "LOCATION_DATA_SUCCESS";

export type LocationType = {
    data: {}
}
export interface LocationLoading {

    type: typeof LOCATION_DATA_LOADING    
}
export interface LocationFail {

    type: typeof LOCATION_DATA_FAIL
    
}
export interface LocationSuccess {

    type: typeof LOCATION_DATA_SUCCESS,
    payload: LocationType
}

export type LocationDispatchTypes = LocationLoading | LocationFail | LocationSuccess