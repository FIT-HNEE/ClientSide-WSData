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
        this.chart()
    }

    chart = async () => {

        const canvas = document.getElementById('myChart') as HTMLCanvasElement;        
        const ctx: any = canvas.getContext('2d');
        const data = this.state.data.WeatherData.data
        const header = this.state.data.WeatherData.header
        console.log('data', this.state.data.WeatherData)
        //console.log('data',this.props)

        const Date = await data.map((dt: any) => {
            
            const str = dt.dateTime            
             const date = moment(str).format('Do MMM YY, h a')
            return (
                date
            )
        })

        const temp = await data.map((dt: any) => {
            
            const luftTemp = dt.k4
           
            return (
                luftTemp                
            )
        })

        const temp1 = await data.map((dt: any) => {
            
            const luftTemp = dt.k3
           
            return (
                luftTemp                
            )
        })
            
        await new Chart(ctx, {
    
            type: 'line',
            
            data: {
        
                labels: Date,
                
                datasets: [{
            
                    label: header.k4,
                    
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
                        label: header.k3,                        
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
        <div className="chart-container" style={{position: "relative", height: '40vh', width: '80vw'}}  >            
            <canvas id="myChart"></canvas>
        </div>
    )
}}

export default Figures
