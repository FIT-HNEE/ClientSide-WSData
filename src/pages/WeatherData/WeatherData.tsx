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
import { makeStyles } from "@mui/styles";

/* const TableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
})); */

const StickyTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: "#ddd",    
    left: 0,
    position: "sticky",
    zIndex: theme.zIndex.appBar + 2
  },
  [`&.${tableCellClasses.body}`]: {
     backgroundColor: "#ddd",
   
    left: 0,
    position: "sticky",
    zIndex: theme.zIndex.appBar + 1
  }
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
 /*  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  }, */
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

const useStyles = makeStyles(() => ({
  customTableContainer: {
        overflowX: "scroll",
        height: "80vh"
      
    },
    headerCell: {        
        background: '#ddd',        
    },
    dateTime: {        
        //fontSize: "12px",
        padding: "0px"
    },
    
}));
         
const WeatherData = (props: any) => {    
    
    const [page, setPage] = React.useState(0);

    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    const classes = useStyles();


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
            <TableContainer classes={{ root: classes.customTableContainer }}>
                
                <Table stickyHeader aria-label="sticky table">

                    <TableHead >

                        <TableRow >

                           <StickyTableCell>  
                            
                            <TableCell classes={{ root: classes.headerCell }}>{weatherData.header.dateTime}</TableCell>
                            </StickyTableCell>
                            
                            <TableCell classes={{ root: classes.headerCell }}>{weatherData.header.k1}</TableCell>
                            
                            <TableCell classes={{ root: classes.headerCell }}>{weatherData.header.k2}</TableCell>

                            <TableCell classes={{ root: classes.headerCell }}>{weatherData.header.k3}</TableCell>
                            
                            <TableCell classes={{ root: classes.headerCell }}>{weatherData.header.k4}</TableCell>
                            
                            <TableCell classes={{ root: classes.headerCell }}>{weatherData.header.k5}</TableCell>

                            <TableCell classes={{ root: classes.headerCell }}>{weatherData.header.k6}</TableCell>
                            
                            <TableCell classes={{ root: classes.headerCell }}>{weatherData.header.k7}</TableCell>
                            
                            <TableCell classes={{ root: classes.headerCell }}>{weatherData.header.k8}</TableCell>

                            <TableCell classes={{ root: classes.headerCell }}>{weatherData.header.k9}</TableCell>
                            
                            <TableCell classes={{ root: classes.headerCell }}>{weatherData.header.k10}</TableCell>

                            <TableCell classes={{ root: classes.headerCell }}>{weatherData.header.k11}</TableCell>
                            
                            <TableCell classes={{ root: classes.headerCell }}>{weatherData.header.k12}</TableCell>
                            
                            <TableCell classes={{ root: classes.headerCell }}>{weatherData.header.k13}</TableCell>

                            <TableCell classes={{ root: classes.headerCell }}>{weatherData.header.k14}</TableCell>
                            
                            <TableCell classes={{ root: classes.headerCell }}>{weatherData.header.k15}</TableCell>
                            
                            <TableCell classes={{ root: classes.headerCell }}>{weatherData.header.k16}</TableCell>

                            <TableCell classes={{ root: classes.headerCell }}>{weatherData.header.k17}</TableCell>
                            
                            <TableCell classes={{ root: classes.headerCell }}>{weatherData.header.k18}</TableCell>

                            <TableCell classes={{ root: classes.headerCell }}>{weatherData.header.k19}</TableCell>
                            
                            <TableCell classes={{ root: classes.headerCell }}>{weatherData.header.k20}</TableCell>
                            
                            <TableCell classes={{ root: classes.headerCell }}>{weatherData.header.k21}</TableCell>

                            <TableCell classes={{ root: classes.headerCell }}>{weatherData.header.k22}</TableCell>
                            
                            <TableCell classes={{ root: classes.headerCell }}>{weatherData.header.k23}</TableCell>
                            
                            <TableCell classes={{ root: classes.headerCell }}>{weatherData.header.k24}</TableCell>

                            <TableCell classes={{ root: classes.headerCell }}>{weatherData.header.k25}</TableCell>  
                            
                                
                        </TableRow>
                        
                    </TableHead>
                    
                    <TableBody>
                        
                        {weatherData.data && weatherData.data
                            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                            .map((row: any) => {
                                
                            return (
                        
                                <StyledTableRow key={row.dateTime}>
                                    
                                    <StickyTableCell>
                                    
                                    <TableCell classes={{ root: classes.dateTime }} component="th" scope="row">
                                        
                                        {row.dateTime}
                                        
                                    </TableCell>
                                    </StickyTableCell>
                                    
                                    <TableCell align="center">{row.k1}</TableCell>
                                    
                                    <TableCell align="center">{row.k2}</TableCell>
                                    
                                    <TableCell align="center">{row.k3}</TableCell>
                                    
                                    <TableCell align="center">{row.k4}</TableCell>

                                    <TableCell align="center">{row.k5}</TableCell>
                                    
                                    <TableCell align="center">{row.k6}</TableCell>
                                    
                                    <TableCell align="center">{row.k7}</TableCell>
                                    
                                    <TableCell align="center">{row.k8}</TableCell>

                                    <TableCell align="center">{row.k9}</TableCell>
                                    
                                    <TableCell align="center">{row.k10}</TableCell>
                                    
                                    <TableCell align="center">{row.k11}</TableCell>

                                    <TableCell align="center">{row.k12}</TableCell>
                                    
                                    <TableCell align="center">{row.k13}</TableCell>
                                    
                                    <TableCell align="center">{row.k14}</TableCell>
                                    
                                    <TableCell align="center">{row.k15}</TableCell>

                                    <TableCell align="center">{row.k16}</TableCell>
                                    
                                    <TableCell align="center">{row.k17}</TableCell>
                                    
                                    <TableCell align="center">{row.k18}</TableCell>
                                    
                                    <TableCell align="center">{row.k19}</TableCell>

                                    <TableCell align="center">{row.k20}</TableCell>
                                    
                                    <TableCell align="center">{row.k21}</TableCell>
                                    
                                    <TableCell align="center">{row.k22}</TableCell>
                                    
                                    <TableCell align="center">{row.k23}</TableCell>

                                    <TableCell align="center">{row.k24}</TableCell>
                                    
                                    <TableCell align="center">{row.k25}</TableCell>

                                    
                
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