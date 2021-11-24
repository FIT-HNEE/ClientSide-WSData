import React from 'react';
import { RouteComponentProps, withRouter  } from 'react-router-dom';
import Button from '@mui/material/Button';
import { connect } from 'react-redux';
import { GetUserData } from '../../actions/Actions'

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
    onClick =  () => (this.props.history.push("/allUsers"))
    render() {
        return (

            <div>
                <h1> {this.props.UserDataType?.email} </h1>                
                <h2> {this.props.UserDataType?.firstName} </h2>
                {this.props.UserDataType?.isAdmin && this.props.UserDataType?.isAdmin === true}{
                    
                    <Button variant='contained' color='primary' onClick={this.onClick} >                        
                        All Users Data                            
                    </Button >
                }                
            </div>            
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