import {Dispatch} from "redux";
import { PAST_WEATHER_DATA_FAIL, PAST_WEATHER_DATA_LOADING, PAST_WEATHER_DATA_SUCCESS, PWDDispatchTypes } from "./types/PastWeatherActionTypes";
import { Query_WEATHER_DATA_LOADING, Query_WEATHER_DATA_SUCCESS, QWDDispatchTypes, Query_WEATHER_DATA_FAIL } from './types/QueryWeatherDataTypes';
import { LOGIN_DATA_LOADING, LOGIN_DATA_SUCCESS, LOGIN_DATA_FAIL, LogInDispatchTypes } from './types/LoginActionTypes';
import { SIGNUP_DATA_LOADING, SIGNUP_DATA_FAIL, SIGNUP_DATA_SUCCESS, SignUpDispatchTypes } from './types/SignUpActionTypes';
import { USER_DATA_LOADING, USER_DATA_SUCCESS, USER_DATA_FAIL, UserDataDispatchTypes} from './types/UserDataActionTypes'
import axios from "axios";

// interface WeatherDataCredentials {
//     StationName?: string,
//     StartDay?: any,
//     EndDay?: any
// }

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

        console.log('ERROR-ACTION', error)
        dispatch({
            type: PAST_WEATHER_DATA_FAIL            
        })        
    }    
}

export const GetQWData = (StationName: any, StartDay: any, EndDay: any) => async ( dispatch:Dispatch<QWDDispatchTypes>) => {
    
    try {                

        dispatch({
            type: Query_WEATHER_DATA_LOADING,            
        });
        const response = await axios.post("http://localhost:4000/api/weatherData", {
    
      StationName: StationName,      
      StartDay: StartDay,    
      EndDay: EndDay,
    
    });
    
    const data = await response.data
        
        dispatch({                
            type: Query_WEATHER_DATA_SUCCESS,            
            payload: data                
        });
        
    } catch (error) {

        console.log('ERROR-ACTION', error)
        dispatch({
            type: Query_WEATHER_DATA_FAIL            
        })        
    }    
}

export const LogInData = (email: any, password: any) => async (dispatch: Dispatch<LogInDispatchTypes>) => {
    try {

        dispatch({
            type: LOGIN_DATA_LOADING,            
        });
        
        const response = await axios.post('http://localhost:4000/api/users/login',
        {        
          email: email,   
          password: password
            }, { withCredentials: true })
        
        //await localStorage.setItem('accessToken', response.data.tokens.accessToken)
        //await localStorage.setItem('refreshToken', response.data.tokens.refreshToken)        
            
        const data = response.data     
        
        dispatch({                
            type: LOGIN_DATA_SUCCESS,            
            payload: data                
        });
        
    } catch (error) {

        console.log('ERROR-ACTION', error)
        dispatch({
            type: LOGIN_DATA_FAIL,
                        
        })        
    }    
}

export const SignUpData = (firstName: any, lastName: any, email:any, password: any) => async (dispatch: Dispatch<SignUpDispatchTypes>) => {
    try {

        dispatch({
            type: SIGNUP_DATA_LOADING,            
        });
        
        const response = await axios.post('http://localhost:4000/api/users/register',
        {        
            firstName: firstName,            
            lastName: lastName,
            email: email,
            password: password
          
            }, { withCredentials: true })        
              
            
        const data = response.data     
        
        dispatch({                
            type: SIGNUP_DATA_SUCCESS,            
            payload: data                
        });
        
    } catch (error) {

        console.log('ERROR-ACTION', error)
        dispatch({
            type: SIGNUP_DATA_FAIL,
                        
        })        
    }    
}

export const GetUserData = () => async (dispatch: Dispatch<UserDataDispatchTypes>) => {
    try {

        dispatch({
            type: USER_DATA_LOADING,            
        });
        
        const accessToken = localStorage.getItem('accessToken');

        const resp = await axios.get('http://localhost:4000/api/users/me',
            {headers: { Authorization: `JWT ${accessToken}` }});        
        const data = await resp.data
        
        dispatch({                
            type: USER_DATA_SUCCESS,            
            payload: data                
        });
        
    } catch (error) {

        console.log('ERROR-ACTION', error)
        dispatch({
            type: USER_DATA_FAIL            
        })        
    }    
}