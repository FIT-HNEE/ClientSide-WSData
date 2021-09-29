import { Route, BrowserRouter, Switch, Link } from 'react-router-dom';
import './App.css';
import AllUsers from './pages/User/AllUsers';
import SignIn from './pages/User/SignIn';
import SignUp from './pages/User/SignUp';
import User from './pages/User/User';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <nav className="navbar navbar-expand-lg navbar-light fixed-top">
          <div className="container">
          <Link className="navbar-brand" to={"/sign-in"}>SignIn</Link>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav ml-auto">              
              <li className="nav-item">
                <Link className="nav-link" to={"/sign-up"}>Sign up</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link" to={"/me"}>User</Link>
              </li>
            </ul>
          </div>
        </div>
        </nav>

        <div className="auth-wrapper">
        <div className="auth-inner">
          <Switch>
            <Route exact path='/' component={SignIn} />
            <Route path="/sign-in" component={SignIn} />
              <Route path="/sign-up" component={SignUp} />
              <Route path="/me" component={User} />
               <Route path="/allUsers" component={AllUsers} />
          </Switch>
        </div>
        </div>
        
      </div>
   </BrowserRouter>
  );
}

export default App;
