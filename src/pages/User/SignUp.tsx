import React, { Component } from "react";
import { RouteComponentProps, withRouter  } from 'react-router-dom';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import FormGroup from '@mui/material/FormGroup';
import { connect } from 'react-redux';
import { SignUpData } from '../../actions/Actions'
interface signUpCredentials {   
    firstName?: string,
    lastName?:string,
    email?: string,
    password?: string,
   
}
interface Props {
   dispatch?: any;
  loading?: boolean
  error?: boolean
  SignUpType?: any
}

class SignUp extends Component<RouteComponentProps<any>&Props, signUpCredentials> {
    
    constructor(props: RouteComponentProps) {      
    super(props)       
    this.state = {
          
        firstName: '',        
        lastName:'',
        email: '',
        password: ''          
    }          
  }    

    onSubmit = async (event: React.FormEvent) => {
        event.preventDefault()

        const { firstName, lastName, email, password } = this.state;        
        await this.props.dispatch(SignUpData(firstName, lastName, email, password));        
   
        console.log('Data', this.props.SignUpType)        
        console.log('loading', this.props.loading)        
        console.log('error', this.props.error)        
    
        const error = this.props.error        
        const loading = this.props.loading        

        if (error) {        
            console.log('Error', error)            
        } else if (loading) {            
            console.log(' Loading', loading)            
        } else {            
            await this.props.history.push("/sign-in");            
        }        
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

const mapStateToProps = (state: any) => ({
    SignUpType: state.SignUpdata.SignUpType,
    ...state,
    loading: state.SignUpdata.loading,
    error: state.SignUpdata.error  
})

const connectedPage = connect(mapStateToProps)(SignUp);

export default withRouter(connectedPage)

