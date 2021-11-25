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
import { GetUserDataToModify } from '../../actions/Actions'

interface IUserProp {
    GetUserDataToModify: Function
    loading: boolean
    error: boolean
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
}


class UserDataModification extends React.Component<RouteComponentProps<any> & IUserProp> {
   // class UserDataModification extends React.Component{
    
    componentDidMount = async () => {
        const { id } = await this.props.match.params;
        await this.props.GetUserDataToModify(id)
        console.log('UserDataModifyType', this.props.UserDataModifyType)
        console.log('id', id)
        console.log('loading', this.props.loading)
        console.log('error', this.props.error)
    }
    //onClick =  () => (this.props.history.push("/allUsers"))
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
              value={this.props.UserDataModifyType?.firstName}             
                                
            />
            <TextField      
              value={this.props.UserDataModifyType?.lastName} 

            />
            
            <TextField              
              value={this.props.UserDataModifyType?.email}
                            
            />
            <TextField              
              value={this.props.UserDataModifyType?.isAdmin}
                            
            />
            <TextField              
              value={this.props.UserDataModifyType?.confirmation}
                            
            />

            <FormLabel component="legend">Admin Role</FormLabel>

            <RadioGroup              
              aria-label="Admin Role"
              row 
              name="row-radio-buttons-group"
              value={this.props.UserDataModifyType?.isAdmin ?? " "}
              //onChange={handleChange}
            >

              <FormControlLabel value={true} control={<Radio />} label="Admin" />

              <FormControlLabel value={false} control={<Radio />} label="No Admin" />

            </RadioGroup>

            <FormLabel component="legend">Email Confirmation</FormLabel>

            <RadioGroup              
              aria-label="Email Confirmation"
              row 
              name="row-radio-buttons-group"
              value={this.props.UserDataModifyType?.confirmation ?? " "}
              //onChange={handleChange}
            >

              <FormControlLabel value={true} control={<Radio />} label="Confirmed" />

              <FormControlLabel value={false} control={<Radio />} label="Not Confirmed" />

            </RadioGroup>

            <Button variant='contained' color='primary'>Submit</Button>
            
              
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

const connectedPage = connect(mapStateToProps, { GetUserDataToModify })(UserDataModification);

export default withRouter(connectedPage)
//export default UserDataModification