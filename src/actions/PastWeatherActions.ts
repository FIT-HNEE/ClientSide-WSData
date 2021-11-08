import {Dispatch} from "redux";
import {PAST_WEATHER_DATA_FAIL, PAST_WEATHER_DATA_LOADING,PAST_WEATHER_DATA_SUCCESS, PWDDispatchTypes} from "./PastWeatherActionTypes";
import axios from "axios";

export const GetPWData = () => async (dispatch: Dispatch<PWDDispatchTypes>) => {
    try {

        dispatch({
            type: PAST_WEATHER_DATA_LOADING,            
        });        

        const resp = await axios.get("http://localhost:4000/api/weatherData/lastSevenDays");        
        const data = await resp.data
        
        dispatch({                
            type: PAST_WEATHER_DATA_SUCCESS,            
            payload: data                
        });
        
    } catch (error) {

        console.log('ERROR', error)
        dispatch({
            type: PAST_WEATHER_DATA_FAIL            
        })        
    }    
}