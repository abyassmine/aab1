import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

const TableComponent = ({ formData }) => {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Username</TableCell>
            <TableCell>ID</TableCell>
            <TableCell>Subject</TableCell>
            <TableCell>Type</TableCell>
            <TableCell>Description</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {/* Map through your data and render rows */}
          {formData.map((row, index) => (
            <TableRow key={index}>
              <TableCell>{row.username}</TableCell>
              <TableCell>{row.message}</TableCell>
              <TableCell>{row.subject}</TableCell>
              <TableCell>{row.type}</TableCell>
              <TableCell>{row.description}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TableComponent;
