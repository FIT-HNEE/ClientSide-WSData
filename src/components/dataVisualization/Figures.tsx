import React from 'react'
import { RouteComponentProps } from 'react-router-dom';
import Chart from 'chart.js/auto'
import moment from 'moment'

interface IDataProps {
  data: any;
}

class Figures extends React.Component <RouteComponentProps,IDataProps >{
   constructor(props:RouteComponentProps) {
        super(props);
        this.state = {
            data: this.props.location.state,
            
        };
    }

    componentDidMount = () => {
        this.thetaChart()
        this.luftTempChart()
    }

    luftTempChart = async () => {
        const canvas = document.getElementById('luftTemp') as HTMLCanvasElement;        
        const ctx: any = canvas.getContext('2d');
        const data = this.state.data.WeatherData.data
        const header = this.state.data.WeatherData.header
        console.log('data', this.state.data.WeatherData)
        //console.log('data',this.props)

        const Date = await data.map((dt: any) => {            
            const str = dt.dateTime            
            const date = moment(str).format('Do MMM YY, h a')            
            return date
        })
// FOr Luft Temperature
        const lufttemp_o = await data.map((dt: any) => dt.k4)
        const lufttemp_u = await data.map((dt: any) => dt.k3)
// FOr Luft Temperature            
        const luftTemp = await new Chart(ctx, {
    
            type: 'line',
            
            data: {
        
                labels: Date,
                
                datasets: [{
            
                    label: header.k4,
                    
                    data: lufttemp_o,

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
                        label: header.k3,                        
                        data: lufttemp_u,
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
        return (luftTemp)
    }

    thetaChart = async () => {

        const canvas = document.getElementById('myChart') as HTMLCanvasElement;        
        const ctx: any = canvas.getContext('2d');
        const data = this.state.data.WeatherData.data
        const header = this.state.data.WeatherData.header
        console.log('data', this.state.data.WeatherData)
        //console.log('data',this.props)

        const Date = await data.map((dt: any) => {            
            const str = dt.dateTime            
            const date = moment(str).format('Do MMM YY, h a')            
            return date
        })

//FOr Soil Water Content
        const theta_10 = await data.map((dt: any) => dt.k11)
        const theta_25 = await data.map((dt: any) => dt.k12)
        const theta_55 = await data.map((dt: any) => dt.k13)
        const theta_115 = await data.map((dt: any) => dt.k14)
        
        const theta = await new Chart(ctx, {    
            type: 'line',            
            data: {        
                labels: Date,                
                datasets: [
                    {       
                        label: header.k11,                        
                        data: theta_10,                    
                        backgroundColor: "#bae755",
                    
                    }, 
                    {   
                        label: header.k12, 
                        data: theta_25,
                        backgroundColor: "rgb(0,0,255)"
                    },
                    {   
                        label: header.k13, 
                        data: theta_55,
                        backgroundColor: "rgb(255,0,0)"
                    },
                    {   
                        label: header.k14, 
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
    }
    
    render() {

    return (
        <div className="chart-container" style={{ position: "relative", height: '40vh', width: '80vw' }}  >  
            <h1>Surface Air Temperature</h1>    
            <canvas id="luftTemp"></canvas>
            <br></br>
            <br></br>
            <h1>Soil Moisture Contents at Different Depths</h1> 
            <canvas id="myChart"></canvas>
        </div>
    )
}}

export default Figures
