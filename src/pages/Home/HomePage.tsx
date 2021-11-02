import React from 'react'
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import axios from 'axios';
import Chart from 'chart.js/auto'

interface LastSevenDaysData {
    data: string[],
    header: null
}
export default class HomePage extends React.Component<LastSevenDaysData> {

    state = {
        data: [],
        header: {}
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
            const dateTime = str.substring(0, str.length-9);
            
            return (
                dateTime
            )
        })

        console.log('Date', Date)

        const temp = await data.map((dt: any) => {
            
            const luftTemp = dt.k4
           
            return (
                luftTemp                
            )
        })

        console.log('temp', temp)

        const temp1 = await data.map((dt: any) => {
            
            const luftTemp = dt.k3
           
            return (
                luftTemp                
            )
        })

        console.log('temp1', temp1)
            
        await new Chart(ctx, {
    
            type: 'line',
            
            data: {
        
                labels: Date,
                
                datasets: [{
            
                    label: '',
                    
                    data: temp,

                    fill: false,
                    borderColor: "#bae755",
                    borderDash: [5, 5],
                    backgroundColor: "#bae755",
                    pointBackgroundColor: "#bae755",
                    pointBorderColor: "#55bae7",
                    pointHoverBackgroundColor: "#bae755",
                    pointHoverBorderColor: "#55bae7",

                },                    
                    {                                
                        label: '',                        
                        data: temp1,
                        backgroundColor: "rgb(255,0,0)"
                    }]                
            },
            
            options: {
        
                scales: {
            
                    y: {
                
                        beginAtZero: false
                        
                    }                    
                }                
            }            
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
                        <Card >
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
