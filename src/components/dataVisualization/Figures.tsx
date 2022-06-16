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
        this.pFChart()
        this.soilTempChart()
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
                plugins: {                            
                                title: {
                                    display: true,
                                    text: `Air Temperature at 200 cm (${header.k4})  & 10 cm (${header.k3}) `,
                                    font: {
                                        size: 30
                                    }                            
                                }
                                
                        },
                scales: {
            
                    y: {
                
                        beginAtZero: false
                        
                    }                    
                }                
            }            
        });
        return (luftTemp)
    }

    soilTempChart = async () => {

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

//FOr Soil Temp
        const soilTemp_10 = await data.map((dt: any) => dt.k15)
        const soilTemp_25 = await data.map((dt: any) => dt.k16)
        const soilTemp_55 = await data.map((dt: any) => dt.k17)
        const soilTemp_115 = await data.map((dt: any) => dt.k18)
        
        const soilTemp = await new Chart(ctx, {    
            type: 'line',            
            data: {        
                labels: Date,                
                datasets: [
                    {       
                        label: header.k15,                        
                        data: soilTemp_10,                    
                        backgroundColor: "#bae755",
                    
                    }, 
                    {   
                        label: header.k16, 
                        data: soilTemp_25,
                        backgroundColor: "rgb(0,0,255)"
                    },
                    {   
                        label: header.k17, 
                        data: soilTemp_55,
                        backgroundColor: "rgb(255,0,0)"
                    },
                    {   
                        label: header.k18, 
                        data: soilTemp_115,
                        backgroundColor: "rgb(0,128,0)"
                    }

                ]                
            },
            options: {
                plugins: {                            
                        title: {
                            display: true,
                            text: `Soil Temp Chart at ${header.k15} ${header.k16} ${header.k17} & ${header.k18} `,
                            font: {
                                size: 30
                            }                            
                        }
                        
                },
                scales: {
                    y: {                
                        beginAtZero: false                        
                    }                    
                }                
            }            
        });
        return (soilTemp)
    }

    pFChart = async () => {

        const canvas = document.getElementById('pF') as HTMLCanvasElement;        
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

//FOr pF
        const pF_10 = await data.map((dt: any) => dt.k19)
        const pF_25 = await data.map((dt: any) => dt.k20)
        const pF_55 = await data.map((dt: any) => dt.k21)
        const pF_115 = await data.map((dt: any) => dt.k22)
        
        const pF = await new Chart(ctx, {    
            type: 'line',            
            data: {        
                labels: Date,                
                datasets: [
                    {       
                        label: header.k19,                        
                        data: pF_10,                    
                        backgroundColor: "#bae755",
                    
                    }, 
                    {   
                        label: header.k20, 
                        data: pF_25,
                        backgroundColor: "rgb(0,0,255)"
                    },
                    {   
                        label: header.k21, 
                        data: pF_55,
                        backgroundColor: "rgb(255,0,0)"
                    },
                    {   
                        label: header.k22, 
                        data: pF_115,
                        backgroundColor: "rgb(0,128,0)"
                    }

                ]                
            },
            options: {
                plugins: {                            
                        title: {
                            display: true,
                            text: `Soil Matric Potential at ${header.k19} ${header.k20} ${header.k21} & ${header.k22} `,
                            font: {
                                size: 30
                            }                            
                        }
                        
                },
                scales: {
                    y: {                
                        beginAtZero: false                        
                    }                    
                }                
            }            
        });
        return (pF)
    }
    
    render() {

    return (
        <div className="chart-container" style={{ position: "relative", height: '40vh', width: '80vw' }}  >  
             
            <canvas id="luftTemp"></canvas>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <canvas id="myChart"></canvas>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <canvas id="pF"></canvas>
            <br></br>
            <br></br>
        </div>
    )
}}

export default Figures
