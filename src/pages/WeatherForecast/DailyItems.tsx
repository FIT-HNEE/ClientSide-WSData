import * as React from 'react';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

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
  const iconUrl = `https://openweathermap.org/img/w/${props.image}.png`

  return (
      <React.Fragment>
       
      <Container maxWidth="sm">
        <h4 style={{ textAlign: 'center', color: '#FFF', paddingTop: '5px' }} >{props.city}</h4>
      <Typography fontSize="10px" align='center' >{props.today}</Typography>
      
          <Typography fontSize="10px">Sunrise: {props.todaysunrise} AM</Typography>
          <Typography fontSize="10px">Sunset: {props.todaysunset} PM</Typography>
      
          <Typography fontSize="16px" color='#0000FF' > {props.todaydescription} </Typography>
        
          <img src={iconUrl} alt='' />
          <Typography align="center" color='#FFF'>{props.todaytemp}&deg;C</Typography>

        
        </Container>
     </React.Fragment>

  )
};

export default DailyItems;