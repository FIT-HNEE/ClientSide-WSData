import React, { useState } from "react";
import { Route, Switch, RouteComponentProps, withRouter } from 'react-router-dom';
import AllUsers from '../pages/User/AllUsers';
import SignIn from '../pages/User/SignIn';
import SignUp from '../pages/User/SignUp';
import User from '../pages/User/User';
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Button,
  Avatar,
  useMediaQuery,
  useTheme,  
  IconButton,
  Drawer,
   Container
} from '@mui/material'
import { makeStyles } from "@mui/styles";
import MenuIcon from '@mui/icons-material/Menu';
import image from '../images/FBG.jpg'
import WeatherDataFetching from "../pages/WeatherData/WeatherDataFetching";
import WeatherData from "../pages/WeatherData/WeatherData";
import Figures from "./dataVisualization/Figures";
import HomePage from "../pages/Home/HomePage";
import UserDataModification from "../pages/User/UserDataModification";

const useStyles = makeStyles(() => ({  

  iconButtonContainer: {      
    color: '#1976d2',    
  },
  menuIconToggle: {      
    fontSize: '2rem',    
  },  
}));  

const NavBar: React.FC<RouteComponentProps> = (props) => {  
  
  const [openDrawer, setOpenDrawer] = useState(false);  
  const theme = useTheme(); 
  const isMatch = useMediaQuery(theme.breakpoints.down('md'));

  //Css
  const classes = useStyles();
  

    return (
      <Container maxWidth='xl'>
        
        <Box sx={{ mb: 4 }}>

          <AppBar position="static">
            
            <Toolbar>             
          
              <Avatar alt="Remy Sharp" src={image} />
              <Typography variant="h6" component="div" sx={{ flexGrow: 2 }}>

                <Button color="inherit" onClick={() => {             
                              props.history.push("/");                              
                }}> Weather Data APP </Button>
                
              </Typography>              
                            
              {isMatch ? (

                <>
                  <IconButton                
                    className={classes.iconButtonContainer}                    
                    onClick={() => setOpenDrawer(!openDrawer)}                    
                    disableRipple>                    
                    <MenuIcon className={classes.menuIconToggle} />                    
                  </IconButton>                  
                  <Drawer                    
                    sx={{   
                      flexShrink: 0,                      
                      '& .MuiDrawer-paper': {  
                        boxSizing: 'border-box',                        
                        position: 'absolute',                            
                        background: '#1976d2 ',                            
                        color: 'white ',                            
                        top: '64px ',                            
                        height: '300%',                            
                      }
                    }}                    
                    anchor='right'
                    variant="persistent"
                    onClose={() => setOpenDrawer(false)}
                    open={openDrawer}
                    onClick={() => setOpenDrawer(true)}>                    
                      
                    {(() => {                      
                      const accessToken = sessionStorage.getItem('accessToken');                      
                      console.log('Access Token here', accessToken)
                      if (accessToken && accessToken !== null) {                  
                        return (                    
                          <>
                            <Button color="inherit" onClick={async() => {                             
                              await props.history.push("/sign-in/me")
                               await setOpenDrawer(false)
                            }}>User</Button>
                            {/* <Button color="inherit" href="/sign-in/me/allUsers" onClick={() => setOpenDrawer(false)}>AllUsers</Button> */}                            
                            <Button                              
                              variant='contained'                              
                              color='primary'                              
                              onClick={async () => {                          
                                await sessionStorage.clear()                                
                                await props.history.push("/sign-in")                                
                                await setOpenDrawer(false);                                
                              }}> LOGOUT </Button>                            
                          </>                          
                        )                        
                      } else {                        
                        return (                    
                          <>                            
                            <Button color="inherit" onClick={async() => {                             
                              await props.history.push("/")
                               await setOpenDrawer(false)
                            }} >Home</Button>
                            
                            <Button color="inherit" onClick={async() => {                             
                              await props.history.push("/sign-in")
                               await setOpenDrawer(false)
                            }} >Login</Button>
                            
                            <Button color="inherit" onClick={async() => {                             
                              await props.history.push("/WeatherDataFetching")
                               await setOpenDrawer(false)
                            }} >SearchWeatherData</Button>
                            
                            <Button color="inherit" onClick={async() => {                             
                              await props.history.push("/sign-up")
                               await setOpenDrawer(false)
                            }} >Sign up</Button>
                            
                          </>                          
                        )                        
                      }                      
                    })                      
                      ()}                    
                  </Drawer>                  
                </>) : (
                  
                  (() => {
                    const accessToken = sessionStorage.getItem('accessToken');                    
                    console.log('Access Token here', accessToken)                   

                    if (accessToken && accessToken !== null) {                  
                      return (                    
                        <>                          
                          <Button color="inherit"
                            onClick={() => {             
                              props.history.push("/sign-in/me");                              
                            }}
                          > User
                          </Button>
                          {/* <Button color="inherit" href="/me/allUsers" >AllUsers</Button> */}                          
                          <Button                            
                            variant='contained'                            
                            color='primary'                            
                            onClick={() => {                          
                              sessionStorage.clear()                              
                              props.history.push("/sign-in");                              
                            }} > LOGOUT </Button>                          
                        </>                        
                      )                      
                    } else {                      
                      return (                    
                        <>
                          
                          <Button color="inherit" onClick={() => {                            
                            props.history.push("/");                            
                          }}> Home </Button>
                          
                          
                          <Button color="inherit" onClick={() => {                            
                            props.history.push("/sign-in");                            
                          }}> Login </Button>

                          
                          <Button color="inherit" onClick={() => {                            
                            props.history.push("/WeatherDataFetching");                            
                          }}> SearchWeatherData </Button>

                          <Button color="inherit" onClick={() => {                            
                            props.history.push("/sign-up");                            
                          }}> Sign up </Button>
                          
                         
                          
                        </>
                        
                      )                                                        
                    }
                  })
                    ()                  
              )}
            </Toolbar>            
          </AppBar>          
        </Box>                    
        <Switch>
          
          <Route exact path='/WeatherDataFetching/figures' component={Figures} /> 

          <Route path="/WeatherDataFetching/WeatherData" component={WeatherData} />
          
          <Route path="/WeatherDataFetching" component={WeatherDataFetching} />
          
          <Route path="/sign-in/me/allUsers/:id" component={UserDataModification} />

          <Route path="/sign-in/me/allUsers" component={AllUsers} />

          <Route path="/sign-in/me" component={User} />

          <Route path="/sign-in" component={SignIn} />

          <Route path="/sign-up" component={SignUp} />          

          <Route exact path='/' component={HomePage} /> 
                
        </Switch>
        
      </Container>
      
        
    )
}

export default withRouter(NavBar);