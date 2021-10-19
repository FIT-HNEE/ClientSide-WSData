import React from 'react';
import axios from 'axios';
//import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import TableContainer from '@mui/material/TableContainer';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

/* interface IUSERS {
    data?: Array<any>
} */

export default class AllUsers extends React.Component {
    state = {
        data: [],
        filteredRows: [],
        searched: ''
    }

    componentDidMount = async () => {
        const accessToken = localStorage.getItem('accessToken');
        await axios.get('http://localhost:4000/api/users',
            {headers: { Authorization: `JWT ${accessToken}` }})
            .then(response => {
                console.log('AllUsersData', response)               
                this.setState({                         
                    data: response.data,
                    filteredRows: response.data
                })
                
               
            })
    }

    requestSearch = (event: any) => {

        let value = event.target.value.toLowerCase();
        
        const filteredRows = this.state.data && this.state.data.filter((row: any) => {
        
            return row.firstName.toLowerCase().includes(value) || row.lastName.toLowerCase().includes(value) || row.email.toLowerCase().includes(value)
            
        });
        
        console.log('Result', filteredRows);
        
        this.setState({

            filteredRows

        })

  };

    /* cancelSearch = () => {
        this.setState({
           searched: ""
       })   
    this.requestSearch(this.state.searched);
  }; */

    render() {
        
        return (
            <div>
                <Paper>
                    <div className="App">
                        <div style={{ margin: '0 auto', marginTop: '10%' }}>
                        <label>Search:</label>
                        <input type="text" onChange={this.requestSearch} />
                        </div>
                    </div>
                    <TableContainer>
                        <Table aria-label="simple table">
                            <TableHead>
                            <TableRow>
                                <TableCell>firstName</TableCell>
                                <TableCell align="right">Last Name</TableCell>
                                <TableCell align="right">email</TableCell>
                                
                            </TableRow>
                            </TableHead>
                            <TableBody>
                            {this.state.filteredRows &&this.state.filteredRows.map((row: any) => {
                    return (
                        <TableRow key={row.id}>
                  <TableCell component="th" scope="row">
                    {row.firstName}
                  </TableCell>
                  <TableCell align="right">{row.lastName}</TableCell>
                  <TableCell align="right">{row.email}</TableCell>
                  {/* <TableCell align="right">{row.isAdmin}</TableCell>
                  <TableCell align="right">{row.confirmation}</TableCell> */}
                </TableRow>)
                    
                })}
                            </TableBody>
                        </Table>
                        </TableContainer>
                </Paper> 
                
              
            
            </div>
            
        )
    }
}