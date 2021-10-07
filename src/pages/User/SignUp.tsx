import React, { Component } from "react";
import axios from 'axios';
import { RouteComponentProps, withRouter  } from 'react-router-dom';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import FormGroup from '@mui/material/FormGroup';

interface signUpData {   
    firstName?: string,
    lastName?:string,
    email?: string,
    password?: string,
   
}

class SignUp extends Component <signUpData&RouteComponentProps<any>> {
    state: signUpData = {        
        firstName: '',
        lastName:'',
        email: '',
        password: ''        
    }

    onSubmit = async (event: React.FormEvent) => {
        event.preventDefault()

        await axios.post('http://localhost:4000/api/users/register',            
            {
                firstName: this.state.firstName,
                
                lastName: this.state.lastName,
        
                email: this.state.email,
          
                password: this.state.password
          
            }, { withCredentials: true })
            
            .then(response => {
            
                console.log('Data', response)
                
                if (response) {
              
                    this.props.history.push("/sign-in");
                    
                }                
            }                
        )        
    }

    render() {
        return (
            <Box   
                component="form"
                sx={{
                    '& .MuiTextField-root': { m: 1, width: '25ch' },                    
                }}

                noValidate

                autoComplete="off"

            >
                <div>
                    <h3>Sign Up</h3>
                    
                    <FormGroup >

                        <TextField
                            
                            required
                            
                            label="First Name"
                            
                            type="text"
                            
                            value={this.state.firstName}
                            
                            onChange={(event) => this.setState({
                        
                                firstName: event.target.value
                                
                            })}
                            
                        />

                        <TextField
                            
                            required
                            
                            label="Last Name"
                            
                            type="text"
                            
                            value={this.state.lastName}
                            
                            onChange={(event) => this.setState({
                        
                                lastName: event.target.value
                                
                            })}
                            
                        />
                        
                        <TextField
                            
                            required
                            
                            label="Email"
                            
                            type="email"
                            
                            value={this.state.email}
                            
                            onChange={(event) => this.setState({
                        
                                email: event.target.value
                                
                            })}
                            
                        />                        

                        <TextField
                            
                            required
                            
                            label="Password"
                            
                            type="password"
                            
                            value={this.state.password}
                            
                            onChange={(event) => this.setState({
                        
                                password: event.target.value
                                
                            })}
                            
                        />
                        
                        <Button onClick={this.onSubmit} variant='contained' color='primary'>Submit</Button>
                        
                        <p className="forgot-password text-right">
                            
                            Forgot <a href="#">password?</a>
                            
                        </p>
                        
                
                    </FormGroup>
                    
                </div>
                
            </Box>
            
        );

    }
}

export default withRouter(SignUp)