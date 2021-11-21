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
import { connect } from 'react-redux';
import { GetQWData } from '../../actions/Actions'
interface WeatherDataCredentials{  
  StationName?: string,  
  StartDay?: any,  
  EndDay?: any,
  
}

interface Props {  
  dispatch?: any;
  loading?: boolean
  error?: boolean  
  QWDType?: {
    data: string[]    
    header: {},
    error: string        
    }  
}
class WeatherDataFetching extends React.Component<RouteComponentProps&Props, WeatherDataCredentials> {

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
    const { StationName, StartDay, EndDay } = this.state;    
    await this.props.dispatch(GetQWData(StationName, StartDay, EndDay));
    
    console.log('Data Error', this.props.QWDType?.error)
    console.log('Data', this.props.QWDType)
    console.log('loading', this.props.loading)    
    console.log('error', this.props.error)
    const data = this.props.QWDType
    const error = this.props.error
    const loading = this.props.loading
    const dataError = this.props.QWDType?.error


    if (error || dataError ) {
      console.log(' Error undefined', error, dataError )
    } else if (loading) {
      console.log(' Loading', loading)
    } else {

      var element = event.target as HTMLElement    

    if (element.id === 'download') {      

    this.props.history.push({    
      pathname: "/WeatherData",      
      state: {      
        WeatherData: data,        
      },      
    });
      
    } else if (element.id === 'charts') {

      this.props.history.push({    
      pathname: "/figures",      
      state: {      
        WeatherData: data,        
      },      
    });

    } else {      
      await arrayToExcel.convertArrayToTable(data, `${this.state.StartDay}TO${this.state.EndDay}`)      
      }
      
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
            <Button id="download" onClick={this.onButtonClick} variant='contained' color='primary'>Search Data</Button>

            <Button onClick={this.onButtonClick} variant='contained' color='primary'>Download Data</Button>
            <Button id="charts" onClick={this.onButtonClick} variant='contained' color='primary'>Figures</Button>
          </FormGroup>
        </div>        
      </Box>      
    )
  }  
}

const mapStateToProps = (state: any) => ({
    QWDType: state.dataQWD.QWDType,
    ...state,
    loading: state.dataQWD.loading,
    error: state.dataQWD.error  
})

const connectedPage = connect(mapStateToProps)(WeatherDataFetching);
 
export default withRouter(connectedPage)