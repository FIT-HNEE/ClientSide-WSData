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
import {GetPWData} from '../../actions/Actions'

interface LastSevenDaysWeatherProps {
    GetPWData: Function
    loading: boolean
    error: boolean
    PWDType: {
        data: string[]
        error: string 
        header: {        
            k1: '' 
            k2: ''
            k3: ''
            k4: ''
        }        
    }  
}

const cardStyle = {
    display: 'block',    
    transitionDuration: '0.3s',
    height: '45vw'
}
class HomePage extends React.Component<LastSevenDaysWeatherProps> {

    componentDidMount = async () => {
        await this.props.GetPWData()        
        await this.chart()
    }
    
    chart = async () => {
        const canvas = document.getElementById('myChart') as HTMLCanvasElement;        
        const ctx: any = canvas.getContext('2d');
        const dataArray = this.props.PWDType.data
        const header = this.props.PWDType.header
        const dataError = this.props.PWDType.error
        const error = this.props.error
        const loading = this.props.loading
        
        console.log('data', dataArray)
        console.log('header', header)
        console.log('loading', this.props.loading)
        console.log('error', this.props.error)

        if (error || dataError) {
            
            console.log(' Error undefined', error, dataError)            
        } else if (loading) {
            
            console.log(' Loading', loading)            
        } else {

            const Date = await dataArray.map((dt: any) => {
                const str = dt.dateTime       
            //const dateTime = str.substring(0, str.length-9);
                
                const date = moment(str).format('Do MMM YY')                
                return (                
                    date                    
                )                
            })
            

        //console.log('Date', Date)

            const surfaceAirTempUpper = await dataArray.map((dt: any) => {            
            
                const surfaceAirTemp = dt.k3    
                return (                
                    surfaceAirTemp                    
                )                
            })
            

        //console.log('surfaceAirTemp', surfaceAirTempUpper)

            const surfaceAirTempLower = await dataArray.map((dt: any) => {            
            
                const surfaceAirTemp = dt.k4 
                return (                
                    surfaceAirTemp                    
                )                
            })            

        //console.log('surfaceAirTemp1', surfaceAirTempLower)
            
            await new Chart(ctx, {
                
                type: 'line',    
                data: {         
                    labels: Date, 
                    datasets: [{  
                        label: `${header.k3}`,   
                        data: surfaceAirTempUpper,  
                        fill: false,                    
                        backgroundColor: "#bae755",    
                    },
                        
                    {                                
                        label: `${header.k4}`,                        
                        data: surfaceAirTempLower,
                        backgroundColor: "rgb(255,0,0)"

                        }]                   
                },               
                options: {               
                    responsive: true,                    
                    plugins: {                            
                        title: {
                            display: true,
                            text: `Chart for ${header.k3} & ${header.k4} `
                        }
                    },
                    
                    scales: {                            
                        x: {                        
                            grid: {                                    
                                display: false,
                            },                            
                            ticks: {                                    
                                autoSkip: false,                                
                                    //maxTicksLimit: 8,                                
                                align: 'start',                                    
                                maxRotation: 0,                                    
                                minRotation: 0,                                    
                                    //crossAlign: 'far',                                
                                callback: function (val: any, index) {                                        
                                // show the label of every 95th element in date labels
                                    return index % 96 === 0 ? this.getLabelForValue(val) : '';
                                    
                                },                                
                                color: 'blue',                                    
                            }                            
                        }
                    }                    
                },                
            });            
        }        
    }

    render() {

        return (
            <>
               
                <Grid container spacing={5} >

                    <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                        {console.log('STATE', this.props)}
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

                    <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                        <Card style={cardStyle}>
                            <div className="chart-container" style={{position: "relative", height: '40vh', width: '80vw'}}  >            
                                    <canvas id="myChart"></canvas>
                                </div>
                            </Card>
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
    PWDType: state.dataPWD.PWDType,
    ...state,
    loading: state.dataPWD.loading,
    error: state.dataPWD.error  
})

export default connect(mapStateToProps, { GetPWData })(HomePage);