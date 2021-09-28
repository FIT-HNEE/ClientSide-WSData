import React from 'react';
import axios from 'axios';

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

export default class User extends React.Component {
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
        await axios.get('http://localhost:4000/api/users/me',{withCredentials: true})
            .then(response => {
                console.log('getData', response)
                this.setState({
                    firstName: response.data.firstName,
                    email: response.data.email
                })
            })
    }
    render() {
        return (
            <div>
            <h1> {this.state.email} </h1>
                <h2> {this.state.firstName} </h2>
                </div>
        )
    }
}