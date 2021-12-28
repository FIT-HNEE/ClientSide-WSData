import * as React from 'react';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(() => ({

    WeatherIcon : {
  //display: 'block',
        height: '25px',
        width: '25px',
        margin: '0 auto'
    },    

    Wrapper: {      
        display: 'block',
        flexShrink: 0,        
        flexBasis: '14%',      
        padding: '10px',
        margin: '0px 5px',
        borderRadius: '6px',
        backgroundColor: '#343a40',
        "&:first-child": {
            marginLeft: 0
        },
        "&:last-child": {
            marginRight: 0
        }    
    },
    Results: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        padding: '40px 0',
        position: 'relative',
        top: '20px'
    },
    ForecastWrapper: {
        position: 'relative',
        display: 'flex',
        overflowY: 'hidden',
        marginTop: '20px',
        paddingBottom: '20px'
    },
    Text: {
        color: '#FFF',
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
         <div className={classes.ForecastWrapper}>
              <div className={classes.Wrapper} >
                  <span className={classes.Text}>{props.day}</span> 
                  <img className={classes.WeatherIcon} src={iconUrl} alt='' />   
                  <span className={classes.Text}>{props.temp}&deg;C</span>
              </div>              
        </div>
     </React.Fragment>

  )
};

export default Forecast;