import React from 'react';
import { RouteComponentProps, withRouter  } from 'react-router-dom';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import FormGroup from '@mui/material/FormGroup';
import { connect } from 'react-redux';
import { LogInData } from '../../actions/Actions'
interface Props {
   dispatch?: any;
  loading?: boolean
  error?: boolean
  LogInType?: any
}

interface LogInCredentials {
   email?: string;
  password?: string
  
}
 
class SignIn extends React.Component<RouteComponentProps<any>&Props, LogInCredentials> {
  
  constructor(props: RouteComponentProps) {      
    super(props)  
    this.state = {          
      email: '',      
      password: '',          
    }          
  }  

  onButtonClick = async (event: React.FormEvent) => {
      event.preventDefault();
    const { email, password } = this.state;    
    await this.props.dispatch(LogInData(email, password));
    const data = this.props.LogInType
   
    console.log('Data', this.props.LogInType)
    console.log('loading', this.props.loading)    
    console.log('error', this.props.error)
    console.log('PROPS', this.props)
    
    const error = this.props.error
    const loading = this.props.loading

    if (error ) {
      console.log('Error', error )
    } else if (loading) {
      console.log(' Loading', loading)
    } else {

      await sessionStorage.setItem('accessToken', data.tokens.accessToken)      
      await sessionStorage.setItem('refreshToken', data.tokens.refreshToken)
      
      await this.props.history.push("/sign-in/me")
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

const mapStateToProps = (state: any) => ({
    LogInType: state.LogIndata.LogInType,
    ...state,
    loading: state.LogIndata.loading,
  error: state.LogIndata.error,    
})

const connectedPage = connect(mapStateToProps)(SignIn);

export default withRouter(connectedPage)