import React from 'react';
import { RouteComponentProps, withRouter  } from 'react-router-dom';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import FormGroup from '@mui/material/FormGroup';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import { connect } from 'react-redux';
import { GetUserDataToModify, UserDataModification, UserDataDeletion } from '../../actions/Actions'

interface IUserProp {
  GetUserDataToModify: Function
  UserDataModification: Function
  UserDataDeletion:Function
  UserDataModifyType?: {      
    id: string,    
    firstName: string,        
    lastName: string,        
    email: string,        
    password: string,        
    isAdmin: boolean,        
    confirmation: boolean,
    createdAt: Date,        
    updatedAt: Date      
  }
  loading: boolean
  error: boolean 
}

interface InputUserData{
  firstName?: string
  lastName?: string
  email?: string
  isAdmin?: boolean      
  confirmation?: boolean  
}
class UserDataEdit extends React.Component<RouteComponentProps<any> & IUserProp, InputUserData> {
  
  private stepInput: React.RefObject<HTMLInputElement>;
  
  constructor(props:any) {
    super(props);
    this.stepInput = React.createRef(); 
    this.state = {   
      firstName: '',    
      lastName: '',                
      email: '',
      isAdmin: false,        
      confirmation: false,
    }  
    }  
 
    handleInputChange = (e: any) => {
      const target = e.target;      
      const value = target.value;      
      const name = target.name;     

      this.setState({        
        ...this.state,        
        [name]: value        
      });
      
    }  
    
    componentDidMount = async () => {
      const { id } = await this.props.match.params;      
      await this.props.GetUserDataToModify(id)     
      this.setState({       
        firstName: this.props.UserDataModifyType?.firstName,
        lastName: this.props.UserDataModifyType?.lastName,
        email: this.props.UserDataModifyType?.email,
        isAdmin: this.props.UserDataModifyType?.isAdmin,        
        confirmation: this.props.UserDataModifyType?.confirmation,      
      }, () => {
        console.log('STATE',this.state);
      });
        console.log('UserDataModifyType', this.props.UserDataModifyType)
        console.log('id', id)
        console.log('loading', this.props.loading)
        console.log('error', this.props.error)
  }
  onSubmit = async (e: any) => {
    e.preventDefault();    
   const { email, lastName, firstName, isAdmin, confirmation } = this.state;
    const { id } = await this.props.match.params;
    console.log('newUser', email, lastName, firstName)
    await this.props.UserDataModification(id, email, lastName, firstName, confirmation, isAdmin );
    this.props.history.push("/sign-in/me/allUsers")
  }
     deleteUser = async (id: any) => {
        await this.props.UserDataDeletion(id)       
       this.props.history.push("/sign-in/me/allUsers")
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
          <h3>User Data Modification</h3>
          
          <FormGroup >
            
            <TextField              
              value={this.state.firstName}
              name="firstName"
              onChange={this.handleInputChange}
              ref={this.stepInput}
            />
            <TextField      
              value={this.state.lastName} 
              onChange={this.handleInputChange}
              name="lastName"
            />
            
            <TextField              
              value={this.state.email}
              onChange={this.handleInputChange}
              name="email"     
            />
            <TextField              
              value={this.state.isAdmin}
                            
            />
            <TextField              
              value={this.state.confirmation}
                            
            />

            <FormLabel component="legend">Admin Role</FormLabel>

            <RadioGroup              
              aria-label="Admin Role"
              row 
              name="isAdmin"
              value={this.state.isAdmin ?? " "}
              onChange={this.handleInputChange}
            >

              <FormControlLabel value={true} control={<Radio />} label="Admin" />

              <FormControlLabel value={false} control={<Radio />} label="No Admin" />

            </RadioGroup>

            <FormLabel component="legend">Email Confirmation</FormLabel>

            <RadioGroup              
              aria-label="Email Confirmation"
              row 
              name="confirmation"
              value={this.state.confirmation ?? " "}
              onChange={this.handleInputChange}
            >

              <FormControlLabel value={true} control={<Radio />} label="Confirmed" />

              <FormControlLabel value={false} control={<Radio />} label="Not Confirmed" />

            </RadioGroup>

            <Button variant='contained' onClick={this.onSubmit} color='primary'>Edit</Button>
            <Button variant='contained' onClick={()=> this.deleteUser(this.props.match.params.id)} color='primary'>Delete</Button>
            
              
          </FormGroup>
          
        </div>
        
      </Box>
      
    )
    
  }
  
}

const mapStateToProps = (state: any) => ({
    UserDataModifyType: state.UserDataToModify.UserDataModifyType,
    ...state,
    loading: state.UserDataToModify.loading,
    error: state.UserDataToModify.error  
})

const connectedPage = connect(mapStateToProps, { GetUserDataToModify,UserDataModification, UserDataDeletion })(UserDataEdit);

export default withRouter(connectedPage)
//export default UserDataModification