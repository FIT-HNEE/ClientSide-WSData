import * as React from 'react';
import { makeStyles } from '@mui/styles';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

import {
  createTheme,
  responsiveFontSizes,
  ThemeProvider,
} from '@mui/material/styles';

let theme = createTheme();
theme = responsiveFontSizes(theme);

const useStyles = makeStyles(() => ({
  WeatherIcon : {
  //display: 'block',
  height: '70px',
  width: '70px',
  margin: '0 auto'
  },
  Wrapper: {
    flexShrink: 0,
    padding: '0px',
    margin: '0px',
    borderRadius: '6px',
    backgroundColor: '#343a40',
    "&:first-child": {
         marginLeft: 0
    },
    "&:last-child": {
         marginRight: 0
    }    
  },

  
}));

type WeatherProps = {
  today: any;
  city: any;
    image: any
    todaysunrise: any
    todaysunset: any
    todaytemp: any
  todaydescription: any
  todayhighestTemp: any
  todaylowestTemp: any
  todayhumidity: any
} 

const DailyItems: React.FC<WeatherProps> = (props) => {
      const classes = useStyles();

  const iconUrl = `https://openweathermap.org/img/w/${props.image}.png`

  return (
      <React.Fragment>
      <ThemeProvider theme={theme}>        
        <Typography variant="h5" align='center'>Eberswalde,{props.today}</Typography>
       <br></br> 
        <br></br>
        <br></br> 
        
        <Grid container spacing={2}>          
          <Grid item xs={8}>        
            <Typography sx={{ mt: 2, mb: 0, pb:0 }} variant="body2" color="text.secondary">Sunrise: {props.todaysunrise} AM</Typography>
            <Typography sx={{ mb: 1.5, pt:0 }} variant="body2" color="text.secondary">Sunset: {props.todaysunset} PM</Typography>      
            <Typography variant="h5" color='#0000FF' > {props.todaydescription} </Typography>      
          </Grid>  
          
          <Grid item xs={4}>            
            <img className={classes.WeatherIcon} src={iconUrl} alt='' />
             <Typography variant="h5" color='#0000FF' >{props.todaytemp}&deg;C</Typography>
          </Grid>          
        </Grid>

        </ThemeProvider>
     </React.Fragment>
  )
};

export default DailyItems;