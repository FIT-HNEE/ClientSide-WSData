import React from "react";
import { Route, Switch, RouteComponentProps, withRouter  } from 'react-router-dom';
import AllUsers from '../pages/User/AllUsers';
import SignIn from '../pages/User/SignIn';
import SignUp from '../pages/User/SignUp';
import User from '../pages/User/User';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Button from '@mui/material/Button';
import WeatherDataFetching from "../pages/WeatherData/WeatherDataFetching";
import WeatherData from "../pages/WeatherData/WeatherData";


const NavBar: React.FC<RouteComponentProps> = (props) => {    

    return (
        <>
        <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Weather Data APP
              </Typography>
              {(() => {
                const accessToken = localStorage.getItem('accessToken');
                console.log('Access Token here', accessToken)

                if (accessToken && accessToken !== null) {
                  return (
                    <> 
                      <Button color="inherit" href="/me" >User</Button>                      
                      <Button color="inherit" href="/AllUsers" >AllUsers</Button>
                      <Button
                    variant='contained'
                    color='primary'                    
                        onClick={() => {
                          localStorage.clear()
                          props.history.push("/sign-in");
                        }} > LOGOUT </Button>
                    </>                    
                  )
                } else {
                  return (
                    <> 
                      <Button color="inherit" href="/sign-in" >Login</Button>
                      <Button color="inherit" href="/WeatherDataFetching" >SearchWeatherData</Button>
                      <Button color="inherit" href="/WeatherData" >WeatherData</Button>
                      <Button color="inherit" href="/sign-up" >Sign up</Button>
                      
                  </> 
                  )
                                   
                }
              })
              ()}
                       
                        
        </Toolbar>
      </AppBar>
    </Box>    
            

        <Switch>
                          
          <Route exact path='/' component={SignIn} />          
                
          <Route path="/sign-in" component={SignIn} />          
                
          <Route path="/sign-up" component={SignUp} />          
                
          <Route path="/me" component={User} />

          <Route path="/WeatherDataFetching" component={WeatherDataFetching} />

          <Route path="/WeatherData" component={WeatherData} />
                
          <Route path="/allUsers" component={AllUsers} />          
                
        </Switch>
        
            </>
        
    )
}

export default withRouter(NavBar);