export const Weather_Forecast_LOADING = "Weather_Forecast_LOADING";
export const Weather_Forecast_FAIL = "Weather_Forecast_FAIL";
export const Weather_Forecast_SUCCESS = "Weather_Forecast_SUCCESS";

export type FWDType = {
    weatherReport: any[],   
}
export interface FWDLoading {

    type: typeof Weather_Forecast_LOADING    
}
export interface FWDFail {

    type: typeof Weather_Forecast_FAIL    
}
export interface FWDSuccess {

    type: typeof Weather_Forecast_SUCCESS,
    payload: FWDType
}

export type FWDDispatchTypes = FWDLoading | FWDFail | FWDSuccess
