import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import { useLocation } from 'react-router-dom';

const Tasks = () => {
  const location = useLocation();
  const formData = location.state?.formData || []; // Add null check and provide a default value if state is undefined

  return (
    <div className="container44">
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
    </div>
  );
};

export default Tasks;
