import {Dispatch} from "redux";
import { PAST_WEATHER_DATA_FAIL, PAST_WEATHER_DATA_LOADING, PAST_WEATHER_DATA_SUCCESS, PWDDispatchTypes } from "./types/PastWeatherActionTypes";
import { Query_WEATHER_DATA_LOADING, Query_WEATHER_DATA_SUCCESS, QWDDispatchTypes, Query_WEATHER_DATA_FAIL } from './types/QueryWeatherDataTypes';
import { LOGIN_DATA_LOADING, LOGIN_DATA_SUCCESS, LOGIN_DATA_FAIL, LogInDispatchTypes } from './types/LoginActionTypes';
import { SIGNUP_DATA_LOADING, SIGNUP_DATA_FAIL, SIGNUP_DATA_SUCCESS, SignUpDispatchTypes } from './types/SignUpActionTypes';
import { USER_DATA_LOADING, USER_DATA_SUCCESS, USER_DATA_FAIL, UserDataDispatchTypes} from './types/UserDataActionTypes'
import { USERS_DATA_LOADING, USERS_DATA_SUCCESS, USERS_DATA_FAIL, UsersDataDispatchTypes} from './types/UsersDataActionTypes'
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





