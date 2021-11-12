export const Query_WEATHER_DATA_LOADING = "Query_WEATHER_DATA_LOADING";
export const Query_WEATHER_DATA_FAIL = "Query_WEATHER_DATA_FAIL";
export const Query_WEATHER_DATA_SUCCESS = "Query_WEATHER_DATA_SUCCESS";

export type QWDType = {
    data: {
        data: {
            data: string[],
            header: {},
            error: string
        }
    }
}
export interface QWDLoading {

    type: typeof Query_WEATHER_DATA_LOADING    
}
export interface QWDFail {

    type: typeof Query_WEATHER_DATA_FAIL    
}
export interface QWDSuccess {

    type: typeof Query_WEATHER_DATA_SUCCESS,
    payload: QWDType
}

export type QWDDispatchTypes = QWDLoading | QWDFail | QWDSuccess
