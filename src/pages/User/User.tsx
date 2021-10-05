import React from 'react';
import axios from 'axios';
import { RouteComponentProps, withRouter  } from 'react-router-dom';
import Button from '@mui/material/Button';

interface IUSER {
    id?: string,
    firstName?: string,
    lastName?: string,
    email?: string,
    password?: string,
    isAdmin?: boolean,
    confirmation?: boolean,
    createdAt?: Date,
    updatedAt?: Date
}

class User extends React.Component<IUSER&RouteComponentProps<any>> {
    state: IUSER = {
        id: '',
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        isAdmin: false,
        confirmation: false,
    }

    componentDidMount = async () => {
        const accessToken = localStorage.getItem('accessToken');
        await axios.get('http://localhost:4000/api/users/me',
            {headers: { Authorization: `JWT ${accessToken}` }})
            .then(response => {
                console.log('getData', response)
                this.setState({
                    firstName: response.data.firstName,
                    email: response.data.email
                })
            })
    }
    onClick =  () => (this.props.history.push("/allUsers"))
    render() {
        return (
            <div>
            <h1> {this.state.email} </h1>
                <h2> {this.state.firstName} </h2>
                { this.state.isAdmin && this.state.isAdmin === true}{
                    <Button variant='contained' color='primary' onClick = {this.onClick} >
                        All Users Data
                       {/*  <li className="nav-item">
                            <Link className="nav-link" to={"/allUsers"}>AllUsers</Link>                            
                        </li>                  */}       
                    </Button >
                }
                
                </div>
        )
    }
}

export default withRouter(User)