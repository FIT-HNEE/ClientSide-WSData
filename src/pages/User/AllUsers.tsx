import React from 'react';
import axios from 'axios';
import { Button } from 'react-bootstrap';

/* interface IUSERS {
    data?: Array<any>
} */

export default class AllUsers extends React.Component {
    state = {
        data: []
    }

    componentDidMount = async () => {
        const accessToken = localStorage.getItem('accessToken');
        await axios.get('http://localhost:4000/api/users',
            {headers: { Authorization: `JWT ${accessToken}` }})
            .then(response => {
                console.log('getData', response)               
                this.setState({                         
                   data: response.data
                })
                
               
            })
    }
    render() {
        return (
            <div>
                {this.state.data.map((dt: any) => {
                    return(<h1> {dt.email} </h1>)
                    
                })}
               <Button onClick = {()=>(localStorage.clear())} > LOGOUT </Button>
            
            </div>
            
        )
    }
}