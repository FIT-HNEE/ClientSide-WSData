import React, { Component } from 'react';
import DailyItems from './DailyItems';
import moment from "moment";
import { makeStyles } from '@mui/styles';


export default class WeatherAPI extends Component {      

    state = {
        weatherReport: [],
        isLoading : true,
        error: null,        
        
    }  
    componentDidMount() {
    var URL = "http://localhost:4000/api/weatherData/forecast"
    fetch(URL).then(response =>{
        if(response.ok) {return response.json() }
        else { throw new Error("SOMETHING WENT WRONG")}})
        .then(data =>{
            console.log('Data', data)
            
            this.setState(
                {
                    weatherReport: data,
                    isLoading: false
                })
        console.log('weatherReport', this.state.weatherReport)
        }
        )
            .catch(error => this.setState( {error, isLoading : true }));
    }
    render() {
        return (
            <>  
                {this.state.weatherReport.map((report: any, i: any) => {
                                
                    return (                                    
                        <React.Fragment>                               
                            <DailyItems                                
                                key={i}
                                city={report.lat}
                                image={report.current.weather[0].icon}
                                today={moment.unix(report.current.dt).format("dddd, MMMM Do")}
                                todaysunrise={new Date(report.current.sunrise * 1000).toLocaleTimeString().slice(0, 4)}
                                todaysunset={new Date(report.current.sunset * 1000).toLocaleTimeString().slice(0, 4)}
                                todaytemp={Math.floor(report.current.temp * 1) / 1}
                                todaydescription={report.current.weather[0].description}
                                todayhighestTemp={Math.floor(report.current.temp * 1) / 1}
                                todaylowestTemp={Math.floor(report.current.temp * 1) / 1}
                                todayhumidity={report.current.sunset}                               
                            />                              
                        </React.Fragment>                        
                    )                   
                })                    
                }                         
            </>            
        )
    }
}
