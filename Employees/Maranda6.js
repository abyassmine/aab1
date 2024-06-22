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
import ExportExcel8 from './ExportExcel8';

import EmployeeServiceMaranda6 from './../services/EmployeeServiceMaranda6';
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
    { id: 'datedesoutage8', label: 'DATE DE SOUTAGE', visible: false },
    { id: 'datedesortie8', label: 'DATE DE SORTIE', visible: false },
    { id: 'quantitelivree8', label: 'Quantité Livrée', visible: false   },
    { id: 'quantiteabord8', label: 'Quantité A bord' , visible: false  },
    { id: 'quantitetotal8', label: 'Quantité Total', visible: false   },
    { id: 'stabilite8', label: 'STABILITE', visible: false   },
    { id: 'consmyne8', label: 'cons.Myne ', visible: false  },
    { id: 'jourautono8', label: 'Jour.Autono ', visible: false  },
    { id: 'dateprochainesoutage8', label: 'DATE PROCHAINE SOUTAGE ', visible: false  },
    { id: 'soutagedegazoil8', label: 'SOUTAGE DE GASOIL ', visible: false  },
    { id: 'quantiteconsomme8', label: 'Quantité Consommée Pendant Lescale' , visible: false },
    { id: ' quantitetransbordée8', label: 'Quantité Transbordée', visible: false  },
    { id: ' quantitereçue8', label: 'Quantité Reçue', visible: false  },
    { id: ' nombredimmobilisationescale8', label: 'Nombre hrs dImmobilisation en escale au port', visible: false  },
    { id: ' nombredimmobilisationmer8', label: 'Nombre hrs dImmobilisation en haute mer', visible: false  },
    { id: 'prixdegazoil8', label: 'PRIX DE GAZOIL', visible: false  },

    { id: 'actions', label: 'Actions', disableSorting: true , visible: false }
];


const Maranda6 = () => {
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
  const [quantiteAbord8, setQuantiteAbord] = useState(0);
    const [quantiteLivree8, setQuantiteLivree] = useState(0);
    const [quantiteTotal8, setQuantiteTotal] = useState(0);
  const navigate = useNavigate();
  const [orderByColumn, setOrderByColumn] = useState(''); // Initialize with an empty string or the default column
  const [orderByDirection, setOrderByDirection] = useState('asc');
  const [recordForEdit, setRecordForEdit] = useState(null);
    const [records, setRecords] = useState(EmployeeServiceMaranda6.getAllEmployees());
    const [filterFn, setFilterFn] = useState({ fn: (employees8) => { return employees8; } });
    const [openPopup, setOpenPopup] = useState(false);
    const [notify, setNotify] = useState({ isOpen: false, message: '', type: '' });
    const [confirmDialog, setConfirmDialog] = useState({ isOpen: false, title: '', subTitle: '' });
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5); // Update the number of rows per page
    const [employees8, setEmployees] = useState([]);
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
        EmployeeServiceMaranda6.getAllEmployees()
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
          await EmployeeServiceMaranda6.deleteEmployee(id);
      
          // Update the state after successful deletion
          const updatedEmployees = employees8.filter(emp => emp.id !== id);
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
        const storedEmployees = JSON.parse(localStorage.getItem('employees8'));
      
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
      } = useTable(employees8, headCells, filterFn);
    
      const handleSearch = (e) => {
        let target = e.target;
        setFilterFn({
          fn: (employees8) => {
            if (target.value === "") return employees8;
            else
              return employees8.filter(
                (x) =>
                  x &&
                  ((x.datedesoutage8 && x.datedesoutage8.toString().toLowerCase().includes(target.value.toLowerCase())) ||
                  (x.datedesortie8 && x.datedesortie8.toString().toLowerCase().includes(target.value.toLowerCase())) ||
                  (x.dateprochainesoutage8 && x.dateprochainesoutage8.toString().toLowerCase().includes(target.value.toLowerCase())) ||
                  (x.quantitelivree8 && x.quantitelivree8.toString().toLowerCase().includes(target.value.toLowerCase())) ||
                  (x.quantiteabord8 && x.quantiteabord8.toString().toLowerCase().includes(target.value.toLowerCase())) ||
                  (x.quantitetotal8 && x.quantitetotal8.toString().toLowerCase().includes(target.value.toLowerCase())) ||
                  (x.stabilite8 && x.stabilite8.toString().toLowerCase().includes(target.value.toLowerCase())) ||
                  (x.consmyne8 && x.consmyne8.toString().toLowerCase().includes(target.value.toLowerCase())) ||
                  (x.jourautono8 && x.jourautono8.toString().toLowerCase().includes(target.value.toLowerCase())) ||
                  (x.soutagedegazoil8 && x.soutagedegazoil8.toString().toLowerCase().includes(target.value.toLowerCase())) ||
                  (x.quantiteconsomme8 && x.quantiteconsomme8.toString().toLowerCase().includes(target.value.toLowerCase())) ||
                  (x.quantitetransbordée8 && x.quantitetransbordée8.toString().toLowerCase().includes(target.value.toLowerCase())) ||
                  (x.quantitereçue8 && x.quantitereçue8.toString().toLowerCase().includes(target.value.toLowerCase())) ||
                  (x.nombredimmobilisationescale8 && x.nombredimmobilisationescale8.toString().toLowerCase().includes(target.value.toLowerCase())) ||
                  (x.nombredimmobilisationmer8 && x.nombredimmobilisationmer8.toString().toLowerCase().includes(target.value.toLowerCase())) ||
                  (x.prixdegazoil8 && x.prixdegazoil8.toString().toLowerCase().includes(target.value.toLowerCase()))
                 
            
                  )
              );
          },
        });
      };
      
      
      
      const calculateDateProchaineSoutage = (datedesortie8, jourautono8) => {
        const dateDesSortie = new Date(datedesortie8);
        const daysToAdd = parseInt(jourautono8, 10) ; // Subtract 1 day
        dateDesSortie.setDate(dateDesSortie.getDate() + daysToAdd);
        return dateDesSortie.toISOString().split('T')[0]; // Format as YYYY-MM-DD
      };
    
      
              
     
      


      
   
      const addOrEdit = (employee8, resetForm) => {
        const { quantiteabord8, quantitelivree8, datedesortie8, nombredimmobilisationescale8, nombredimmobilisationmer8, quantitereçue8, consmyne8, stabilite8,quantitetransbordée8 } = employee8;
      
        // Calculate quantitetotal
        const quantitetotal8 = quantitereçue8
          ? parseFloat(quantiteabord8) + parseFloat(quantitelivree8) + parseFloat(quantitereçue8)
          : parseFloat(quantiteabord8) + parseFloat(quantitelivree8);
          if (quantitetransbordée8) {
            quantitetotal8 -= parseFloat(quantitetransbordée8);
          }
        
        // Calculate jourautono8 using the formula ((quantiteTotal8 - stabilite8) / consmyne8) / 1000
        const jourautono8 = Math.floor(((quantitelivree8) / consmyne8) / 1000);
      
        // Format jourautono8 without commas
        const formattedJourAutono8 = jourautono8.toLocaleString('en-US', { useGrouping: false });
      
        const dateprochainesoutage8 = calculateDateProchaineSoutage(datedesortie8, jourautono8);
      
        // Create a new employee object with quantitetotal and jourautono8 included
        const updatedEmployee = { ...employee8, quantitetotal8, jourautono8: formattedJourAutono8, dateprochainesoutage8 };
        if (employee8.id === 0) {
          EmployeeServiceMaranda6
            .createEmployee(updatedEmployee)
            .then(() => {
              resetForm();
              setRecordForEdit(null);
              setOpenPopup(false);
      
              setEmployees((prevEmployees) => [...prevEmployees, updatedEmployee]);
              localStorage.setItem(
                'employees8',
                JSON.stringify([...employees8, updatedEmployee])
              );
      
              // Update the total quantities
              updateQuantities([...employees8, updatedEmployee]);
      
              setNotify({
                isOpen: true,
                message: 'Submitted Successfully',
                type: 'success',
              });
      
            });
        } else {
          EmployeeServiceMaranda6.updateEmployee(updatedEmployee)
            .then(() => {
              resetForm();
              setRecordForEdit(null);
              setOpenPopup(false);
      
              const index = employees8.findIndex((emp) => emp.id === employee8.id);
              const updatedEmployees = [...employees8];
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
          await EmployeeServiceMaranda6.deleteEmployee(id);
      
          // Update the state after successful deletion
          const updatedEmployees = employees8.filter((emp) => emp.id !== id);
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
          (total, emp) => total + parseFloat(emp.quantiteabord8),
          0
        );
        const newQuantiteLivree = employeeList.reduce(
          (total, emp) => total + parseFloat(emp.quantitelivree8),
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
  
  const openInPopup = (employee8, link) => {
    setRecordForEdit(employee8);
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
          <Header title=" MARANDA6  " subtitle="MAROC ANDALOUSIE DE PECHE" />
        </Box>
        <Button
          variant="contained"
          color="primary"
          onClick={() => navigate('/Maranda6chart')}
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
  
            <ExportExcel8 records={employees8} darkMode={darkMode} />
  
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
                      .map((employee8) => (
                        <TableRow key={employee8.id}>
                          <TableCell
                            style={{
                              display: columnVisibility['datedesoutage8'] ? 'table-cell' : 'none',
                            }}
                            className={`${classes.tableCell} ${darkMode ? classes.tableCellDarkMode : ''}`}
                          >
                            {new Date(employee8.datedesoutage8).toLocaleDateString('en-GB')}
                          </TableCell>
                          <TableCell
                            style={{
                              display: columnVisibility['datedesortie8'] ? 'table-cell' : 'none',
                            }}
                            className={`${classes.tableCell} ${darkMode ? classes.tableCellDarkMode : ''}`}
                          >
                            {new Date(employee8.datedesortie8).toLocaleDateString('en-GB')}
                          </TableCell>
  
                          <TableCell
                            style={{
                              display: columnVisibility['quantitelivree8'] ? 'table-cell' : 'none',
                            }}
                            className={`${classes.tableCell} ${darkMode ? classes.tableCellDarkMode : ''}`}>{employee8.quantitelivree8}</TableCell>
                          <TableCell
                            style={{
                              display: columnVisibility['quantiteabord8'] ? 'table-cell' : 'none',
                            }}
                            className={`${classes.tableCell} ${darkMode ? classes.tableCellDarkMode : ''}`}>{employee8.quantiteabord8}</TableCell>
                          <TableCell style={{
                            display: columnVisibility['quantitetotal8'] ? 'table-cell' : 'none',
                          }}
                            className={`${classes.tableCell} ${darkMode ? classes.tableCellDarkMode : ''}`}>{employee8.quantitetotal8}</TableCell>
                          <TableCell style={{
                            display: columnVisibility['stabilite8'] ? 'table-cell' : 'none',
                          }} className={`${classes.tableCell} ${darkMode ? classes.tableCellDarkMode : ''}`}>{employee8.stabilite8}</TableCell>
  
                          <TableCell style={{
                            display: columnVisibility['consmyne8'] ? 'table-cell' : 'none',
                          }} className={`${classes.tableCell} ${darkMode ? classes.tableCellDarkMode : ''}`}>{employee8.consmyne8}</TableCell>
                          <TableCell
                            style={{
                              display: columnVisibility['jourautono8'] ? 'table-cell' : 'none',
                            }}
                            className={`${classes.tableCell} ${darkMode ? classes.tableCellDarkMode : ''}`}
                          >
                            {employee8.jourautono8}
  
                          </TableCell>
                          <TableCell
  style={{
    display: columnVisibility['dateprochainesoutage8'] ? 'table-cell' : 'none',
    color: new Date(employee8.dateprochainesoutage8) <= new Date() ? '#ff0000' : '#008000', // Red for past dates, green for future dates
  }}
  className={`${classes.tableCell} ${
    darkMode ? classes.tableCellDarkMode : ''
  }`}
>
  {new Date(employee8.dateprochainesoutage8).toLocaleDateString('en-GB')}
</TableCell>

                          <TableCell style={{
                            display: columnVisibility['soutagedegazoil8'] ? 'table-cell' : 'none',
                          }} className={`${classes.tableCell} ${darkMode ? classes.tableCellDarkMode : ''}`}>{employee8.soutagedegazoil8}</TableCell>
  
                          <TableCell style={{
                            display: columnVisibility['quantiteconsomme8'] ? 'table-cell' : 'none',
                          }} className={`${classes.tableCell} ${darkMode ? classes.tableCellDarkMode : ''}`}>{employee8.quantiteconsomme8}</TableCell>
                          <TableCell className={`${classes.tableCell} ${darkMode ? classes.tableCellDarkMode : ''}`}>{employee8.quantitetransbordée8}</TableCell>
                          <TableCell className={`${classes.tableCell} ${darkMode ? classes.tableCellDarkMode : ''}`}>{employee8.quantitereçue8}</TableCell>
                          <TableCell className={`${classes.tableCell} ${darkMode ? classes.tableCellDarkMode : ''}`}>{employee8.nombredimmobilisationescale8}</TableCell>
                          <TableCell className={`${classes.tableCell} ${darkMode ? classes.tableCellDarkMode : ''}`}>{employee8.nombredimmobilisationmer8}</TableCell>
  
                          <TableCell style={{
                            display: columnVisibility['prixdegazoil8'] ? 'table-cell' : 'none',
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
                              {employee8.prixdegazoil8}
                            </a>
                          </TableCell>
  
                          <TableCell>
                            <Controls.ActionButton
                              color="primary"
                              onClick={() => { openInPopup(employee8) }}
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
                                  onConfirm: () => { onDelete(employee8.id) }
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
            count={employees8.length}
            rowsPerPage={rowsPerPage}
            page={page}
            setPage={setPage}
            setRowsPerPage={setRowsPerPage}
          />
        </Paper>
        <Popup
          title="MARANDA6 Form"
          openPopup={openPopup}
          setOpenPopup={setOpenPopup}
        >
          <Maranda6Form
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

export default Maranda6;
