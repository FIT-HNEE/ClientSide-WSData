import axios from 'axios';
import React from 'react';
import { RouteComponentProps, withRouter  } from 'react-router-dom';

interface LoginCredentials {
    email?: string,
    password?: string
}
 
class SignIn extends React.Component<LoginCredentials&RouteComponentProps<any>> {
    state: LoginCredentials = {
        email: '',
        password: ''
    }

  handleSubmit = async (event: React.FormEvent) => {
      event.preventDefault();
      await axios.post('http://localhost:4000/api/users/login',
        {        
          email: this.state.email,   
          password: this.state.password
        }, { withCredentials: true })
        .then(response => {
          //console.log('Data', response)
          if (response) {
             this.props.history.push("/me");  
          }    
        }          
    )    
  }
    render() {
      return (
        <form onSubmit={this.handleSubmit}>          
          <h3>Sign In</h3>
          <div className="form-group">            
            <label>Email address</label>            
            <input type="email" className="form-control" placeholder="Enter email" value={this.state.email} onChange={(event) => this.setState({                      
              email: event.target.value              
            })} />            
          </div>
          
          <div className="form-group">            
            <label>Password</label>            
            <input type="password" className="form-control" placeholder="Enter password" value={this.state.password} onChange={(event) => this.setState({              
              password: event.target.value              
            })} />
          </div>

          <button type="submit" className="btn btn-primary btn-block">Submit</button>          
          <p className="forgot-password text-right">            
            Forgot <a href="#">password?</a>            
          </p>
          
        </form>     
    )
  }  
}

export default withRouter(SignIn)