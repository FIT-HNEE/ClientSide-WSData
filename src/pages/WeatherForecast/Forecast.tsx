import * as React from 'react';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(() => ({

    WeatherIcon : {
        display: 'block',        
        height: '25px',
        width: '25px',
        margin: '0 auto',
        alignContent: 'center',
        alignSelf: 'center',
        alignItems: 'center',
        textAlign: 'center',
    },    

    Wrapper: {      
        //display: 'block',
        flexShrink: 0,        
        flexBasis: '10%',      
        padding: '10px',
        margin: '0px 5px',
        borderRadius: '6px',
        backgroundColor: '#8a807e',
        "&:first-child": {
            marginLeft: 0
        },
        "&:last-child": {
            marginRight: 0
        }    
    },    
    Text: {
        //color: '#FFF',
        display: 'block',
        fontSize: '10px',
        textAlign: 'center',
         "&:first-letter": {
            textTransform: 'uppercase'
        }
    }
    
}));

type WeatherForecastProps = {
    day: any;    
    temp: any;  
    icon: any    
}

const Forecast: React.FC<WeatherForecastProps> = (props) => {
      const classes = useStyles();

  const iconUrl = `https://openweathermap.org/img/w/${props.icon}.png`

  return (
      <React.Fragment>
        
              <div className={classes.Wrapper} >
                  <span className={classes.Text}>{props.day}</span> 
                  <img className={classes.WeatherIcon} src={iconUrl} alt='' />   
                  <span className={classes.Text}>{props.temp}&deg;C</span>
              </div>              
        
     </React.Fragment>

  )
};

export default Forecast;