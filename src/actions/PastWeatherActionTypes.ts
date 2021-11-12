export const PAST_WEATHER_DATA_LOADING = "PAST_WEATHER_DATA_LOADING";
export const PAST_WEATHER_DATA_FAIL = "PAST_WEATHER_DATA_FAIL";
export const PAST_WEATHER_DATA_SUCCESS = "PAST_WEATHER_DATA_SUCCESS";

export type PWDType = {
    data: {
        data: {
            data: string[],
            header: {}
        }
    }
}
export interface PWDLoading {

    type: typeof PAST_WEATHER_DATA_LOADING    
}
export interface PWDFail {

    type: typeof PAST_WEATHER_DATA_FAIL    
}
export interface PWDSuccess {

    type: typeof PAST_WEATHER_DATA_SUCCESS,
    payload: PWDType
}

export type PWDDispatchTypes = PWDLoading | PWDFail | PWDSuccess
