import React from 'react';
import DailyItems from './DailyItems';
import moment from "moment";
import Forecast from './Forecast';
import { makeStyles } from '@mui/styles';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import CircularProgress from '@mui/material/CircularProgress';
import Grid from '@mui/material/Grid';

const useStyles = makeStyles(() => ({   
    ForecastWrapper: {
        position: 'relative',
        display: 'flex',
        overflowY: 'hidden',
        marginTop: '20px',
        paddingBottom: '20px'
    }      
}));
interface IProps {      
  loading?: boolean
  error?: boolean  
  FWDType: []
}

const WeatherAPI: React.FC<IProps> = ({ FWDType, loading, error }) => {
    
    const classes = useStyles();
    
        return (
            <>                  
                {loading ?                    
                    <Grid                        
                        container                        
                        spacing={0}                        
                        direction="column"                        
                        alignItems="center"                        
                        justifyContent="center"
                    >                        
                        <Box>                            
                            <CircularProgress size={50} />                              
                        </Box>                        
                    </Grid>                        
                    : (error ?                        
                        <Alert severity="error">                             
                            <AlertTitle>Error</AlertTitle>                              
                            <Typography variant="body2">   
                                This is an error alert <br></br><br></br> <strong>As the data is coming from the https://openweathermap.org/api <br></br>                                    
                                    So there might be problem in API key or any other thing. <br></br>                                     
                                    Please contact the Admin for more information</strong><br></br><br></br>                                   
                            </Typography>                                   
                        </Alert>
                        : (FWDType.map((report: any, i: any) => {                            
                                
                            return (                    
                        
                                <React.Fragment>   
                                    <DailyItems                                
                                        key={i}
                                        city={report.lat}
                                        image={report.current.weather?report.current.weather[0].icon:[]}
                                        today={moment.unix(report.current.dt).format("dddd, MMMM Do")}
                                        todaysunrise={new Date(report.current.sunrise * 1000).toLocaleTimeString().slice(0, 4)}
                                        todaysunset={new Date(report.current.sunset * 1000).toLocaleTimeString().slice(0, 4)}
                                        todaytemp={Math.floor(report.current.temp * 1) / 1}
                                        todaydescription={report.current.weather?report.current.weather[0].description:[]}
                                        todayhighestTemp={Math.floor(report.current.temp * 1) / 1}
                                        todaylowestTemp={Math.floor(report.current.temp * 1) / 1}
                                        todayhumidity={report.current.sunset}                               
                                    />  
                                    
                                     <div className={classes.ForecastWrapper}>
                                        {report.daily.slice(1, 7).map((item: any, j: any) =>                                     
                                 
                                            <Forecast 
                                                key={j}                                    
                                                day={moment.unix(item.dt).format("ddd")}
                                                icon={item.weather[0].icon}
                                                temp={Math.floor(item.temp.day * 1) / 1}
                                            >
                                            </Forecast> 
                                )}
                                    </div>        
                                </React.Fragment>  
                            )   
                        })))  
                }       
            </>      
    )
}


export default WeatherAPI;