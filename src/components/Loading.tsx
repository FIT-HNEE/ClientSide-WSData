import React from 'react';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import Grid from '@mui/material/Grid';
class Loading extends React.Component {
  render() {
    return (
      <Grid                        
            container               
            spacing={0}               
            direction="column"                
            alignItems="center"               
            justifyContent="center"
            
        >                          
            <Box>                   
                <CircularProgress size={50} />                
            </Box>     
        </Grid>   
    );
  }
}

export default Loading;