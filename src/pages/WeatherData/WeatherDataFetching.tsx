import axios from 'axios';
import React from 'react';
import { RouteComponentProps, withRouter  } from 'react-router-dom';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Box from '@mui/material/Box';
import FormGroup from '@mui/material/FormGroup';
import Select from '@mui/material/Select';
import DateAdapter from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DesktopDatePicker from '@mui/lab/DesktopDatePicker';
import Stack from '@mui/material/Stack';
import moment from 'moment'
import { parseISO } from 'date-fns/esm';
//import fileDownload from 'js-file-download'
import { arrayToExcel } from '../../components/ArraytoExcel'

interface WeatherDataCredentials {
    StationName?: string,
    StartDay?: any,
    EndDay?: any
}
 
class WeatherDataFetching extends React.Component<RouteComponentProps, WeatherDataCredentials> {

  constructor(props: RouteComponentProps) {
      
    super(props)
    
    
    this.state = {
          
      StationName: '',
      
      StartDay: '',
        
      EndDay: ''
        
    }  
        
  }
  
    
  onButtonClick = async (event: React.FormEvent) => {

    event.preventDefault();
    var element = event.target as HTMLElement

    if (element.id !== 'download') {
      const response = await axios.post("http://localhost:4000/api/weatherData", {
    
      StationName: this.state.StationName,      
      StartDay: this.state.StartDay,    
      EndDay: this.state.EndDay,
    
    });
    
    const data = await response.data

    this.props.history.push({    
      pathname: "/WeatherData",      
      state: {      
        WeatherData: data,        
      },      
    });
    } else {
      const response = await axios.post("http://localhost:4000/api/weatherData", {
    
      StationName: this.state.StationName,      
      StartDay: this.state.StartDay,    
      EndDay: this.state.EndDay,    
      })
      const data = await response.data
        await arrayToExcel.convertArrayToTable(data, `${this.state.StartDay}TO${this.state.EndDay}`)
    }    
  };  

  render() {    
    return (
      <Box        
        component="form"
        sx={{
          '& .MuiTextField-root': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
      >        
        <div>
          <h3>Weather Data Search</h3>
          
          <FormGroup >            
            <InputLabel id="demo-simple-select-label">Station Name</InputLabel>
            <Select              
              value={this.state.StationName}              
              label="Station Name"              
              onChange={(event) => this.setState({      
                StationName: event.target.value                
              })}
            >              
              <MenuItem value="Buche">Buche</MenuItem>    
            </Select>

            <LocalizationProvider dateAdapter={DateAdapter}>
              <Stack spacing={3}>
                <DesktopDatePicker                  
                  //openTo="year"
                  //views={["year", "month", "day"]}
                  label="Start Date"
                  //inputFormat="dd/MM/yyyy"
                  value={this.state.StartDay}
                  disableFuture={true}
                  onChange={(date: any) => {
                  this.setState({
                    StartDay: moment(date).format('YYYY-MM-DD')   
                  });  
                  }}                  
                  renderInput={(params) => <TextField {...params} />}
                />
                <DesktopDatePicker                  
                  //openTo="year"
                  //views={["year", "month", "day"]}
                  label="End Date"                  
                  //inputFormat="MM/dd/yyyy"                  
                  disableFuture={true}
                  value={this.state.EndDay}
                  onChange= {(date: any) => {
                  this.setState({                   
                    EndDay: moment(date).format('YYYY-MM-DD')
                    
                  });                    
                  }}
                  minDate= {parseISO(this.state.StartDay)}
                  renderInput={(params) => <TextField {...params} />}
                />
               </Stack>
            </LocalizationProvider>   
            <Button onClick={this.onButtonClick} variant='contained' color='primary'>Search Data</Button>

            <Button id="download" onClick={this.onButtonClick} variant='contained' color='primary'>Download Data</Button>
          </FormGroup>
        </div>        
      </Box>      
    )
  }  
}

export default withRouter(WeatherDataFetching)