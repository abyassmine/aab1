import React, { useState, useEffect } from 'react';
import EmployeeForm from './../../Employees/EmployeeForm';
import PageHeader from './../../components/PageHeader';
import PeopleOutlineTwoToneIcon from '@material-ui/icons/PeopleOutlineTwoTone';

import useTable from './../../components/useTable';
import * as employeeService from './../../services/EmployeeService';
import Controls from './../../components/controls/Controls';
import { Search } from "@material-ui/icons";
import AddIcon from '@material-ui/icons/Add';
import Popup from './../../components/Popup';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import CloseIcon from '@material-ui/icons/Close';
import Notification from './../../components/Notification';
import ConfirmDialog from './../../components/ConfirmDialog';
import ExportExcel from '../../Employees/ExportExcel6';

import EmployeeService from './../../services/EmployeeService';

import { Paper, makeStyles, TableBody, TableRow, TableCell, Toolbar, InputAdornment } from '@material-ui/core';

import { Box } from "@mui/material";

import Header from "../../componentss/Header";

const useStyles = makeStyles((theme) => ({
  pageContent: {
    marginTop: theme.spacing(10),
    
    // Add the desired marginRight value
    backgroundColor: 'transparent',
   width:'100%',
  },
  searchInput: {
    width: '75%',
  },
  newButton: {
    position: 'absolute',
    right: '10px',
  },
}));

const headCells = [
  { id: 'id', label: 'Id' },
  { id: 'nom', label: 'Employee Name' },
  { id: 'entite', label: 'Entite' },
  { id: 'fonction', label: 'Fonction' },
  { id: 'marque', label: 'Marque' },
  { id: 'model', label: 'Model' },
  { id: 'ndeserie', label: 'N° de série' },
  { id: 'codeImmob', label: 'Code Immob' },
  { id: 'departmentId', label: 'Department' }, // Updated property name
  { id: 'type', label: 'Type' },
  { id: 'etat', label: 'Etat' }, // Updated property name
  { id: 'observation', label: 'Observation' },
  { id: 'datdacquis', label: 'Dat dacquis' },
  { id: 'actions', label: 'Actions', disableSorting: true }
];

const Materiel = () => {
      
  const classes = useStyles();
  const [recordForEdit, setRecordForEdit] = useState(null);
  const [records, setRecords] = useState(EmployeeService.getAllEmployees());
  const [filterFn, setFilterFn] = useState({ fn: (employees) => { return employees; } });
  const [openPopup, setOpenPopup] = useState(false);
  const [notify, setNotify] = useState({ isOpen: false, message: '', type: '' });
  const [confirmDialog, setConfirmDialog] = useState({ isOpen: false, title: '', subTitle: '' });
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [employees, setEmployees] = useState([]);
  const {
    TblContainer,
    TblHead,
    recordsAfterPagingAndSorting
  } = useTable(employees, headCells, filterFn);

  const handleSearch = (e) => {
    let target = e.target;
    setFilterFn({
      fn: (employees) => {
        if (target.value === '') return employees;
        else return employees.filter((x) => x.nom.toLowerCase().includes(target.value));
      }
    });
  };

  const addOrEdit = (employee, resetForm) => {
    if (employee.id === 0) {
      EmployeeService.createEmployee(employee)
        .then(() => {
          resetForm();
          setRecordForEdit(null);
          setOpenPopup(false);
          setEmployees((prevEmployees) => [...prevEmployees, employee]);
          setNotify({
            isOpen: true,
            message: 'Submitted Successfully',
            type: 'success'
          });
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      EmployeeService.updateEmployee(employee)
        .then(() => {
          resetForm();
          setRecordForEdit(null);
          setOpenPopup(false);
          const index = employees.findIndex((emp) => emp.id === employee.id);
          const updatedEmployees = [...employees];
          updatedEmployees[index] = employee;
          setEmployees(updatedEmployees);
          setNotify({
            isOpen: true,
            message: 'Updated Successfully',
            type: 'success'
          });
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  const openInPopup = (employee) => {
    setRecordForEdit(employee);
    setOpenPopup(true);
  };

  const onDelete = async (id) => {
    setConfirmDialog({
      ...confirmDialog,
      isOpen: false
    });
    await EmployeeService.deleteEmployee(id);
    const updatedEmployees = employees.filter((emp) => emp.id !== id);
    setEmployees(updatedEmployees);
    setNotify({
      isOpen: true,
      message: 'Deleted Successfully',
      type: 'error'
    });
  };

  useEffect(() => {
    const getAllEmployees = () => {
      EmployeeService.getAllEmployees()
        .then((response) => {
          setEmployees(response.data);
          console.log(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    getAllEmployees();
  }, []);

  return (
    <>
      <div>
        <Box m="20px">
          <Header title="Materiel" subtitle="List of Materiel for Employees" />
        </Box>
        <Paper className={classes.pageContent}>
          <Toolbar>
            <Controls.Input
              label="Search Employees"
              className={classes.searchInput}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Search />
                  </InputAdornment>
                )
              }}
              onChange={handleSearch}
            />
            <Controls.Button
              text="Add New"
              variant="outlined"
              startIcon={<AddIcon />}
              className={classes.newButton}
              onClick={() => {
                setOpenPopup(true);
                setRecordForEdit(null);
              }}
            />
            <ExportExcel records={employees} />
          </Toolbar>
          <div style={{ maxHeight: 'calc(100vh - 50px)',maxWidth:'calc(150vh - -10px)', overflow: 'auto' }}>
            <TblContainer>
              <TblHead />
              <TableBody>
  {recordsAfterPagingAndSorting().map((employee) => (
    <TableRow key={employee.id}>
      <TableCell component="th" scope="row">
        {employee.id}
      </TableCell>
      <TableCell>{employee.nom}</TableCell>
                                    <TableCell>{employee.entite}</TableCell>
                                    <TableCell>{employee.fonction}</TableCell>
                                    <TableCell>{employee.marque}</TableCell>
                                    <TableCell>{employee.model}</TableCell>
                                    <TableCell>{employee.ndeserie}</TableCell>
                                    <TableCell>{employee.codeImmob}</TableCell>
                                    <TableCell>{employee.departmentId}</TableCell>
                                    <TableCell>{employee.type}</TableCell>
                                    <TableCell>{employee.etat}</TableCell>
                                    <TableCell>{employee.observation}</TableCell>
      <TableCell>
        {/* Action buttons */}
      </TableCell>
    </TableRow>
  ))}
</TableBody>
            </TblContainer>
          </div>
          <Popup
            title="Employee Form"
            openPopup={openPopup}
            setOpenPopup={setOpenPopup}
          >
            <EmployeeForm addOrEdit={addOrEdit} recordForEdit={recordForEdit} />
          </Popup>
          <Notification notify={notify} setNotify={setNotify} />
          <ConfirmDialog
            confirmDialog={confirmDialog}
            setConfirmDialog={setConfirmDialog}
          />
        </Paper>
      </div>
    </>
  );
};

export default Materiel;
