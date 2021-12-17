import React, { Component } from "react";
import { RouteComponentProps, withRouter  } from 'react-router-dom';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import { connect } from 'react-redux';
import { SignUpData } from '../../actions/Actions'
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
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
 const theme = createTheme();

class SignUp extends Component<RouteComponentProps<any> & Props, signUpCredentials> {    
    
    constructor(props: RouteComponentProps) {        
        
        super(props)        
        
        this.state = {
        
            firstName: '',
            
            lastName: '',
        
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
                            <PersonAddAltIcon />
                        </Avatar>
                        
          
                        <Typography component="h1" variant="h5">                            
                            Sign Up                            
                        </Typography>
                        
                        <Box component="form" noValidate sx={{ mt: 1 }}>
                            <TextField   
                                margin="normal" 
                                required
                                fullWidth                            
                                label="First Name"                                
                                type="text"                                
                                value={this.state.firstName}                                
                                onChange={(event) => this.setState({                            
                                    firstName: event.target.value                                    
                                })}                            
                            />                            

                            <TextField                                
                                margin="normal"                                
                                required
                                fullWidth
                                label="Last Name"
                                type="text"
                                value={this.state.lastName}
                                onChange={(event) => this.setState({                            
                                    lastName: event.target.value                                    
                                })}                                
                            />                            
                        
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
                                required                                    
                                fullWidth
                                label="Password"                                
                                type="password"                                
                                value={this.state.password}                                
                                onChange={(event) => this.setState({                            
                                    password: event.target.value                                    
                                })}                                
                            />
                            
                            <Button onClick={this.onSubmit} variant='contained' sx={{ mt: 3, mb: 2 }} color='primary'>Submit</Button>
                        </Box>                        
                    </Box>                    
                </Container>                
            </ThemeProvider>  
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

