import { PAST_WEATHER_DATA_FAIL, PAST_WEATHER_DATA_LOADING, PAST_WEATHER_DATA_SUCCESS, PWDDispatchTypes, PWDType } from "../../actions/types/PastWeatherActionTypes";

interface  DefaultStateI {
    loading: boolean,
    PWDType?: PWDType,
    error: boolean
};

const defaultState: DefaultStateI = {
    loading: false,
    error: false
};

const PastWeatherDataReducer = (state: DefaultStateI = defaultState, action: PWDDispatchTypes) : DefaultStateI   => {
    switch (action.type) {
        case PAST_WEATHER_DATA_FAIL:
            return {
                loading: false,
                error: true
            }
        case PAST_WEATHER_DATA_LOADING:            
            return {
                loading: true,
                error: false
            }
        case PAST_WEATHER_DATA_SUCCESS:
            console.log(action.payload)
            return {
                loading: false,
                error: false,
                PWDType: action.payload
            }

        default:
            return state
    }
}

export default PastWeatherDataReducer;