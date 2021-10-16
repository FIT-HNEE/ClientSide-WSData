import * as React from 'react';
import Paper from '@mui/material/Paper';
import TableContainer from '@mui/material/TableContainer';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TablePagination from '@mui/material/TablePagination';
import { styled } from '@mui/material/styles';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

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
                            
                            <StyledTableCell align="right">{weatherData.header.dateTime}</StyledTableCell>
                            
                            <StyledTableCell align="right">{weatherData.header.k1}</StyledTableCell>
                            
                            <StyledTableCell align="right">{weatherData.header.k2}</StyledTableCell>

                            <StyledTableCell align="right">{weatherData.header.k3}</StyledTableCell>
                            
                            <StyledTableCell align="right">{weatherData.header.k4}</StyledTableCell>
                            
                            <StyledTableCell align="right">{weatherData.header.k5}</StyledTableCell>

                            <StyledTableCell align="right">{weatherData.header.k6}</StyledTableCell>
                            
                            <StyledTableCell align="right">{weatherData.header.k7}</StyledTableCell>
                            
                            <StyledTableCell align="right">{weatherData.header.k8}</StyledTableCell>

                            <StyledTableCell align="right">{weatherData.header.k9}</StyledTableCell>
                            
                            <StyledTableCell align="right">{weatherData.header.k10}</StyledTableCell>

                            <StyledTableCell align="right">{weatherData.header.k11}</StyledTableCell>
                            
                            <StyledTableCell align="right">{weatherData.header.k12}</StyledTableCell>
                            
                            <StyledTableCell align="right">{weatherData.header.k13}</StyledTableCell>

                            <StyledTableCell align="right">{weatherData.header.k14}</StyledTableCell>
                            
                            <StyledTableCell align="right">{weatherData.header.k15}</StyledTableCell>
                            
                            <StyledTableCell align="right">{weatherData.header.k16}</StyledTableCell>

                            <StyledTableCell align="right">{weatherData.header.k17}</StyledTableCell>
                            
                            <StyledTableCell align="right">{weatherData.header.k18}</StyledTableCell>

                            <StyledTableCell align="right">{weatherData.header.k19}</StyledTableCell>
                            
                            <StyledTableCell align="right">{weatherData.header.k20}</StyledTableCell>
                            
                            <StyledTableCell align="right">{weatherData.header.k21}</StyledTableCell>

                            <StyledTableCell align="right">{weatherData.header.k22}</StyledTableCell>
                            
                            <StyledTableCell align="right">{weatherData.header.k23}</StyledTableCell>
                            
                            <StyledTableCell align="right">{weatherData.header.k24}</StyledTableCell>

                            <StyledTableCell align="right">{weatherData.header.k25}</StyledTableCell>  
                                
                        </TableRow>
                        
                    </TableHead>
                    
                    <TableBody>
                        
                        {weatherData.data && weatherData.data
                            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                            .map((row: any) => {
                                
                            return (
                        
                                <StyledTableRow  key={row.dateTime}>
                                    
                                    <StyledTableCell component="th" scope="row">
                                        
                                        {row.dateTime}
                                        
                                    </StyledTableCell>
                                    
                                    <StyledTableCell align="right">{row.k1}</StyledTableCell>
                                    
                                    <StyledTableCell align="right">{row.k2}</StyledTableCell>
                                    
                                    <StyledTableCell align="right">{row.k3}</StyledTableCell>
                                    
                                    <StyledTableCell align="right">{row.k4}</StyledTableCell>

                                    <StyledTableCell align="right">{row.k5}</StyledTableCell>
                                    
                                    <StyledTableCell align="right">{row.k6}</StyledTableCell>
                                    
                                    <StyledTableCell align="right">{row.k7}</StyledTableCell>
                                    
                                    <StyledTableCell align="right">{row.k8}</StyledTableCell>

                                    <StyledTableCell align="right">{row.k9}</StyledTableCell>
                                    
                                    <StyledTableCell align="right">{row.k10}</StyledTableCell>
                                    
                                    <StyledTableCell align="right">{row.k11}</StyledTableCell>

                                    <StyledTableCell align="right">{row.k12}</StyledTableCell>
                                    
                                    <StyledTableCell align="right">{row.k13}</StyledTableCell>
                                    
                                    <StyledTableCell align="right">{row.k14}</StyledTableCell>
                                    
                                    <StyledTableCell align="right">{row.k15}</StyledTableCell>

                                    <StyledTableCell align="right">{row.k16}</StyledTableCell>
                                    
                                    <StyledTableCell align="right">{row.k17}</StyledTableCell>
                                    
                                    <StyledTableCell align="right">{row.k18}</StyledTableCell>
                                    
                                    <StyledTableCell align="right">{row.k19}</StyledTableCell>

                                    <StyledTableCell align="right">{row.k20}</StyledTableCell>
                                    
                                    <StyledTableCell align="right">{row.k21}</StyledTableCell>
                                    
                                    <StyledTableCell align="right">{row.k22}</StyledTableCell>
                                    
                                    <StyledTableCell align="right">{row.k23}</StyledTableCell>

                                    <StyledTableCell align="right">{row.k24}</StyledTableCell>
                                    
                                    <StyledTableCell align="right">{row.k25}</StyledTableCell>
                
                                </StyledTableRow >
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