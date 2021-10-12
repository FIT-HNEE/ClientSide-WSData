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
//import { History } from 'history';
/* interface ChildComponentProps {
  history : History
  
} */
/* interface HomeProps {
  history: RouteComponentProps["history"];
  location: RouteComponentProps['location'];
  match: RouteComponentProps['match'];
} */


interface WeatherDataCredentials {
    StationName?: string,
    StartDay?: string,
    EndDay?: string
}
 


class SearchData extends React.Component<RouteComponentProps, WeatherDataCredentials> {
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
  const response = await axios.post("http://localhost:4000/api/weatherData", {
    StationName: this.state.StationName,
    StartDay: this.state.StartDay,
    EndDay: this.state.EndDay,
  });
    const data = await response.data
  this.props.history.push({
    pathname: "/data",
    state: {
      WeatherData: data,
    },
  });
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
    {/* <MenuItem value={20}>Twenty</MenuItem>
    <MenuItem value={30}>Thirty</MenuItem> */}
  </Select>
            {/* <TextField        
              required
              label="StationName"
              type="text"                
              value={this.state.StationName}              
              onChange={(event) => this.setState({              
                StationName: event.target.value                
              })}              
            />     */}        
            <TextField              
              required              
              label="StartDay"              
              type="text"          
              value={this.state.StartDay}              
              onChange={(event) => this.setState({              
                StartDay: event.target.value                
              })}              
                    />
                    <TextField              
              required              
              label="StartDay"              
              type="text"          
              value={this.state.EndDay}              
              onChange={(event) => this.setState({              
                EndDay: event.target.value                
              })}              
            />
            <Button onClick={this.onButtonClick} variant='contained' color='primary'>Search Data</Button>
          </FormGroup>
        </div>        
      </Box>      
    )
  }  
}

export default withRouter(SearchData)