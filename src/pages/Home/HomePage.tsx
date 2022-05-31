import React from 'react'
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Chart from 'chart.js/auto'
import moment from 'moment'
import {connect} from "react-redux";
import {GetPWData, GetFWData, GetLocationData} from '../../actions/Actions'
import WeatherAPI from '../WeatherForecast/WeatherAPI';
//import GoogleMapReact from 'google-map-react'

//import CircularProgress from '@mui/material/CircularProgress';
//import Alert from '@mui/material/Alert';
//import AlertTitle from '@mui/material/AlertTitle';
//import Box from '@mui/material/Box';
import Loading from '../../components/Loading';
import ErrorComponent from '../../components/ErrorComponent';
import Map from "../../components/Map/Map";
import { Link } from '@mui/material';
//import { Icon } from '@iconify/react'
//import locationIcon from '@iconify/icons-mdi/map-marker'

interface LastSevenDaysWeatherProps {
    GetPWData: Function
    GetFWData: Function
    GetLocationData: Function
    PWDloading: boolean
    PWDerror: boolean
    FWDError: boolean
    FWDLoading: boolean
    Location: {
      LocationType: {
          latitude: number;
        longitude: number;
        locationName: string;
        }
    }
    PWDType: {
        
        data: string[]
        error: string 
        header: {        
            k11: '' 
            k12: ''
            k13: ''
            k14: ''
        }        
    } 
    FWDType: []
}

const cardStyle = {
    display: 'block',    
    transitionDuration: '0.3s',
    height: '45vw',
    margin: '20px'
}

//const LocationPin = ({ text: any }) => <div>{text}</div>;
class HomePage extends React.Component<LastSevenDaysWeatherProps> {

    componentDidMount = async () => {
        await this.props.GetLocationData()
        await this.props.GetPWData()       
        await this.props.GetFWData()        
        await this.chart()
        await console.log(this.props.Location, 'PROPS')
    }
    
    chart = async () => {              
                         
        const data = this.props.PWDType ? this.props.PWDType.data : [] 
         const canvas = document.getElementById('myChart') as HTMLCanvasElement;        
        const ctx: any = canvas.getContext('2d');
        
        //const header = this.props.PWDType ? this.props.PWDType.header : {}

        const k11 = this.props.PWDType ? this.props.PWDType.header.k11 : ''
        const k12 = this.props.PWDType ? this.props.PWDType.header.k12 : ''
        const k13 = this.props.PWDType ? this.props.PWDType.header.k13 : ''
        const k14 = this.props.PWDType ? this.props.PWDType.header.k14 : ''

        const theta_10 = await data.map((dt: any) => dt.k11)
        const theta_25 = await data.map((dt: any) => dt.k12)
        const theta_55 = await data.map((dt: any) => dt.k13)
        const theta_115 = await data.map((dt: any) => dt.k14)

        const Date = await data.map((dt: any) => {                
            const str = dt.dateTime     
            //const dateTime = str.substring(0, str.length-9);                
            const date = moment(str).format('Do MMM YY')            
            return (                                 
                date                            
            )                         
        })    
        
        const theta = await new Chart(ctx, {    
            type: 'line',            
            data: {        
                labels: Date,                
                datasets: [
                    {       
                        label: k11,                        
                        data: theta_10,                    
                        backgroundColor: "#bae755",
                    
                    }, 
                    {   
                        label: k12, 
                        data: theta_25,
                        backgroundColor: "rgb(0,0,255)"
                    },
                    {   
                        label: k13, 
                        data: theta_55,
                        backgroundColor: "rgb(255,0,0)"
                    },
                    {   
                        label: k14, 
                        data: theta_115,
                        backgroundColor: "rgb(0,128,0)"
                    }

                ]                
            },
            options: {
                scales: {
                    y: {                
                        beginAtZero: false                        
                    }                    
                }                
            }            
        });
        return (theta)

            
        //console.log('Date', Date)

       
                
    }    

    render() {        

        return (
            <>               
                <Grid container spacing={5} >
                    <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                        {/* {console.log('STATE', this.props)} */}
                        <Card sx={{ minWidth: 275 }}>                            
                                <div className="map">
                                    <h2 style={{textAlign:'center'}}>Micro Climatic Weather Station</h2>

                                    <div className="google-map">
                                    <Map Location = {this.props.Location} />
                                    </div>
                                </div>      
                        </Card>                        
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                        <Card sx={{ minWidth: 275 }} style={{ height: '370px', paddingBottom: '0px', marginTop: '0px'}}>
                            
                            <CardContent>
                                {console.log('FWDType', this.props.FWDType)}
                                <WeatherAPI
                                    FWDType={this.props.FWDType ? this.props.FWDType : []}
                                    loading={this.props.FWDLoading}
                                    error={this.props.FWDError}                                    
                                />
                            </CardContent>
                            <CardActions style={{ paddingBottom: '0px', marginTop: '35px', marginBottom: '0px'}}>                                
                                <p style={{ textAlign: 'center' }}>
                                    SOURCE:                                    
                                    <a target="_blank" rel="noopener noreferrer" href="https://openweathermap.org/api">
                                        OpenWeatherAPI
                                    </a>                                    
                                </p>

                            </CardActions>
                            </Card>
                    </Grid>

                    <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>

                        <Card style={cardStyle}>                           
                            {this.props.PWDloading ?
                                <Loading /> :
                                (this.props.PWDType ?
                                    <div className="chart-container" style={{ position: "relative", height: '40vh', width: '80vw' }}  >            
                                    <canvas id="myChart"></canvas>
                                    </div> :                                        
                                    <ErrorComponent                                        
                                        ErrorText={` This is an error alert <br></br><br></br> <strong>As the data is coming from the https://logstar-online.de <br></br>                                        
                                                So there might be problem in API key or any other thing. <br></br>
                                                Please contact the Admin for more information</strong><br></br><br></br>`} />                                      
                                )
                            }  
                            
                        </Card>
                        <CardActions>                                
                                    <h4 style={{ textAlign: 'center' }}>SOURCE:                                    
                                    <a target="_blank" rel="noopener noreferrer" href="https://www.upgmbh.com/">
                                        UP Umweltanalytische Produkte GmbH - Weather Station API
                                    </a>                                    
                                </h4>
                            </CardActions>
                    </Grid>

                    <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                        <Card sx={{ minWidth: 275 }}>
                            <CardContent>
                                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                Word of the Day
                                </Typography>
                                <Typography variant="h5" component="div">
                                BBBBBB
                                </Typography>
                                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                adjective
                                </Typography>
                                <Typography variant="body2">
                                well meaning and kindly.
                                <br />
                                {'"a benevolent smile"'}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small">Learn More</Button>
                            </CardActions>
                            </Card>
                    </Grid>
                </Grid>                
            </>            
        )
    }
}

const mapStateToProps = (state: any) => ({
    PWDType: state.PWdata.PWDType,
    FWDType: state.FWdata.FWDType,
    Location: state.Location,
    ...state,
    PWDloading: state.PWdata.loading,
    PWDerror: state.PWdata.error, 
    FWDError: state.FWdata.error,
    FWDLoading:state.FWdata.loading
})

export default connect(mapStateToProps, {GetFWData, GetPWData, GetLocationData })(HomePage);