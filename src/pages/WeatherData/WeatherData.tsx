import * as React from 'react';
import Paper from '@mui/material/Paper';
import TableContainer from '@mui/material/TableContainer';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TablePagination from '@mui/material/TablePagination';


const WeatherData = (props: any) => {
    
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

    const weatherData = props.location.state.WeatherData
    

    return (
        <Paper>
            <TableContainer>
                
                <Table aria-label="simple table">

                    <TableHead>

                        <TableRow>
                            
                            <TableCell align="right">{weatherData.header.dateTime}</TableCell>
                            
                            <TableCell align="right">{weatherData.header.k1}</TableCell>
                            
                            <TableCell align="right">{weatherData.header.k2}</TableCell>

                            <TableCell align="right">{weatherData.header.k3}</TableCell>
                            
                            <TableCell align="right">{weatherData.header.k4}</TableCell>
                            
                            <TableCell align="right">{weatherData.header.k5}</TableCell>

                            <TableCell align="right">{weatherData.header.k6}</TableCell>
                            
                            <TableCell align="right">{weatherData.header.k7}</TableCell>
                            
                            <TableCell align="right">{weatherData.header.k8}</TableCell>

                            <TableCell align="right">{weatherData.header.k9}</TableCell>
                            
                            <TableCell align="right">{weatherData.header.k10}</TableCell>

                            <TableCell align="right">{weatherData.header.k11}</TableCell>
                            
                            <TableCell align="right">{weatherData.header.k12}</TableCell>
                            
                            <TableCell align="right">{weatherData.header.k13}</TableCell>

                            <TableCell align="right">{weatherData.header.k14}</TableCell>
                            
                            <TableCell align="right">{weatherData.header.k15}</TableCell>
                            
                            <TableCell align="right">{weatherData.header.k16}</TableCell>

                            <TableCell align="right">{weatherData.header.k17}</TableCell>
                            
                            <TableCell align="right">{weatherData.header.k18}</TableCell>

                            <TableCell align="right">{weatherData.header.k19}</TableCell>
                            
                            <TableCell align="right">{weatherData.header.k20}</TableCell>
                            
                            <TableCell align="right">{weatherData.header.k21}</TableCell>

                            <TableCell align="right">{weatherData.header.k22}</TableCell>
                            
                            <TableCell align="right">{weatherData.header.k23}</TableCell>
                            
                            <TableCell align="right">{weatherData.header.k24}</TableCell>

                            <TableCell align="right">{weatherData.header.k25}</TableCell>  
                                
                        </TableRow>
                        
                    </TableHead>
                    
                    <TableBody>
                        
                        {weatherData.data && weatherData.data
                            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                            .map((row: any) => {
                                
                            return (
                        
                                <TableRow key={row.dateTime}>
                                    
                                    <TableCell component="th" scope="row">
                                        
                                        {row.dateTime}
                                        
                                    </TableCell>
                                    
                                    <TableCell align="right">{row.k1}</TableCell>
                                    
                                    <TableCell align="right">{row.k2}</TableCell>
                                    
                                    <TableCell align="right">{row.k3}</TableCell>
                                    
                                    <TableCell align="right">{row.k4}</TableCell>

                                    <TableCell align="right">{row.k5}</TableCell>
                                    
                                    <TableCell align="right">{row.k6}</TableCell>
                                    
                                    <TableCell align="right">{row.k7}</TableCell>
                                    
                                    <TableCell align="right">{row.k8}</TableCell>

                                    <TableCell align="right">{row.k9}</TableCell>
                                    
                                    <TableCell align="right">{row.k10}</TableCell>
                                    
                                    <TableCell align="right">{row.k11}</TableCell>

                                    <TableCell align="right">{row.k12}</TableCell>
                                    
                                    <TableCell align="right">{row.k13}</TableCell>
                                    
                                    <TableCell align="right">{row.k14}</TableCell>
                                    
                                    <TableCell align="right">{row.k15}</TableCell>

                                    <TableCell align="right">{row.k16}</TableCell>
                                    
                                    <TableCell align="right">{row.k17}</TableCell>
                                    
                                    <TableCell align="right">{row.k18}</TableCell>
                                    
                                    <TableCell align="right">{row.k19}</TableCell>

                                    <TableCell align="right">{row.k20}</TableCell>
                                    
                                    <TableCell align="right">{row.k21}</TableCell>
                                    
                                    <TableCell align="right">{row.k22}</TableCell>
                                    
                                    <TableCell align="right">{row.k23}</TableCell>

                                    <TableCell align="right">{row.k24}</TableCell>
                                    
                                    <TableCell align="right">{row.k25}</TableCell>
                
                                </TableRow>
                            )                            
                        })}
                        
                    </TableBody>
                    
                </Table>
                
            </TableContainer>

            <TablePagination
                
                rowsPerPageOptions={[10, 25, 100]}                
                component="div"                
                count={weatherData.data.length}                
                rowsPerPage={rowsPerPage}                
                page={page}                
                onPageChange={handleChangePage}                
                onRowsPerPageChange={handleChangeRowsPerPage}
                
            />
            
                    
        </Paper>
        
    )
}

export default WeatherData