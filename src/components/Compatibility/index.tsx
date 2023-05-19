import React from 'react'
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

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
  // // hide last border
  // '&:last-child td, &:last-child th': {
  //   border: 0,
  // },
}));

interface CompatibilityProps {
  windows?: boolean|string;
  macOS?: boolean|string;
  android?: boolean|string;
  iOS?: boolean|string;
  web?: boolean|string;
  linux?: boolean|string;
  other?: boolean|string;
}

function Compatibility(props: CompatibilityProps) {
  const compatibleWith = {
    Windows: props.windows,
    macOS: props.macOS,
    Android: props.android,
    iOS: props.iOS,
    Web: props.web,
    Linux: props.linux,
    Other: props.other,
  };
  return (
    <div>
      
      <TableContainer component={Paper} sx={{ maxWidth: 300 }}>
      <Table
        // sx={{ minWidth: 700 }}
        aria-label="Compatibility table"
      >
        <TableHead>
          <TableRow>
            <StyledTableCell>OS/Environment</StyledTableCell>
            <StyledTableCell>Compatibility</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {Object.keys(compatibleWith).filter((row) => compatibleWith[row] !== undefined).map((row) => (
            <StyledTableRow key={row}>
              <StyledTableCell component="th" scope="row">
                {row}
              </StyledTableCell>
              <StyledTableCell>{
                compatibleWith[row] === true ? "✅"
                : compatibleWith[row] === false ? "❌"
                : typeof(compatibleWith[row]) === "string" ? <>✅<br />{compatibleWith[row]}</>
                : <>❓{compatibleWith[row].msg ? <><br />{compatibleWith[row].msg}</> : ""}</>
              }</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  )
}

export default Compatibility