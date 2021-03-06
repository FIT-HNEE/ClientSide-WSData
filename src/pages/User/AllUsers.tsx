import React from 'react';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import TableContainer from '@mui/material/TableContainer';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { GetUsersData } from '../../actions/Actions';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

interface Props {
    GetUsersData: Function
    UserDataDeletion:Function
    UsersDataType: []
    loading: boolean
    error: boolean
    
}

interface filteredValues {
   filteredRows:string[]  
}

class AllUsers extends React.Component<Props, filteredValues> {
    
    constructor(props: Props) {      
    super(props)  
    this.state = {          
      filteredRows: []         
    }          
    }
    
    componentDidMount = async () => {
        await this.props.GetUsersData()
        this.setState({
             filteredRows: this.props.UsersDataType 
        })
        //await this.props.UsersDataType                 
        console.log('data', this.props.UsersDataType)
        console.log('filteredRows', this.state.filteredRows)
        console.log('loading', this.props.loading)
        console.log('error', this.props.error)
    }
    
   requestSearch = (event: any) => {

        let value = event.target.value.toLowerCase();
        
        const filteredRows = this.props.UsersDataType && this.props.UsersDataType.filter((row: any) => {
        
            return row.firstName.toLowerCase().includes(value) || row.lastName.toLowerCase().includes(value) || row.email.toLowerCase().includes(value)
            
        });
        
        console.log('Result', filteredRows);
        
        this.setState({

            filteredRows

        })
  };

    render() {
        
        return (
            <div>
                    <h2 style={{ textAlign: 'center' }}> All Users Data</h2>
                        <div style={{ margin: '0 auto', marginTop: '1%' }}>
                        <label>Search:</label>
                        <input type="text" onChange={this.requestSearch} />
                        </div>
                    
                    <TableContainer>
                        <Table aria-label="simple table">
                            <TableHead>
                            <TableRow>
                                <TableCell>firstName</TableCell>
                                <TableCell align="right">Last Name</TableCell>
                                    <TableCell align="right">email</TableCell>
                                    <TableCell align="right">User Data Modification</TableCell>
                                
                            </TableRow>
                            </TableHead>
                            <TableBody>
                            {this.state.filteredRows&&this.state.filteredRows.map((row: any) => {
                                return (                        
                                    <TableRow key={row.id}>
                                        <TableCell component="th" scope="row">
                                            {row.firstName}
                                        </TableCell>
                                        <TableCell align="right">{row.lastName}</TableCell>
                                        <TableCell align="right">{row.email}</TableCell>
                                        <TableCell align="right">
                                            <Button>
                                                <Link to={`/sign-in/me/allUsers/${row.id}`}>
                                                    View
                                                </Link>
                                            </Button>
                                        </TableCell>
                                        {/* <TableCell align="right">{row.isAdmin}</TableCell>
                                        <TableCell align="right">{row.confirmation}</TableCell> */}
                                    </TableRow>)
                            })}
                                
                            </TableBody> 
                        </Table>
                    </TableContainer>                    
                
            </div> 
        )
    }
}

const mapStateToProps = (state: any) => ({    
   UsersDataType: state.UsersData.UsersDataType,
    ...state,
    loading: state.UsersData.loading,
    error: state.UsersData.error                    
    
})

const connectedPage = connect(mapStateToProps, { GetUsersData })(AllUsers);

export default connectedPage;