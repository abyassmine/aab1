import React, { useState, useEffect } from 'react';
import EmployeeForm from "./EmployeeForm";
import PageHeader from './../components/PageHeader';
import PeopleOutlineTwoToneIcon from '@material-ui/icons/PeopleOutlineTwoTone';

import useTable from './../components/useTable';
import * as employeeService from './../services/EmployeeService';
import Controls from './../components/controls/Controls';
import { Search } from "@material-ui/icons";
import AddIcon from '@material-ui/icons/Add';
import Popup from './../components/Popup';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import CloseIcon from '@material-ui/icons/Close';
import Notification from './../components/Notification';
import ConfirmDialog from './../components/ConfirmDialog';
import  * as XLSX from 'xlsx';
import { Button } from '@material-ui/core';
import ExportExcel from './ExportExcel6';

import EmployeeService from './../services/EmployeeService';
import GetAppIcon from '@material-ui/icons/GetApp';
import { Paper, makeStyles, TableBody, TableRow, TableCell, Toolbar, InputAdornment } from '@material-ui/core';
import { IconButton } from '@material-ui/core';
import { Box } from "@mui/material";
import { useTheme } from '@material-ui/core/styles';
import domtoimage from 'dom-to-image';
import { useNavigate } from 'react-router-dom';
import Header from "./../componentss/Header";
import BarChartLink from './../chart/BarChartLink'
import { InputLabel } from '@material-ui/core';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import './employee.css';
import ReceiptOutlinedIcon from '@material-ui/icons/ReceiptOutlined';
import ComputerOutlinedIcon from '@material-ui/icons/ComputerOutlined';
import ChatIcon from '@material-ui/icons/Chat';
import LocalGasStationOutlinedIcon from '@material-ui/icons/LocalGasStationOutlined';
import totalLogo from '../assets/logo-total (1).png';
import logovivo from '../assets/logovivo.png';

const useStyles = makeStyles((theme) => ({
  pageContent: {
    backgroundColor: 'transparent',
    width: '90%', // Adjust the width as needed
    margin: 'auto',
    marginTop: theme.spacing(2),
    padding: theme.spacing(3),
  },
  searchInput: {
    width: '75%',
  },
  newButton: {
    position: 'absolute',
    right: '10px',
  },
  tableContainer: {
    maxWidth: '800px', // Adjust the maximum width as needed
    margin: 'auto',
  },
  tableCell: {
    fontSize: '1rem',
    padding: '5px 2px',
    color: '#8d8b8b',
  },
  tableCellDarkMode: {
    color: '#fff',
  },
  headCells: {
    width:'10px',
  },
  darkMode: {
    // Adjust the background color for dark mode
  },
  redText: {
    color: 'red',
  },
}));

const headCells = [
 
  { id: 'datedesoutage', label: 'DATE DE SOUTAGE' },
  { id: 'datedesortie', label: 'DATE DE SORTIE' },
  { id: 'quantitelivree', label: 'Quantité Livrée' },
  { id: 'quantiteabord', label: 'Quantité A bord' },
  { id: 'quantitetotal', label: 'Quantité Total' },
  { id: 'stabilite', label: 'STABILITE' },
  { id: 'consmyne', label: 'cons.Myne ' },
  { id: 'jourautono', label: 'Jour.Autono ' },
  { id: 'dateprochainesoutage', label: 'DATE PROCHAINE SOUTAGE ' },
  { id: 'soutagedegazoil', label: 'SOUTAGE DE GASOIL ' },
  { id: 'prixdegazoil', label: 'PRIX DE GAZOIL' },

  { id: 'actions', label: 'Actions', disableSorting: true }
];

export default function Employees() {
  const classes = useStyles();

  const [darkMode, setDarkMode] = useState(false);
  const [buttonColor, setButtonColor] = useState('');
  const [inputColor, setInputColor] = useState('');
const [labelColor, setLabelColor] = useState('');
const [borderColor, setBorderColor] = useState('');
const [chartData, setChartData] = useState([]);
const [quantiteAbord, setQuantiteAbord] = useState(0);
  const [quantiteLivree, setQuantiteLivree] = useState(0);
  const [quantiteTotal, setQuantiteTotal] = useState(0);
const navigate = useNavigate();

const [recordForEdit, setRecordForEdit] = useState(null);
  const [records, setRecords] = useState(EmployeeService.getAllEmployees());
  const [filterFn, setFilterFn] = useState({ fn: (employees) => { return employees; } });
  const [openPopup, setOpenPopup] = useState(false);
  const [notify, setNotify] = useState({ isOpen: false, message: '', type: '' });
  const [confirmDialog, setConfirmDialog] = useState({ isOpen: false, title: '', subTitle: '' });
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5); // Update the number of rows per page
  const [employees, setEmployees] = useState([]);
  const [openSecondPopup, setOpenSecondPopup] = useState(false);

  const handleDarkModeToggle = () => {
    setDarkMode(!darkMode);
    setButtonColor(darkMode ? '' : '#008080'); 
    setInputColor(darkMode ? '' : '#008080');
  setLabelColor(darkMode ? '' : '#008080'); 
  setBorderColor(darkMode ? '' : '#008080'); 
  };
  
  const [popupContent, setPopupContent] = useState(null);
  const [clickedLink, setClickedLink] = useState(null);

  const openSecondPopupHandler = (content) => {
    setPopupContent(content);
    setOpenSecondPopup(true);
  };
  <LocalGasStationOutlinedIcon style={{ color: '#059dff', fontSize: '40px' }} />
  const openPopupWithContent = (content) => {
    setPopupContent(content);
    setOpenPopup(true);
  };

  
  


  const closePopup = () => {
    setPopupContent(null);
    setOpenPopup(false);
  };
  const handleExportChart = () => {
    const chartOptions = {
      chart: {
        type: 'column',
      },
      title: {
        text: 'Employee Data',
      },
      xAxis: {
        categories: chartData.map((dataPoint) => dataPoint.name),
      },
      yAxis: {
        title: {
          text: 'Dat dacquis', // Replaced "Employee ID" with "Dat dacquis"
        },
      },
      series: [
        {
          name: 'Dat dacquis', // Replaced "Employee ID" with "Dat dacquis"
          data: chartData.map((dataPoint) => dataPoint.y),
        },
        {
          name: 'Type',
          data: chartData.map((dataPoint) => dataPoint.type),
        },
      ],
    };


    const chartContainer = document.getElementById('chart-container');

    domtoimage.toPng(chartContainer).then(function (dataUrl) {
      const link = document.createElement('a');
      link.href = dataUrl;
      link.download = 'chart.png';
      link.style.visibility = 'hidden';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }).catch(function (error) {
      console.error('Error exporting chart:', error);
    });
  };
  
  // Apply dark mode class to the table container based on the dark mode state
  const tableContainerClasses = `${classes.tableContainer} ${
    darkMode ? classes.darkMode : ""
  }`;
 
  const getAllEmployees = () => {
    EmployeeService.getAllEmployees()
      .then((response) => {
        setEmployees(response.data);
  
        // Prepare the data for the chart
      
      });
  };
  const Delete = async (id) => {
    setConfirmDialog({
      ...confirmDialog,
      isOpen: false
    });
    try {
      // Make the API request to delete the employee
      await EmployeeService.deleteEmployee(id);
  
      // Update the state after successful deletion
      const updatedEmployees = employees.filter(emp => emp.id !== id);
      setEmployees(updatedEmployees);
  
      // Show notification
      setNotify({
        isOpen: true,
        message: 'Deleted Successfully',
        type: 'error'
      });
    } catch (error) {
      console.error('Error deleting employee:', error);
    }
  };
  

  useEffect(() => {
    // Check if there is data in localStorage
    const storedEmployees = JSON.parse(localStorage.getItem('employees'));
  
    // If there is, set the state with the stored data
    if (storedEmployees) {
      setEmployees(storedEmployees);
    } else {
      // If not, fetch the data from the server
      getAllEmployees();
    }
  }, []);
  
  useEffect(() => {
    getAllEmployees();
  }, []); // Run once when the component mounts
  
  const {
    TblContainer,
    TblHead,
    TblPagination,
    recordsAfterPagingAndSorting
  } = useTable(employees, headCells, filterFn);

  const handleSearch = (e) => {
    let target = e.target;
    setFilterFn({
      fn: (employees) => {
        if (target.value === "") return employees;
        else
          return employees.filter(
            (x) =>
              x &&
              ((x.datedesoutage && x.datedesoutage.toString().toLowerCase().includes(target.value.toLowerCase())) ||
               (x.datedesortie && x.datedesortie.toString().toLowerCase().includes(target.value.toLowerCase())) ||
               (x.dateprochainesoutage && x.dateprochainesoutage.toString().toLowerCase().includes(target.value.toLowerCase())) ||
               (x.quantitelivree && x.quantitelivree.toString().toLowerCase().includes(target.value.toLowerCase())) ||
               (x.quantiteabord && x.quantiteabord.toString().toLowerCase().includes(target.value.toLowerCase())) ||
               (x.quantitetotal && x.quantitetotal.toString().toLowerCase().includes(target.value.toLowerCase())) ||
               (x.stabilite && x.stabilite.toString().toLowerCase().includes(target.value.toLowerCase())) ||
               (x.consmyne && x.consmyne.toString().toLowerCase().includes(target.value.toLowerCase())) ||
               (x.jourautono && x.jourautono.toString().toLowerCase().includes(target.value.toLowerCase())) ||
               (x.soutagedegazoil && x.soutagedegazoil.toString().toLowerCase().includes(target.value.toLowerCase())) ||
               (x.prixdegazoil && x.prixdegazoil.toString().toLowerCase().includes(target.value.toLowerCase()))
              )
          );
      },
    });
  };
  
  
  const calculateDateProchaineSoutage = (datedesortie, jourautono) => {
    const dateDesSortie = new Date(datedesortie);
    const daysToAdd = parseInt(jourautono, 10); // Convert jourautono to integer
    dateDesSortie.setDate(dateDesSortie.getDate() + daysToAdd);
    return dateDesSortie.toISOString().split('T')[0]; // Format as YYYY-MM-DD
  };

  

  const addOrEdit = (employee, resetForm) => {
    const { quantiteabord, quantitelivree, datedesortie, jourautono } = employee;
    
    // Calculate quantitetotal
    const quantitetotal = parseFloat(quantiteabord) + parseFloat(quantitelivree);
    const dateprochainesoutage = calculateDateProchaineSoutage(datedesortie, jourautono);
    // Create a new employee object with quantitetotal included
    const updatedEmployee = { ...employee, quantitetotal, dateprochainesoutage };
  
    if (employee.id === 0) {
      EmployeeService.createEmployee(updatedEmployee)
        .then(() => {
          resetForm();
          setRecordForEdit(null);
          setOpenPopup(false);
  
          setEmployees((prevEmployees) => [...prevEmployees, updatedEmployee]);
          localStorage.setItem(
            'employees',
            JSON.stringify([...employees, updatedEmployee])
          );
  
          // Update the total quantities
          updateQuantities([...employees, updatedEmployee]);
          
          setNotify({
            isOpen: true,
            message: 'Submitted Successfully',
            type: 'success',
          });
        });
    } else {
      EmployeeService.updateEmployee(updatedEmployee)
        .then(() => {
          resetForm();
          setRecordForEdit(null);
          setOpenPopup(false);
  
          const index = employees.findIndex((emp) => emp.id === employee.id);
          const updatedEmployees = [...employees];
          updatedEmployees[index] = updatedEmployee;
          setEmployees(updatedEmployees);
  
          // Update the total quantities
          updateQuantities(updatedEmployees);
          
          setNotify({
            isOpen: true,
            message: 'Updated Successfully',
            type: 'success',
          });
        });
    }
  };
  
  const onDelete = async (id) => {
    setConfirmDialog({
      ...confirmDialog,
      isOpen: false,
    });
    try {
      // Make the API request to delete the employee
      await EmployeeService.deleteEmployee(id);
  
      // Update the state after successful deletion
      const updatedEmployees = employees.filter((emp) => emp.id !== id);
      setEmployees(updatedEmployees);
  
      // Update the total quantities
      updateQuantities(updatedEmployees);
  
      // Show notification
      setNotify({
        isOpen: true,
        message: 'Deleted Successfully',
        type: 'error',
      });
    } catch (error) {
      console.error('Error deleting employee:', error);
    }
  };
  
  const updateQuantities = (employeeList) => {
    // Calculate new total quantities
    const newQuantiteAbord = employeeList.reduce(
      (total, emp) => total + parseFloat(emp.quantiteabord),
      0
    );
    const newQuantiteLivree = employeeList.reduce(
      (total, emp) => total + parseFloat(emp.quantitelivree),
      0
    );
    const newQuantiteTotal = newQuantiteAbord + newQuantiteLivree;
  
    // Update state with new quantities
    setQuantiteAbord(newQuantiteAbord);
    setQuantiteLivree(newQuantiteLivree);
    setQuantiteTotal(newQuantiteTotal);
  };
  

 
  const openInPopup = (employee, link) => {
    setRecordForEdit(employee);
    setClickedLink(link);
    setOpenPopup(true);
  };

 
  const theme = createMuiTheme({
    palette: {
      type: 'light', // Start with 'light' mode, it will automatically switch to 'dark' when the top bar is dark
    },
    // You can customize other theme properties here if needed
  });
  

  return (
    <ThemeProvider theme={theme}>
    <>
    
      <Box m="20px">
      <Header title=" TILILA  " subtitle="KHALID FISHERIES" />
      </Box>
      
     
      
      <Button
  variant="contained"
  color="primary"
  onClick={() => navigate('/barchart')}
  style={{marginLeft:'600px'}}
>
  View  Chart
</Button>

     <Paper
  className={`${classes.pageContent} ${darkMode ? classes.darkMode : ''}`}
  style={{ borderColor: borderColor  }} // Add this line to set the border color
>
        <Toolbar>
        <Controls.Input
  label="Search "
  className={classes.searchInput}
  InputProps={{
    startAdornment: (
      <InputAdornment position="start">
        <Search />
      </InputAdornment>
    ),
    style: { color: inputColor }
  }}
  InputLabelProps={{
    style: { color: labelColor }
  }}
  onChange={handleSearch}
/>



        <Controls.Button
  text="Add New"
  variant="outlined"
  startIcon={<AddIcon />}
  className={`${classes.newButton} ${darkMode ? classes.tableCellDarkMode : ''}`}
  style={{ backgroundColor: buttonColor,  }}
  onClick={() => { setOpenPopup(true); setRecordForEdit(null); }}
/>


        <ExportExcel records={employees} darkMode={darkMode} />
       

        </Toolbar>
        <div style={{ overflowX: 'auto' }}>
          <TblContainer className={classes.tableContainer} >
            <TblHead darkMode={darkMode}/>
            <TableBody>
              {recordsAfterPagingAndSorting()
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map(employee => (
                  <TableRow key={employee.id} >
                    
                    <TableCell  component="th"
                      scope="row"
                    className={`${classes.tableCell} ${darkMode ? classes.tableCellDarkMode : ''}`}>
                      {new Date(employee.datedesoutage).toLocaleDateString('en-GB')}
                    </TableCell>
                    <TableCell className={`${classes.tableCell} ${darkMode ? classes.tableCellDarkMode : ''}`}>
                      {new Date(employee.datedesortie).toLocaleDateString('en-GB')}
                    </TableCell>
                    <TableCell className={`${classes.tableCell} ${darkMode ? classes.tableCellDarkMode : ''}`}>{employee.quantitelivree}</TableCell>
                    <TableCell className={`${classes.tableCell} ${darkMode ? classes.tableCellDarkMode : ''}`}>{employee.quantiteabord}</TableCell>
                    <TableCell className={`${classes.tableCell} ${darkMode ? classes.tableCellDarkMode : ''}`}>{employee.quantitetotal}</TableCell>
                    <TableCell className={`${classes.tableCell} ${darkMode ? classes.tableCellDarkMode : ''}`}>{employee.stabilite}</TableCell>
                    <TableCell className={`${classes.tableCell} ${darkMode ? classes.tableCellDarkMode : ''}`}>
        {((employee.quantitetotal - employee.stabilite) / employee.jourautono / 1000).toFixed(2)} {/* Calculate consmyne here */}
      </TableCell>
                    <TableCell className={`${classes.tableCell} ${darkMode ? classes.tableCellDarkMode : ''}`}>{employee.jourautono}</TableCell>
                    <TableCell
  className={`${classes.tableCell} ${
    darkMode ? classes.tableCellDarkMode : ''
  } ${
    new Date(employee.dateprochainesoutage) <= new Date()
      ? classes.redText
      : ''
  }`}
>
  {new Date(employee.dateprochainesoutage).toLocaleDateString('en-GB')}
</TableCell>

                    <TableCell className={`${classes.tableCell} ${darkMode ? classes.tableCellDarkMode : ''}`}>{employee.soutagedegazoil}</TableCell>
                  

                    <TableCell className={`${classes.tableCell} ${darkMode ? classes.tableCellDarkMode : ''}`}>
                  <a
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      openSecondPopupHandler(
                        <div>
                        {/* Your popup content goes here */}
                        <div className="card-container">
                          {/* Card 1 */}
                          <div className="card">
                            
                            <img src={logovivo} alt="Vivo Logo" style={{ width: '110px', height: '110px' }} />
                            
                            <a href="/Vivoenergy" className="textlink">Vivo Energy</a>
                            <p className="text" style={{ color: 'black' }}>add price diesel information for each ship.</p>
                          </div>
                      
                          {/* Card 2 */}
                          <div className="card">
                            
                          <img src={totalLogo} alt="Total Logo" style={{ width: '150px', height: '100px' }} />
                           
                            <a href="/Total" className="textlink">TOTAL</a>
                            <p className="text" style={{ color: 'black' }}>add price diesel information for each ship.</p>
                          </div>
                      
                          {/* Card 3 */}
                          <div className="card">
                            <div className="circle3">
                              <LocalGasStationOutlinedIcon style={{ color: '#6549d5', fontSize: '40px' }} />
                            </div>
                            <a href="/Petrod" className="textlink">PETROD</a>
                            <p className="text" style={{ color: 'black' }}>add price diesel information for each ship.</p>
                          </div>
                        </div>
                        <div className="card" style={{width:'240px'}}>
                            <div className="circle2">
                              <LocalGasStationOutlinedIcon style={{ color: 'rgb(251, 83, 67)', fontSize: '40px' }} />
                            </div>
                            <a href="/PetroSUD" className="textlink">PETROSUD</a>
                            <p className="text" style={{ color: 'black' }}>add price diesel information for each ship.</p>
                          </div>
                        
                      </div>
                      
                      
                      );
                    }}
                  >
                    {employee.prixdegazoil}
                  </a>
                </TableCell>

                    <TableCell>
                      <Controls.ActionButton
                        color="primary"
                        onClick={() => { openInPopup(employee) }}
                      >
                        <EditOutlinedIcon fontSize="small" />
                      </Controls.ActionButton>
                      <Controls.ActionButton
                        color="secondary"
                        onClick={() => {
                          setConfirmDialog({
                            isOpen: true,
                            title: 'Are you sure to delete this record?',
                            subTitle: "You can't undo this operation",
                            onConfirm: () => { onDelete(employee.id) }
                          })
                        }}
                      >
                        <CloseIcon fontSize="small" />
                      </Controls.ActionButton>
                    </TableCell>
                  </TableRow>
                ))
              }
            </TableBody>
          </TblContainer>
          <TblPagination
            rowsPerPageOptions={[5, 10, 25]}
            count={employees.length}
            rowsPerPage={rowsPerPage}
            page={page}
            setPage={setPage}
            setRowsPerPage={setRowsPerPage}
          />
        </div>
      </Paper>
      <Popup
        title="TILILA Form"
        openPopup={openPopup}
        setOpenPopup={setOpenPopup}
      >
        <EmployeeForm
          recordForEdit={recordForEdit}
          addOrEdit={addOrEdit}
        />
      </Popup>
      <Notification
        notify={notify}
        setNotify={setNotify}
      />
      <ConfirmDialog
        confirmDialog={confirmDialog}
        setConfirmDialog={setConfirmDialog}
      />
     <Popup
  title="Choose your supplier"
  openPopup={openSecondPopup}
  setOpenPopup={setOpenSecondPopup}
  // Add the style prop to set the top position
 
>
  {popupContent}
</Popup>

    </>
    </ThemeProvider>
  );
}