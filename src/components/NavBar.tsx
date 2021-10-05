import { Route,BrowserRouter, Switch } from 'react-router-dom';
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


function NavBar() {    

    return (
        <BrowserRouter>
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
            News
          </Typography>
                        <Button color="inherit" href="/sign-in" >Login</Button>
                        <Button color="inherit" href="/sign-up" >Sign up</Button>
                        <Button color="inherit" href="/me" >User</Button>
                        <Button color="inherit" href="/AllUsers" >AllUsers</Button>
        </Toolbar>
      </AppBar>
    </Box>    
            

            <Switch>
                
                <Route exact path='/' component={SignIn} />
                
                <Route path="/sign-in" component={SignIn} />
                
                <Route path="/sign-up" component={SignUp} />
                
                <Route path="/me" component={User} />
                
                <Route path="/allUsers" component={AllUsers} />
                
            </Switch>
            </BrowserRouter>
        
    )
}

export default NavBar;