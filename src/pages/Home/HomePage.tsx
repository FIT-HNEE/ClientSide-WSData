import React from 'react'
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import axios from 'axios';
import Chart from 'chart.js/auto'

interface ILABELDATA {
    k3?: string
}

interface LastSevenDaysData {
    data: string[],
    header: ILABELDATA
}

var cardStyle = {
    display: 'block',
    
    transitionDuration: '0.3s',
    height: '45vw'
}
export default class HomePage extends React.Component<LastSevenDaysData> {

    state = {
        data: [],
        header: {
            k3: '',
            k4: ''
        }
    }

    componentDidMount = async() => {
        await this.fetchData()
        await this.chart()
    }

    fetchData = async() => {
        const response = await axios.get("http://localhost:4000/api/weatherData/lastSevenDays");
        const data = await response.data
        return this.setState({
            data: data.data,
            header: data.header
        })
    }

    chart = async () => {

        const canvas = document.getElementById('myChart') as HTMLCanvasElement;        
        const ctx: any = canvas.getContext('2d');
        const data = this.state.data
        const header = this.state.header
        console.log('data', this.state.data)
        console.log('header', this.state.header)

        const Date = await data.map((dt: any) => {
            
            const str = dt.dateTime
            //const dateTime = str.substring(0, str.length-9);
            
            return (
                str
            )
        })

        console.log('Date', Date)

        const surfaceAirTempUpper = await data.map((dt: any) => {
            
            const surfaceAirTemp = dt.k3
           
            return (
                surfaceAirTemp                
            )
        })

        console.log('surfaceAirTemp', surfaceAirTempUpper)

        const surfaceAirTempLower = await data.map((dt: any) => {
            
            const surfaceAirTemp = dt.k4
           
            return (
                surfaceAirTemp                
            )
        })        

        console.log('surfaceAirTemp1', surfaceAirTempLower)
            
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
                            text: 'Chart with Tick Configuration'
                        }
                        },
                        scales: {
                            x: {
                            
                                ticks: {
                                    autoSkip: false,
                                    //maxTicksLimit: 8,
                                    maxRotation: 90,
                                    callback: function (val: any, index) {
                                // Hide the label of every 2nd dataset
                                return index % 96 === 0 ? this.getLabelForValue(val) : '';
                                    },
                                    color: 'red',
                                }                            
                        }
                        }
                },           
        });        
    }
    render() {
        return (
            <>
                <Grid container spacing={5} >

                    <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                        {console.log('data', this.state.data)}
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
