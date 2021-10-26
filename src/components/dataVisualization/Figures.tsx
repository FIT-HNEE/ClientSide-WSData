import React from 'react'
import { RouteComponentProps } from 'react-router-dom';
import Chart from 'chart.js/auto'
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
        console.log('data', this.state.data.WeatherData)
        //console.log('data',this.props)

        const Date = await data.map((dt: any) => {
            
            const dateTime = dt.dateTime            
            
            return (
                dateTime
            )
        })

        const temp = await data.map((dt: any) => {
            
            const luftTemp = dt.k4
           
            return (
                luftTemp                
            )
        })
            
        await new Chart(ctx, {
    
            type: 'line',
            
            data: {
        
                labels: Date,
                
                datasets: [{
            
                    label: 'Lufttemp_o - °C',
                    
                    data: temp,
            
                    borderWidth: 1
            
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
        <div>
            <h1> Hello </h1>
            <canvas {...this.props} id="myChart" width="200" height="200"></canvas>
        </div>
    )
}}

export default Figures
