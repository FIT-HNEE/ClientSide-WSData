import { Weather_Forecast_FAIL, Weather_Forecast_LOADING, Weather_Forecast_SUCCESS, FWDDispatchTypes, FWDType } from "../../actions/types/WeatherForecastActionTypes"

interface  DefaultStateI {
    loading: boolean,
    FWDType?: FWDType,
    error: boolean
};

const defaultState: DefaultStateI = {
    loading: false,
    error: false
};

const WeatherForecastReducer = (state: DefaultStateI = defaultState, action: FWDDispatchTypes) : DefaultStateI   => {
    switch (action.type) {
        case Weather_Forecast_FAIL:
            return {
                loading: false,
                error: true
            }
        case Weather_Forecast_LOADING:            
            return {
                loading: true,
                error: false
            }
        case Weather_Forecast_SUCCESS:
            console.log(action.payload)
            return {
                loading: false,
                error: false,
                FWDType: action.payload
            }

        default:
            return state
    }
}

export default WeatherForecastReducer;