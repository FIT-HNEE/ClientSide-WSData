import React, { Component } from 'react';
import CardContent from '@mui/material/CardContent';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const API_KEY = '880f9563f0dbc01b527c700210129732'
const UNITS = "Metric"
const LANG = "en"

export default class WeatherAPI extends Component {
    state = {
        weatherReport: {
            lat: "",
            lon: "",
            timezone: ""
            },
            isLoading : true,
            error : null
    }  
    
    componentDidMount() {
    var URL = "https://api.openweathermap.org/data/2.5/onecall?lat=52.83492&lon=13.81951&exclude=hourly&appid=880f9563f0dbc01b527c700210129732"
    fetch(URL).then(response =>{
        if(response.ok) {return response.json() }
        else { throw new Error("SOMETHING WENT WRONG")}})
            .then(data => this.setState(
                { weatherReport : data,
                    isLoading: false }))
            .catch(error => this.setState( {error, isLoading : true }));
    }
    render() {
        return (
            <>
                <CardContent>                    
                <Box display="flex" flexDirection="row">
                    <Box p={1}>
                        <Typography variant="h2" color="textPrimary">
                        {this.state.weatherReport.timezone}
                        </Typography>
                        <Typography variant="caption" color="textSecondary">
                        {this.state.weatherReport.lat}, {this.state.weatherReport.lon}
                        </Typography>
                    </Box>
                    </Box>
                </CardContent>

                <CardContent>
                        <Box display="flex" flexDirection="row-reverse">
                        <Box p={0}>
                            <Typography variant="h4" color="textPrimary">
                            Temp: 
                            <span>&#176;</span>
                            {"C"}
                            </Typography>
                        </Box>
                        </Box>
                    </CardContent>
                    <CardContent>
                        <Box display="flex" flexDirection="row-reverse">
                        <Box p={0}>
                            <Typography variant="h6" color="textSecondary">
                            
                            </Typography>
                        </Box>
                        </Box>
                    </CardContent>
                    <CardContent>
                        <Box display="flex" flexDirection="row">
                        <Box p={1}>
                            <Typography variant="h6" color="textPrimary">
                            Humidity: 
                            </Typography>
                        </Box>
                        <Box p={1}>
                            <Typography variant="h6" color="textPrimary">
                            pressure:  pa
                            </Typography>
                        </Box>
                        <Box p={1}>
                            <Typography variant="h6" color="textPrimary">
                            wind:  km/h
                            </Typography>
                        </Box>
                        </Box>
                    </CardContent>
            </>
            
        )
    }
}
