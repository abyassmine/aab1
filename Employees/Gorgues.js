import React, { useState, useEffect } from 'react';
import Maranda6Form from "./Maranda6Form";
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
import ExportExcel11 from './ExportExcel11';

import EmployeeServiceGorgues from './../services/EmployeeServiceGorgues';
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
import GorguesForm from './GorguesForm';

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
    { id: 'datedesoutage11', label: 'DATE DE SOUTAGE', visible: false },
    { id: 'datedesortie11', label: 'DATE DE SORTIE', visible: false },
    { id: 'quantitelivree11', label: 'Quantité Livrée', visible: false },
    { id: 'quantiteabord11', label: 'Quantité A bord', visible: false },
    { id: 'quantitetotal11', label: 'Quantité Total', visible: false },
    { id: 'stabilite11', label: 'STABILITE', visible: false },
    { id: 'consmyne11', label: 'cons.Myne ', visible: false },
    { id: 'jourautono11', label: 'Jour.Autono ', visible: false },
    { id: 'dateprochainesoutage11', label: 'DATE PROCHAINE SOUTAGE ', visible: false },
    { id: 'soutagedegazoil11', label: 'SOUTAGE DE GASOIL ', visible: false },
    { id: 'quantiteconsomme11', label: 'Quantité Consommée Pendant Lescale', visible: false },
    { id: 'quantitetransbordée11', label: 'Quantité Transbordée', visible: false },
    { id: 'quantitereçue11', label: 'Quantité Reçue', visible: false },
    { id: 'nombredimmobilisationescale11', label: 'Nombre hrs dImmobilisation en escale au port', visible: false },
    { id: 'nombredimmobilisationmer11', label: 'Nombre hrs dImmobilisation en haute mer', visible: false },
    { id: 'prixdegazoil11', label: 'PRIX DE GAZOIL', visible: false },
    
    
    { id: 'actions', label: 'Actions', disableSorting: true , visible: false }
];


const Gorgues = () => {
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
  const [quantiteAbord11, setQuantiteAbord] = useState(0);
    const [quantiteLivree11, setQuantiteLivree] = useState(0);
    const [quantiteTotal11, setQuantiteTotal] = useState(0);
  const navigate = useNavigate();
  const [orderByColumn, setOrderByColumn] = useState(''); // Initialize with an empty string or the default column
  const [orderByDirection, setOrderByDirection] = useState('asc');
  const [recordForEdit, setRecordForEdit] = useState(null);
    const [records, setRecords] = useState(EmployeeServiceGorgues.getAllEmployees());
    const [filterFn, setFilterFn] = useState({ fn: (employees11) => { return employees11; } });
    const [openPopup, setOpenPopup] = useState(false);
    const [notify, setNotify] = useState({ isOpen: false, message: '', type: '' });
    const [confirmDialog, setConfirmDialog] = useState({ isOpen: false, title: '', subTitle: '' });
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5); // Update the number of rows per page
    const [employees11, setEmployees] = useState([]);
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
        EmployeeServiceGorgues.getAllEmployees()
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
          await EmployeeServiceGorgues.deleteEmployee(id);
      
          // Update the state after successful deletion
          const updatedEmployees = employees11.filter(emp => emp.id !== id);
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
        const storedEmployees = JSON.parse(localStorage.getItem('employees11'));
      
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
      } = useTable(employees11, headCells, filterFn);
    
      const handleSearch = (e) => {
        let target = e.target;
        setFilterFn({
          fn: (employees11) => {
            if (target.value === "") return employees11;
            else
              return employees11.filter(
                (x) =>
                  x &&
                  ((x.datedesoutage11 && x.datedesoutage11.toString().toLowerCase().includes(target.value.toLowerCase())) ||
                  (x.datedesortie11 && x.datedesortie11.toString().toLowerCase().includes(target.value.toLowerCase())) ||
                  (x.dateprochainesoutage11 && x.dateprochainesoutage11.toString().toLowerCase().includes(target.value.toLowerCase())) ||
                  (x.quantitelivree11 && x.quantitelivree11.toString().toLowerCase().includes(target.value.toLowerCase())) ||
                  (x.quantiteabord11 && x.quantiteabord11.toString().toLowerCase().includes(target.value.toLowerCase())) ||
                  (x.quantitetotal11 && x.quantitetotal11.toString().toLowerCase().includes(target.value.toLowerCase())) ||
                  (x.stabilite11 && x.stabilite11.toString().toLowerCase().includes(target.value.toLowerCase())) ||
                  (x.consmyne11 && x.consmyne11.toString().toLowerCase().includes(target.value.toLowerCase())) ||
                  (x.jourautono11 && x.jourautono11.toString().toLowerCase().includes(target.value.toLowerCase())) ||
                  (x.soutagedegazoil11 && x.soutagedegazoil11.toString().toLowerCase().includes(target.value.toLowerCase())) ||
                  (x.quantiteconsomme11 && x.quantiteconsomme11.toString().toLowerCase().includes(target.value.toLowerCase())) ||
                  (x.quantitetransbordée11 && x.quantitetransbordée11.toString().toLowerCase().includes(target.value.toLowerCase())) ||
                  (x.quantitereçue11 && x.quantitereçue11.toString().toLowerCase().includes(target.value.toLowerCase())) ||
                  (x.nombredimmobilisationescale11 && x.nombredimmobilisationescale11.toString().toLowerCase().includes(target.value.toLowerCase())) ||
                  (x.nombredimmobilisationmer11 && x.nombredimmobilisationmer11.toString().toLowerCase().includes(target.value.toLowerCase())) ||
                  (x.prixdegazoil11 && x.prixdegazoil11.toString().toLowerCase().includes(target.value.toLowerCase()))
                 
                 
            
                  )
              );
          },
        });
      };
      
      
      
      const calculateDateProchaineSoutage = (datedesortie11, jourautono11) => {
        const dateDesSortie = new Date(datedesortie11);
        const daysToAdd = parseInt(jourautono11, 10) ; // Subtract 1 day
        dateDesSortie.setDate(dateDesSortie.getDate() + daysToAdd);
        return dateDesSortie.toISOString().split('T')[0]; // Format as YYYY-MM-DD
    };
    
      
              
     
      


      
   
      
    const addOrEdit = (employee11, resetForm) => {
      const { quantiteabord11, quantitelivree11, datedesortie11, nombredimmobilisationescale11, nombredimmobilisationmer11, quantitereçue11, consmyne11, stabilite11,quantitetransbordée11 } = employee11;
  
      // Calculate quantitetotal
      let quantitetotal11;

      if (quantitereçue11) {
        quantitetotal11 = parseFloat(quantiteabord11) + parseFloat(quantitelivree11) + parseFloat(quantitereçue11);
      } else if (quantitetransbordée11) {
        quantitetotal11 = parseFloat(quantiteabord11) + parseFloat(quantitelivree11) - parseFloat(quantitetransbordée11);
      } else {
        quantitetotal11 = parseFloat(quantiteabord11) + parseFloat(quantitelivree11);
      }
      
      // Calculate jourautono11 using the formula ((quantiteTotal11 - stabilite11) / consmyne11) / 1000
      const jourautono11 = Math.floor(((quantitetotal11 - stabilite11) / consmyne11) / 1000);
  
      // Format jourautono11 without commas
      const formattedJourAutono11 = jourautono11.toLocaleString('en-US', { useGrouping: false });
  
      const dateprochainesoutage11 = calculateDateProchaineSoutage(datedesortie11, jourautono11);
  
      // Create a new employee object with quantitetotal and jourautono11 included
      const updatedEmployee = { ...employee11, quantitetotal11, jourautono11: formattedJourAutono11, dateprochainesoutage11 };
      if (employee11.id === 0) {
        EmployeeServiceGorgues
              .createEmployee(updatedEmployee)
              .then(() => {
                  resetForm();
                  setRecordForEdit(null);
                  setOpenPopup(false);
  
                  setEmployees((prevEmployees) => [...prevEmployees, updatedEmployee]);
                  localStorage.setItem(
                      'employees11',
                      JSON.stringify([...employees11, updatedEmployee])
                  );
  
                  // Update the total quantities
                  updateQuantities([...employees11, updatedEmployee]);
  
                  setNotify({
                      isOpen: true,
                      message: 'Submitted Successfully',
                      type: 'success',
                  });
  
              });
      } else {
        EmployeeServiceGorgues.updateEmployee(updatedEmployee)
              .then(() => {
                  resetForm();
                  setRecordForEdit(null);
                  setOpenPopup(false);
  
                  const index = employees11.findIndex((emp) => emp.id === employee11.id);
                  const updatedEmployees = [...employees11];
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
          await EmployeeServiceGorgues.deleteEmployee(id);
      
          // Update the state after successful deletion
          const updatedEmployees = employees11.filter((emp) => emp.id !== id);
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
          (total, emp) => total + parseFloat(emp.quantiteabord11),
          0
        );
        const newQuantiteLivree = employeeList.reduce(
          (total, emp) => total + parseFloat(emp.quantitelivree11),
          0
        );
        const newQuantiteTotal = newQuantiteAbord + newQuantiteLivree;
      
        // Update state with new quantities
        setQuantiteAbord(newQuantiteAbord);
        setQuantiteLivree(newQuantiteLivree);
        setQuantiteTotal(newQuantiteTotal);
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
  
  const openInPopup = (employee11, link) => {
    setRecordForEdit(employee11);
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
          <Header title=" GORGUES  " subtitle="ASTIPECHE TANGER" />
        </Box>
        <Button
          variant="contained"
          color="primary"
          onClick={() => navigate('/gorgueschart')}
          style={{ marginLeft: '600px' }}
        >
          View  Chart
        </Button>
        <Paper
          className={`${classes.pageContent} ${darkMode ? classes.darkMode : ''}`}
          style={{ borderColor: borderColor }} // Add this line to set the border color
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
              style={{ backgroundColor: buttonColor, }}
              onClick={() => { setOpenPopup(true); setRecordForEdit(null); }}
            />
  
            <ExportExcel11 records={employees11} darkMode={darkMode} />
  
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
                      .map((employee11) => (
                        <TableRow key={employee11.id}>
                          <TableCell
                            style={{
                              display: columnVisibility['datedesoutage11'] ? 'table-cell' : 'none',
                            }}
                            className={`${classes.tableCell} ${darkMode ? classes.tableCellDarkMode : ''}`}
                          >
                            {new Date(employee11.datedesoutage11).toLocaleDateString('en-GB')}
                          </TableCell>
                          <TableCell
                            style={{
                              display: columnVisibility['datedesortie11'] ? 'table-cell' : 'none',
                            }}
                            className={`${classes.tableCell} ${darkMode ? classes.tableCellDarkMode : ''}`}
                          >
                            {new Date(employee11.datedesortie11).toLocaleDateString('en-GB')}
                          </TableCell>
  
                          <TableCell
                            style={{
                              display: columnVisibility['quantitelivree11'] ? 'table-cell' : 'none',
                            }}
                            className={`${classes.tableCell} ${darkMode ? classes.tableCellDarkMode : ''}`}>{employee11.quantitelivree11}</TableCell>
                          <TableCell
                            style={{
                              display: columnVisibility['quantiteabord11'] ? 'table-cell' : 'none',
                            }}
                            className={`${classes.tableCell} ${darkMode ? classes.tableCellDarkMode : ''}`}>{employee11.quantiteabord11}</TableCell>
                          <TableCell style={{
                            display: columnVisibility['quantitetotal11'] ? 'table-cell' : 'none',
                          }}
                            className={`${classes.tableCell} ${darkMode ? classes.tableCellDarkMode : ''}`}>{employee11.quantitetotal11}</TableCell>
                          <TableCell style={{
                            display: columnVisibility['stabilite11'] ? 'table-cell' : 'none',
                          }} className={`${classes.tableCell} ${darkMode ? classes.tableCellDarkMode : ''}`}>{employee11.stabilite11}</TableCell>
  
                          <TableCell style={{
                            display: columnVisibility['consmyne11'] ? 'table-cell' : 'none',
                          }} className={`${classes.tableCell} ${darkMode ? classes.tableCellDarkMode : ''}`}>{employee11.consmyne11}</TableCell>
                          <TableCell
                            style={{
                              display: columnVisibility['jourautono11'] ? 'table-cell' : 'none',
                            }}
                            className={`${classes.tableCell} ${darkMode ? classes.tableCellDarkMode : ''}`}
                          >
                            {employee11.jourautono11}
  
                          </TableCell>
                          <TableCell
  style={{
    display: columnVisibility['dateprochainesoutage11'] ? 'table-cell' : 'none',
    color: new Date(employee11.dateprochainesoutage11) <= new Date() ? '#ff0000' : '#008000', // Red for past dates, green for future dates
  }}
  className={`${classes.tableCell} ${
    darkMode ? classes.tableCellDarkMode : ''
  }`}
>
  {new Date(employee11.dateprochainesoutage11).toLocaleDateString('en-GB')}
</TableCell>
  
                          <TableCell style={{
                            display: columnVisibility['soutagedegazoil11'] ? 'table-cell' : 'none',
                          }} className={`${classes.tableCell} ${darkMode ? classes.tableCellDarkMode : ''}`}>{employee11.soutagedegazoil11}</TableCell>
  
                          <TableCell style={{
                            display: columnVisibility['quantiteconsomme11'] ? 'table-cell' : 'none',
                          }} className={`${classes.tableCell} ${darkMode ? classes.tableCellDarkMode : ''}`}>{employee11.quantiteconsomme11}</TableCell>
                          <TableCell className={`${classes.tableCell} ${darkMode ? classes.tableCellDarkMode : ''}`}>{employee11.quantitetransbordée11}</TableCell>
                          <TableCell className={`${classes.tableCell} ${darkMode ? classes.tableCellDarkMode : ''}`}>{employee11.quantitereçue11}</TableCell>
                          <TableCell className={`${classes.tableCell} ${darkMode ? classes.tableCellDarkMode : ''}`}>{employee11.nombredimmobilisationescale11}</TableCell>
                          <TableCell className={`${classes.tableCell} ${darkMode ? classes.tableCellDarkMode : ''}`}>{employee11.nombredimmobilisationmer11}</TableCell>
  
                          <TableCell style={{
                            display: columnVisibility['prixdegazoil11'] ? 'table-cell' : 'none',
                          }} className={`${classes.tableCell} ${darkMode ? classes.tableCellDarkMode : ''}`}>
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
                                    <div className="card" style={{ width: '240px' }}>
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
                              {employee11.prixdegazoil11}
                            </a>
                          </TableCell>
  
                          <TableCell>
                            <Controls.ActionButton
                              color="primary"
                              onClick={() => { openInPopup(employee11) }}
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
                                  onConfirm: () => { onDelete(employee11.id) }
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
            count={employees11.length}
            rowsPerPage={rowsPerPage}
            page={page}
            setPage={setPage}
            setRowsPerPage={setRowsPerPage}
          />
        </Paper>
        <Popup
          title="GORGUES Form"
          openPopup={openPopup}
          setOpenPopup={setOpenPopup}
        >
          <GorguesForm
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

export default Gorgues;
