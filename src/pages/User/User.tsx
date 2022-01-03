import React from 'react';
import { RouteComponentProps, withRouter  } from 'react-router-dom';
import { connect } from 'react-redux';
import { GetUserData } from '../../actions/Actions'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
interface IUserProp {

    GetUserData: Function
    loading: boolean
    error: boolean
    UserDataType?: {
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


class User extends React.Component<RouteComponentProps<any>&IUserProp > {    
    
    componentDidMount = async () => {
        await this.props.GetUserData()       
        console.log('loading', this.props.loading)
        console.log('error', this.props.error)
    }
    onClick =  () => (this.props.history.push("/sign-in/me/allUsers"))
    render() {
        return (

            <React.Fragment>
                <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
          >
                    
                <CardContent>
                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>                        
                        Email:&nbsp;&nbsp;&nbsp;{this.props.UserDataType?.email}                        
                    </Typography>
                    
                    <Typography variant="h5" component="div">                        
                        Welcome&nbsp;&nbsp;&nbsp;{this.props.UserDataType?.lastName}&nbsp;{this.props.UserDataType?.firstName}                        
                    </Typography>
                    
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">                        
                                                
                    </Typography>     
                    
                </CardContent>
                
                <CardActions>                    
                    {  
                        this.props.UserDataType?.isAdmin && this.props.UserDataType?.isAdmin === true ? (                            
                            <Button variant='contained' color='primary' onClick={this.onClick} >                                
                                All Users Data                                      
                            </Button > 
                        ) : ("")         
                    }                        
                    </CardActions>
                </Box>                
            </React.Fragment>      
            
        )
    }
}

const mapStateToProps = (state: any) => ({
    UserDataType: state.UserData.UserDataType,
    ...state,
    loading: state.UserData.loading,
    error: state.UserData.error  
})

const connectedPage = connect(mapStateToProps, { GetUserData })(User);

export default withRouter(connectedPage)