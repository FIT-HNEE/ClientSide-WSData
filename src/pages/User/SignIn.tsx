import axios from 'axios';
import React from 'react';
import { RouteComponentProps, withRouter  } from 'react-router-dom';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import FormGroup from '@mui/material/FormGroup';

interface LoginCredentials {
    email?: string,
    password?: string
}
 
class SignIn extends React.Component<LoginCredentials&RouteComponentProps<any>> {
    state: LoginCredentials = {
        email: '',
        password: ''
    }

  onButtonClick = async (event: React.FormEvent) => {
      event.preventDefault();
      await axios.post('http://localhost:4000/api/users/login',
        {        
          email: this.state.email,   
          password: this.state.password
        }, { withCredentials: true })
        .then(response => {
          console.log('Data', response)
          localStorage.setItem('accessToken', response.data.tokens.accessToken)
          localStorage.setItem('refreshToken', response.data.tokens.refreshToken)
          if (response) {
             this.props.history.push("/me");  
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
          <h3>Sign In</h3>
          <FormGroup >
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
            <Button onClick={this.onButtonClick} variant='contained' color='primary'>Submit</Button>            
            <p className="forgot-password text-right">              
              Forgot <a href="#">password?</a>              
            </p>            
          
          </FormGroup>
        </div>        
      </Box>      
    )
  }  
}

export default withRouter(SignIn)