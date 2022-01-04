import * as React from 'react';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';


type ErrorProps = {
  ErrorText:any
} 

const ErrorComponent: React.FC<ErrorProps> = (props) => {
      

  return (
      <React.Fragment>
          <Grid
              
              container
              spacing={0}
              direction="column"
              alignItems="center"
              justifyContent="center"
              style={{ minHeight: '100vh' }}
          >
              
              <Box                  
                  sx={{ height: '100vh', m: '10%', fontWeight: 500 }}                    
              >
                  
                  <Alert severity="error">     
                      <AlertTitle>Error</AlertTitle> 
                      <Typography variant="body2">
                          {props.ErrorText}
                      </Typography> 
                  </Alert>                        
              </Box>              
          </Grid>          
      </React.Fragment>
      
  )
};

export default ErrorComponent;