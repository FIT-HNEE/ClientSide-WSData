import {Query_WEATHER_DATA_SUCCESS, Query_WEATHER_DATA_FAIL, Query_WEATHER_DATA_LOADING, QWDDispatchTypes, QWDType} from "../actions/QueryWeatherDataTypes";

interface  DefaultStateI {
    loading: boolean,
    QWD?: any,
    error: boolean
};

const defaultState: DefaultStateI = {
    loading: false,
    error: false
};

const QueryWDReducer = (state: DefaultStateI = defaultState, action: any) : DefaultStateI   => {
    switch (action) {
        case Query_WEATHER_DATA_FAIL:
            return {
                loading: false,
                error: true
            }
        case Query_WEATHER_DATA_LOADING:            
            return {
                loading: true,
                error: false
            }
        case Query_WEATHER_DATA_SUCCESS:
            console.log(action.payload)
            return {
                loading: false,
                error: false,
                QWD: action.payload
            }

        default:
            return state
    }
}

export default QueryWDReducer;