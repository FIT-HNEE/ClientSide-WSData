import React from 'react';
import { RouteComponentProps, withRouter  } from 'react-router-dom';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import { connect } from 'react-redux';
import { LogInData } from '../../actions/Actions';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import CircularProgress from '@mui/material/CircularProgress';
import Grid from '@mui/material/Grid';
import ErrorComponent from '../../components/ErrorComponent';
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
 const theme = createTheme();
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

    if (error) {       
      console.log('Error', error)
      //alert("User is not found")
    } else if (loading) {
      <Grid                        
                        container                        
                        spacing={0}                        
                        direction="column"                        
                        alignItems="center"                        
                        justifyContent="center"
                    >                        
                        <Box>                            
                            <CircularProgress size={50} />                              
                        </Box>                        
                    </Grid>   
      console.log(' Loading', loading)
    } else {

      await sessionStorage.setItem('accessToken', data.tokens.accessToken)      
      await sessionStorage.setItem('refreshToken', data.tokens.refreshToken)
      
      await this.props.history.push("/sign-in/me")
    }
  }
  
  render() {
      
    return (

      <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />  
      <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>

              <LockOutlinedIcon />
              
          </Avatar>
          
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" noValidate sx={{ mt: 1 }}>
              <TextField
                margin="normal"                
              required
              fullWidth 
              label="Email"
              type="email"                
              value={this.state.email}              
              onChange={(event) => this.setState({              
                email: event.target.value                
              })}
                
            />            
              <TextField
                margin="normal"               
              fullWidth
              required              
              label="Password"              
              type="password"          
              value={this.state.password}              
              onChange={(event) => this.setState({              
                password: event.target.value                
              })}
  
            />
              <Button onClick={this.onButtonClick} variant='contained' sx={{ mt: 3, mb: 2 }} color='primary'>
                
                Submit
              </Button>            
            <p className="forgot-password text-right">              
              Forgot <a href="#">password?</a>              
            </p>            
          {this.props.error ? <ErrorComponent
     ErrorText={'Either email, password is incorrect or the user is not confirmed yet. '} />
       : null }
          </Box>
        </Box>
        </Container>
        </ThemeProvider>
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