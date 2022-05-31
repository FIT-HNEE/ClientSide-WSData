import { LOCATION_DATA_LOADING, LOCATION_DATA_SUCCESS, LOCATION_DATA_FAIL, LocationDispatchTypes, LocationType } from '../../actions/types/LocationActionTypes';

interface  DefaultStateI {
    loading: boolean,
    LocationType?: LocationType,
    error: boolean
};

const defaultState: DefaultStateI = {
    loading: false,
    error: false
};

const LocationDataReducer = (state: DefaultStateI = defaultState, action: LocationDispatchTypes) : DefaultStateI   => {
    switch (action.type) {
        case LOCATION_DATA_FAIL:
            return {
                loading: false,
                error: true
            }
        case LOCATION_DATA_LOADING:            
            return {
                loading: true,
                error: false
            }
        case LOCATION_DATA_SUCCESS:
            console.log(action.payload)
            return {
                loading: false,
                error: false,
                LocationType: action.payload
            }

        default:
            return state
    }
}

export default LocationDataReducer;