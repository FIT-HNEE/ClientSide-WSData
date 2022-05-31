import {Dispatch} from "redux";
import { PAST_WEATHER_DATA_FAIL, PAST_WEATHER_DATA_LOADING, PAST_WEATHER_DATA_SUCCESS, PWDDispatchTypes } from "./types/PastWeatherActionTypes";
import { Query_WEATHER_DATA_LOADING, Query_WEATHER_DATA_SUCCESS, QWDDispatchTypes, Query_WEATHER_DATA_FAIL } from './types/QueryWeatherDataTypes';
import { LOGIN_DATA_LOADING, LOGIN_DATA_SUCCESS, LOGIN_DATA_FAIL, LogInDispatchTypes } from './types/LoginActionTypes';
import { SIGNUP_DATA_LOADING, SIGNUP_DATA_FAIL, SIGNUP_DATA_SUCCESS, SignUpDispatchTypes } from './types/SignUpActionTypes';
import { USER_DATA_LOADING, USER_DATA_SUCCESS, USER_DATA_FAIL, UserDataDispatchTypes} from './types/UserDataActionTypes'
import { USERS_DATA_LOADING, USERS_DATA_SUCCESS, USERS_DATA_FAIL, UsersDataDispatchTypes } from './types/UsersDataActionTypes';
import { USER_DATA_Modify_LOADING, USER_DATA_Modify_SUCCESS, USER_DATA_Modify_FAIL, UserDataModifyDispatchTypes } from './types/UserDataModificationActionTypes';
import { Weather_Forecast_FAIL, Weather_Forecast_LOADING, Weather_Forecast_SUCCESS, FWDDispatchTypes } from "./types/WeatherForecastActionTypes";
import { USER_DATA_DELETE_LOADING, USER_DATA_DELETE_SUCCESS, USER_DATA_DELETE_FAIL, UserDataDELETEDispatchTypes } from './types/UserDataDeleteTypes';
import { LOCATION_DATA_LOADING, LOCATION_DATA_SUCCESS, LOCATION_DATA_FAIL, LocationDispatchTypes } from "./types/LocationActionTypes";
import axios from "axios";

export const GetPWData = () => async (dispatch: Dispatch<PWDDispatchTypes>) => {

    try {
        dispatch({
            type: PAST_WEATHER_DATA_LOADING,            
        });        

        const resp = await axios.get("http://localhost:4000/api/weatherData/lastSevenDays");       
        const data = await resp.data

        if (!data) {
             dispatch({
            type: PAST_WEATHER_DATA_FAIL            
        })  
        } else {
            dispatch({                
                        type: PAST_WEATHER_DATA_SUCCESS,            
                        payload: data                
                    })
        }       
        
    } catch (error) {

        console.log('ERROR-ACTION', error)
        dispatch({
            type: PAST_WEATHER_DATA_FAIL            
        })        
    }    
}
//Weather Forecast using Weather API
export const GetFWData = () => async (dispatch: Dispatch<FWDDispatchTypes>) => {

    try {
        dispatch({
            type: Weather_Forecast_LOADING,            
        });        

        const resp = await axios.get("http://localhost:4000/api/weatherData/forecast");        
        const data = await resp.data        
        
        if (data) {
             dispatch({                
                        type: Weather_Forecast_SUCCESS,            
                        payload: data                
         });
        } else if (data[0].cod = 429) {
            dispatch({
            type: Weather_Forecast_FAIL            
        }) 
        } else {
             dispatch({
            type: Weather_Forecast_FAIL            
        }) 
        }   
        
    } catch (error) {

        console.log('ERROR-ACTION', error)
        dispatch({
            type: Weather_Forecast_FAIL            
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
        
        const data = await response.data     
        
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
              
            
        const data = await response.data     
        
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
        
        const accessToken = sessionStorage.getItem('accessToken');

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

export const GetUsersData = () => async (dispatch: Dispatch<UsersDataDispatchTypes>) => {
    try {

        dispatch({
            type: USERS_DATA_LOADING,            
        });
        
        const accessToken = await sessionStorage.getItem('accessToken');

        const resp = await axios.get('http://localhost:4000/api/users',
            {headers: { Authorization: `JWT ${accessToken}` }});        
        const data = await resp.data
        
        dispatch({                
            type: USERS_DATA_SUCCESS,            
            payload: data                
        });
        
        
    } catch (error) {

        console.log('ERROR-ACTION', error)
        dispatch({
            type: USERS_DATA_FAIL            
        })        
    }    
}

export const GetUserDataToModify = (id: any) => async ( dispatch:Dispatch<UserDataModifyDispatchTypes>) => {
    
    try {                

        dispatch({
            type: USER_DATA_Modify_LOADING,            
        });
        const accessToken = await sessionStorage.getItem('accessToken');

        const response = await axios.get(`http://localhost:4000/api/users/${id}`,
            {headers: { Authorization: `JWT ${accessToken}` }})
    
    const data = await response.data
        
        dispatch({                
            type: USER_DATA_Modify_SUCCESS,            
            payload: data                
        });
        
    } catch (error) {

        console.log('ERROR-ACTION', error)
        dispatch({
            type: USER_DATA_Modify_FAIL            
        })        
    }    
}

export const UserDataModification = (id: any, firstName: any, lastName: any, email:any, confirmation: any, isAdmin: any) => async ( dispatch:Dispatch<UserDataModifyDispatchTypes>) => {
    
    try {                

        dispatch({
            type: USER_DATA_Modify_LOADING,            
        });
        const accessToken = await sessionStorage.getItem('accessToken');

        const response = await axios.put(`http://localhost:4000/api/users/${id}`, {        
            firstName: firstName,            
            lastName: lastName,
            email: email,
            confirmation: confirmation,
            isAdmin:isAdmin
        },            
            { headers: { Authorization: `JWT ${accessToken}` } })        
    
        const data = await response.data       
        
        dispatch({                
            type: USER_DATA_Modify_SUCCESS,            
            payload: data                
        });
        
    } catch (error) {

        console.log('ERROR-ACTION', error)
        dispatch({
            type: USER_DATA_Modify_FAIL            
        })        
    }    
}

export const UserDataDeletion = (id: any) => async ( dispatch:Dispatch<UserDataDELETEDispatchTypes>) => {
    
    try {                

        dispatch({
            type: USER_DATA_DELETE_LOADING,            
        });
        const accessToken = await sessionStorage.getItem('accessToken');

        const response = await axios.delete(`http://localhost:4000/api/users/${id}`,            
            { headers: { Authorization: `JWT ${accessToken}` } })        
    
        const data = await response.data       
        console.warn(data)
        
        dispatch({                
            type: USER_DATA_DELETE_SUCCESS,
        });
        
    } catch (error) {

        console.log('ERROR-ACTION', error)
        dispatch({
            type: USER_DATA_DELETE_FAIL            
        })        
    }    
}

export const GetLocationData = () => async (dispatch: Dispatch<LocationDispatchTypes>) => {

    try {
        dispatch({
            type: LOCATION_DATA_LOADING,            
        });        

        const resp = await axios.get("http://localhost:4000/api/weatherData/stationLocation");        
        const data = await resp.data        
        
        if (data) {
             dispatch({                
                        type: LOCATION_DATA_SUCCESS,            
                        payload: data                
         });
        } 
          
        
    } catch (error) {

        console.log('ERROR-ACTION', error)
        dispatch({
            type: LOCATION_DATA_FAIL            
        })        
    }    
}


