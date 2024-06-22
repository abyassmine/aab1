import React, { useState, useEffect } from 'react';
import DadesForm from "./DadesForm";
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
import ExportExcel23 from './ExportExcel23';

import GetAppIcon from '@material-ui/icons/GetApp';
import { Paper,Table,TableHead, makeStyles, TableBody, TableRow, TableCell, Toolbar, InputAdornment } from '@material-ui/core';

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
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import IconButton from '@material-ui/core/IconButton';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import ViewColumnIcon from '@material-ui/icons/ViewColumn';

import { orderBy } from 'lodash';
import EmployeeServiceDades from '../services/EmployeeServiceDades';

const useStyles = makeStyles((theme) => ({
    pageContent: {
      backgroundColor: 'transparent',
      width: '99%', // Adjust the width as needed
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
      padding: '7px 6px',
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
    { id: 'datedesoutage23', label: 'DATE DE SOUTAGE', visible: false },
    { id: 'datedesortie23', label: 'DATE DE SORTIE', visible: false },
    { id: 'quantitelivree23', label: 'Quantité Livrée', visible: false },
    { id: 'quantiteabord23', label: 'Quantité A bord', visible: false },
    { id: 'quantitetotal23', label: 'Quantité Total', visible: false },
    { id: 'stabilite23', label: 'STABILITE', visible: false },
    { id: 'consmyne23', label: 'cons.Myne', visible: false },
    { id: 'jourautono23', label: 'Jour.Autono', visible: false },
    { id: 'dateprochainesoutage23', label: 'DATE PROCHAINE SOUTAGE', visible: false },
    { id: 'soutagedegazoil23', label: 'SOUTAGE DE GASOIL', visible: false },
    { id: 'quantiteconsomme23', label: 'Quantité Consommée Pendant Lescale', visible: false },
    { id: 'quantitetransbordée23', label: 'Quantité Transbordée', visible: false },
    { id: 'quantitereçue23', label: 'Quantité Reçue', visible: false },
    { id: 'nombredimmobilisationescale23', label: 'Nombre hrs dImmobilisation en escale au port', visible: false },
    { id: 'nombredimmobilisationmer23', label: 'Nombre hrs dImmobilisation en haute mer', visible: false },
    { id: 'prixdegazoil23', label: 'PRIX DE GAZOIL', visible: false },
    { id: 'actions', label: 'Actions', disableSorting: true , visible: false }
];

  

const Dades = () => {
  const [columnVisibility, setColumnVisibility] = useState({});
  const [anchorEl, setAnchorEl] = useState(null);
  const classes = useStyles();
  // Add this state variable to your component
  const [hideHeaderAndColumns, setHideHeaderAndColumns] = useState(false);
  const [isLabelVisible, setIsLabelVisible] = useState(true);
  
    const [darkMode, setDarkMode] = useState(false);
    const [buttonColor, setButtonColor] = useState('');
    const [inputColor, setInputColor] = useState('');
  const [labelColor, setLabelColor] = useState('');
  const [borderColor, setBorderColor] = useState('');
  const [chartData, setChartData] = useState([]);
  const [quantiteAbord23, setQuantiteAbord23] = useState(0);
  const [quantiteLivree23, setQuantiteLivree23] = useState(0);
  const [quantiteTotal23, setQuantiteTotal23] = useState(0);
  
  
  
  

  const navigate = useNavigate();
  const [orderByColumn, setOrderByColumn] = useState(''); // Initialize with an empty string or the default column
  const [orderByDirection, setOrderByDirection] = useState('asc');
  const [recordForEdit, setRecordForEdit] = useState(null);
    const [records, setRecords] = useState(EmployeeServiceDades.getAllEmployees());
    const [filterFn, setFilterFn] = useState({ fn: (employees23) => { return employees23; } });
    const [openPopup, setOpenPopup] = useState(false);
    const [notify, setNotify] = useState({ isOpen: false, message: '', type: '' });
    const [confirmDialog, setConfirmDialog] = useState({ isOpen: false, title: '', subTitle: '' });
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5); // Update the number of rows per page
    const [employees23, setEmployees] = useState([]);
    const [openSecondPopup, setOpenSecondPopup] = useState(false);
    const [openColumnMenu, setOpenColumnMenu] = useState(false);
    const handleDarkModeToggle = () => {
      setDarkMode(!darkMode);
      setButtonColor(darkMode ? '' : '#008080'); 
      setInputColor(darkMode ? '' : '#008080');
    setLabelColor(darkMode ? '' : '#008080'); 
    setBorderColor(darkMode ? '' : '#008080'); 
    };
    
    const [popupContent, setPopupContent] = useState(null);
    const [clickedLink, setClickedLink] = useState(null);
    const handleColumnMenuClose = () => {
        setOpenColumnMenu(false);
      };
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
        EmployeeServiceDades.getAllEmployees()
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
          await EmployeeServiceDades.deleteEmployee(id);
      
          // Update the state after successful deletion
          const updatedEmployees = employees23.filter(emp => emp.id !== id);
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
      
      const sendSms = async () => {
        const url = 'http://localhost:8085/api/sms/send'; // Update with your actual backend URL
        const requestBody = {
            to: '0669342045',
            body: 'Anzar1 is gonna come tomorrow',
        };
    
        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(requestBody),
            });
    
            if (response.ok) {
                const result = await response.json();
                console.log(result);
            } else {
                console.error('Failed to send SMS');
            }
        } catch (error) {
            console.error('Error sending SMS:', error);
        }
    };
    
    // Call the function when needed, e.g., on button click
    sendSms();
    
      useEffect(() => {
        // Check if there is data in localStorage
        const storedEmployees = JSON.parse(localStorage.getItem('employees23'));
      
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
      } = useTable(employees23, headCells, filterFn);
    
      const handleSearch = (e) => {
        let target = e.target;
        setFilterFn({
          fn: (employees23) => {
            if (target.value === "") return employees23;
            else
              return employees23.filter(
                (x) =>
                  x &&
                  (
                    (x.datedesoutage23 && x.datedesoutage23.toString().toLowerCase().includes(target.value.toLowerCase())) ||
                    (x.datedesortie23 && x.datedesortie23.toString().toLowerCase().includes(target.value.toLowerCase())) ||
                    (x.dateprochainesoutage23 && x.dateprochainesoutage23.toString().toLowerCase().includes(target.value.toLowerCase())) ||
                    (x.quantitelivree23 && x.quantitelivree23.toString().toLowerCase().includes(target.value.toLowerCase())) ||
                    (x.quantiteabord23 && x.quantiteabord23.toString().toLowerCase().includes(target.value.toLowerCase())) ||
                    (x.quantitetotal23 && x.quantitetotal23.toString().toLowerCase().includes(target.value.toLowerCase())) ||
                    (x.stabilite23 && x.stabilite23.toString().toLowerCase().includes(target.value.toLowerCase())) ||
                    (x.consmyne23 && x.consmyne23.toString().toLowerCase().includes(target.value.toLowerCase())) ||
                    (x.jourautono23 && x.jourautono23.toString().toLowerCase().includes(target.value.toLowerCase())) ||
                    (x.soutagedegazoil23 && x.soutagedegazoil23.toString().toLowerCase().includes(target.value.toLowerCase())) ||
                    (x.quantiteconsomme23 && x.quantiteconsomme23.toString().toLowerCase().includes(target.value.toLowerCase())) ||
                    (x.quantitetransbordée23 && x.quantitetransbordée23.toString().toLowerCase().includes(target.value.toLowerCase())) ||
                    (x.quantitereçue23 && x.quantitereçue23.toString().toLowerCase().includes(target.value.toLowerCase())) ||
                    (x.nombredimmobilisationescale23 && x.nombredimmobilisationescale23.toString().toLowerCase().includes(target.value.toLowerCase())) ||
                    (x.nombredimmobilisationmer23 && x.nombredimmobilisationmer23.toString().toLowerCase().includes(target.value.toLowerCase())) ||
                    (x.prixdegazoil23 && x.prixdegazoil23.toString().toLowerCase().includes(target.value.toLowerCase()))
                )
                
                  
                

                
                 
              );
          },
        });
      };
      
      
      
      const calculateDateProchaineSoutage = (datedesortie23, jourautono23) => {
        const dateDesSortie = new Date(datedesortie23);
        const daysToAdd = parseInt(jourautono23, 10); // Subtract 1 day
        dateDesSortie.setDate(dateDesSortie.getDate() + daysToAdd);
        return dateDesSortie.toISOString().split('T')[0]; // Format as YYYY-MM-DD
    };
    
    
    
    
    
    
      
              
     
      


      
   
    const addOrEdit = (employee23, resetForm) => {
        const { quantiteabord23, quantitelivree23, datedesortie23, nombredimmobilisationescale23, nombredimmobilisationmer23, quantitereçue23, consmyne23, stabilite23 } = employee23;
    
        // Calculate quantitetotal
        const quantitetotal23 = quantitereçue23
            ? parseFloat(quantiteabord23) + parseFloat(quantitelivree23) + parseFloat(quantitereçue23)
            : parseFloat(quantiteabord23) + parseFloat(quantitelivree23);
    
        // Calculate jourautono23 using the formula ((quantiteTotal23 - stabilite23) / consmyne23) / 1000
        const jourautono23 = Math.floor(((quantitetotal23 - stabilite23) / consmyne23) / 1000);
    
        // Format jourautono23 without commas
        const formattedJourAutono23 = jourautono23.toLocaleString('en-US', { useGrouping: false });
    
        const dateprochainesoutage23 = calculateDateProchaineSoutage(datedesortie23, jourautono23);
    
        // Create a new employee object with quantitetotal and jourautono23 included
        const updatedEmployee = { ...employee23, quantitetotal23, jourautono23: formattedJourAutono23, dateprochainesoutage23 };
        if (employee23.id === 0) {
            EmployeeServiceDades.createEmployee(updatedEmployee)
                .then(() => {
                    resetForm();
                    setRecordForEdit(null);
                    setOpenPopup(false);
    
                    setEmployees((prevEmployees) => [...prevEmployees, updatedEmployee]);
                    localStorage.setItem(
                        'employees23',
                        JSON.stringify([...employees23, updatedEmployee])
                    );
    
                    // Update the total quantities
                    updateQuantities([...employees23, updatedEmployee]);
    
                    setNotify({
                        isOpen: true,
                        message: 'Submitted Successfully',
                        type: 'success',
                    });
                });
        } else {
            EmployeeServiceDades.updateEmployee(updatedEmployee)
                .then(() => {
                    resetForm();
                    setRecordForEdit(null);
                    setOpenPopup(false);
    
                    const index = employees23.findIndex((emp) => emp.id === employee23.id);
                    const updatedEmployees = [...employees23];
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
          await EmployeeServiceDades.deleteEmployee(id);
      
          // Update the state after successful deletion
          const updatedEmployees = employees23.filter((emp) => emp.id !== id);
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
          (total, emp) => total + parseFloat(emp.quantiteabord23),
          0
        );
        const newQuantiteLivree = employeeList.reduce(
          (total, emp) => total + parseFloat(emp.quantitelivree23),
          0
        );
        const newQuantiteTotal = newQuantiteAbord + newQuantiteLivree;
      
        // Update state with new quantities
        setQuantiteAbord23(newQuantiteAbord);
        setQuantiteLivree23(newQuantiteLivree);
        setQuantiteTotal23(newQuantiteTotal);
        
        
        
      };
    
     
      
      useEffect(() => {
        // Initialize columnVisibility state based on headCells
        const initialVisibility = {};
        headCells.forEach((cell) => {
          // Set the visibility and iconState based on the initial value in headCells
          initialVisibility[cell.id] = {
            visible: cell.visible, // Set the visibility based on the initial value in headCells
            iconState: cell.visible, // Set the switch icon state based on the initial value in headCells
          };
        });
        setColumnVisibility(initialVisibility);
      }, []);
      
  
  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleColumnToggle = (id) => {
    setColumnVisibility((prevVisibility) => ({
      ...prevVisibility,
      [id]: !prevVisibility[id],
    }));
  };

  const renderTableHeader = () => {
    return headCells.map((headCell) => (
      <TableCell
        key={headCell.id}
        style={{
          display: columnVisibility[headCell.id] ? 'table-cell' : 'none',
        }}
        onClick={() => headCell.disableSorting ? null : handleSort(headCell.id)}
      >
        {headCell.label}
        {orderByColumn === headCell.id && (
          <span>{orderByDirection === 'asc' ? '↑' : '↓'}</span>
        )}
      </TableCell>
    ));
  };
  
  const sortedRecords = orderBy(
    recordsAfterPagingAndSorting(),
    [orderByColumn],
    [orderByDirection]
  );
  
  const openInPopup = (employee23, link) => {
    setRecordForEdit(employee23);
    setClickedLink(link);
    setOpenPopup(true);
  };
  const handleSort = (columnId) => {
    if (orderByColumn === columnId) {
      // Toggle between 'asc' and 'desc' if the same column is clicked again
      setOrderByDirection(orderByDirection === 'asc' ? 'desc' : 'asc');
    } else {
      // Set the new column and default to 'asc'
      setOrderByColumn(columnId);
      setOrderByDirection('asc');
    }
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
      <Header title=" DADES  " subtitle="ASTIPECHE" />
      </Box>
      <Button
  variant="contained"
  color="primary"
  onClick={() => navigate('/Dadeschart')}
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


        <ExportExcel23 records={employees23} darkMode={darkMode} />
       
      <IconButton aria-controls="column-menu" aria-haspopup="true" onClick={handleMenuOpen}>
        <ViewColumnIcon />
      </IconButton>
      <Menu id="column-menu" anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={handleMenuClose}>
        {headCells.map((headCell) => (
          <MenuItem key={headCell.id}>
            <FormControlLabel
              control={<Switch checked={columnVisibility[headCell.id]} onChange={() => handleColumnToggle(headCell.id)} />}
              label={headCell.label}
            />
          </MenuItem>
        ))}
      </Menu>
      </Toolbar>
      
      <Toolbar>
      <Table>
      <div style={{ overflowX: 'auto' }}>
          <TblContainer className={classes.tableContainer} >
        <TableHead darkMode={darkMode}>
          <TableRow>{renderTableHeader()}</TableRow>
        </TableHead>
       
        <TableBody>
          
        {sortedRecords
    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
    .map((employee23) => (
    <TableRow key={employee23.id}>
           <TableCell
          style={{
            display: columnVisibility['datedesoutage23'] ? 'table-cell' : 'none',
          }}
          className={`${classes.tableCell} ${darkMode ? classes.tableCellDarkMode : ''}`}
        >
          {new Date(employee23.datedesoutage23).toLocaleDateString('en-GB')}
        </TableCell>
        <TableCell
          style={{
            display: columnVisibility['datedesortie23'] ? 'table-cell' : 'none',
          }}
          className={`${classes.tableCell} ${darkMode ? classes.tableCellDarkMode : ''}`}
        >
          {new Date(employee23.datedesortie23).toLocaleDateString('en-GB')}
        </TableCell>

                   
      
                    
                    <TableCell
                    style={{
                        display: columnVisibility['quantitelivree23'] ? 'table-cell' : 'none',
                      }}
                       className={`${classes.tableCell} ${darkMode ? classes.tableCellDarkMode : ''}`}>{employee23.quantitelivree23}</TableCell>
       <TableCell
                    style={{
                        display: columnVisibility['quantiteabord23'] ? 'table-cell' : 'none',
                      }}
                       className={`${classes.tableCell} ${darkMode ? classes.tableCellDarkMode : ''}`}>{employee23.quantiteabord23}</TableCell>
                    <TableCell style={{
                        display: columnVisibility['quantitetotal23'] ? 'table-cell' : 'none',
                      }}
                      className={`${classes.tableCell} ${darkMode ? classes.tableCellDarkMode : ''}`}>{employee23.quantitetotal23}</TableCell>
                    <TableCell style={{
                        display: columnVisibility['stabilite23'] ? 'table-cell' : 'none',
                      }}className={`${classes.tableCell} ${darkMode ? classes.tableCellDarkMode : ''}`}>{employee23.stabilite23}</TableCell>
                    
      <TableCell style={{
                        display: columnVisibility['consmyne23'] ? 'table-cell' : 'none',
                      }} className={`${classes.tableCell} ${darkMode ? classes.tableCellDarkMode : ''}`}>{employee23.consmyne23}</TableCell>
                     <TableCell
                  style={{
                    display: columnVisibility['jourautono23'] ? 'table-cell' : 'none',
                  }}
                  className={`${classes.tableCell} ${darkMode ? classes.tableCellDarkMode : ''}`}
                >
                {employee23.jourautono23}

                </TableCell>
                <TableCell
  style={{
    display: columnVisibility['dateprochainesoutage23'] ? 'table-cell' : 'none',
    color: new Date(employee23.dateprochainesoutage23) <= new Date() ? '#ff0000' : '#008000', // Red for past dates, green for future dates
  }}
  className={`${classes.tableCell} ${
    darkMode ? classes.tableCellDarkMode : ''
  }`}
>
  {new Date(employee23.dateprochainesoutage23).toLocaleDateString('en-GB')}
</TableCell>


                    <TableCell style={{
                        display: columnVisibility['soutagedegazoil23'] ? 'table-cell' : 'none',
                      }} className={`${classes.tableCell} ${darkMode ? classes.tableCellDarkMode : ''}`}>{employee23.soutagedegazoil23}</TableCell>
                  
                    <TableCell style={{
                        display: columnVisibility['quantiteconsomme23'] ? 'table-cell' : 'none',
                      }}className={`${classes.tableCell} ${darkMode ? classes.tableCellDarkMode : ''}`}>{employee23.quantiteconsomme23}</TableCell>
                    <TableCell className={`${classes.tableCell} ${darkMode ? classes.tableCellDarkMode : ''}`}>{employee23.quantitetransbordée23}</TableCell>
                    <TableCell className={`${classes.tableCell} ${darkMode ? classes.tableCellDarkMode : ''}`}>{employee23.quantitereçue23}</TableCell>
                    <TableCell className={`${classes.tableCell} ${darkMode ? classes.tableCellDarkMode : ''}`}>{employee23.nombredimmobilisationescale23}</TableCell>
                    <TableCell className={`${classes.tableCell} ${darkMode ? classes.tableCellDarkMode : ''}`}>{employee23.nombredimmobilisationmer23}</TableCell>

               
                    <TableCell style={{
                        display: columnVisibility['prixdegazoil23'] ? 'table-cell' : 'none',
                      }}className={`${classes.tableCell} ${darkMode ? classes.tableCellDarkMode : ''}`}>
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
                    {employee23.prixdegazoil23}
                  </a>
                </TableCell>

                    <TableCell>
                      <Controls.ActionButton
                        color="primary"
                        onClick={() => { openInPopup(employee23) }}
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
                            onConfirm: () => { onDelete(employee23.id) }
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
      </div>
      </Table>
      </Toolbar>
      <TblPagination
            rowsPerPageOptions={[5, 10, 25]}
            count={employees23.length}
            rowsPerPage={rowsPerPage}
            page={page}
            setPage={setPage}
            setRowsPerPage={setRowsPerPage}
          />
      </Paper>
      <Popup
        title="Dades Form"
        openPopup={openPopup}
        setOpenPopup={setOpenPopup}
      >
        <DadesForm
          recordForEdit={recordForEdit}
          addOrEdit={addOrEdit}
        />
      </Popup>
      <Popup
    title="Column Selection"
    openPopup={openColumnMenu}
    setOpenPopup={setOpenColumnMenu}
    onClose={handleColumnMenuClose}
  >
    {/* Add checkboxes for each column */}
    {headCells.map((headCell) => (
      <Controls.Checkbox
        key={headCell.id}
        label={headCell.label}
        checked={columnVisibility[headCell.id]}
        onChange={(e) => setColumnVisibility({ ...columnVisibility, [headCell.id]: e.target.checked })}
      />
    ))}
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
};

export default Dades;
