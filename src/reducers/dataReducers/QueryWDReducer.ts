import {Query_WEATHER_DATA_SUCCESS, Query_WEATHER_DATA_FAIL, Query_WEATHER_DATA_LOADING, QWDDispatchTypes, QWDType} from "../../actions/types/QueryWeatherDataTypes";

interface  DefaultStateI {
    loading: boolean,
    QWDType?: QWDType,
    error: boolean
};

const defaultState: DefaultStateI = {
    loading: false,
    error: false
};

const QueryWDReducer = (state: DefaultStateI = defaultState, action: QWDDispatchTypes) : DefaultStateI   => {
    switch (action.type) {
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
                QWDType: action.payload
            }

        default:
            return state
    }
}

export default QueryWDReducer;