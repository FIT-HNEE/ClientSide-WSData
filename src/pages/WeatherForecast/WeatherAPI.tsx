import React from 'react';
import DailyItems from './DailyItems';
import moment from "moment";
import Forecast from './Forecast';
import { makeStyles } from '@mui/styles';


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
  FWDType?: []
}

const WeatherAPI: React.FC<IProps> = (props) => {
      const classes = useStyles();
        return (
            <>  
                {
                    props.FWDType ?  
                    props.FWDType?.map((report: any, i: any) => {
                                
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
                })  : 'not'                  
                }                         
            </>            
        )
   // }
}

export default WeatherAPI;