import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import EmployeeService from './DeclarationService';
import MaterialTable from 'material-table';
import SearchIcon from '@material-ui/icons/Search';
import GetAppIcon from '@material-ui/icons/GetApp';
import AddIcon from '@material-ui/icons/Add';
import TextField from '@material-ui/core/TextField';
import { Search } from '@material-ui/icons';
import Controls from './component/controls/Controls';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import DeclarationService from './DeclarationService';
import { Delete as DeleteIcon, ArrowUpward, ArrowDownward } from '@material-ui/icons';
import IconButton from '@material-ui/core/IconButton';
import { Link as RouterLink } from 'react-router-dom';
import FilterIcon from '@material-ui/icons/FilterList';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import LastPageIcon from '@material-ui/icons/LastPage';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import FirstPageIcon from '@material-ui/icons/FirstPage';
import ClearIcon from '@material-ui/icons/Clear';
import Header from '../componentss/Header';
import { Box, Button } from "@mui/material";
import './decla.css';
const ListEmployeeComponent = () => {
  const [declarations, setDeclarations] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    getAllDeclarations();
  }, []);

  const getAllDeclarations = () => {
    DeclarationService.getAllEmployees()
      .then((response) => {
        setDeclarations(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const deleteDeclaration = (declarationId) => {
    DeclarationService.deleteEmployee(declarationId)
      .then((response) => {
        getAllDeclarations();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredDeclarations = declarations.filter((declaration) => {
    return (
      (declaration.nom && declaration.nom.toLowerCase().includes(searchTerm.toLowerCase())) ||
      (declaration.subject && declaration.subject.toLowerCase().includes(searchTerm.toLowerCase())) ||
      (declaration.type && declaration.type.toLowerCase().includes(searchTerm.toLowerCase())) ||
      (declaration.description && declaration.description.toLowerCase().includes(searchTerm.toLowerCase())) 
      
    );
  });
  

  return (
    <Box m="20px">
      <Header title="Table Declaration" subtitle="Declaration Employees" />
      <div className="container">
        <div
          style={{
            display: 'flex',
            justifyContent: 'flex-start',
            marginBottom: '50px',
            marginLeft: '-60px',
            marginTop: '20px'
          }}
        ></div>

        <Button
          variant="contained"
          color="primary"
          onClick={() => {
            window.location.href = '/barChart2';
          }}
          style={{ marginBottom: '50px', backgroundColor: '#3da58a' }}
        >
          chart
        </Button>

        <MaterialTable
          style={{ width: '1200px', marginLeft: '-460px', backgroundColor: '#85adad', fontSize: '1rem', }}
          columns={[
            { title: 'Id', field: 'iddeclaration', width: 100 },
            { title: 'Username', field: 'nom', width: 150 },
            { title: 'Subject', field: 'subject', width: 200 },
            { title: 'Type', field: 'type', width: 150 },
            { title: 'Description', field: 'description', width: 300 },
            {
              title: 'Actions',
              field: 'actions',
              width: 300,
             
              render: (rowData) => (
                <>
                  <button
                    className="btn btn-danger"
                    onClick={() => deleteDeclaration(rowData.id)}
                    style={{ marginLeft: '10px', backgroundColor: '#3da58a' }}
                  >
                    Delete
                  </button>
                </>
              )
            }
          ]}
          data={filteredDeclarations}
          title=""
          options={{
            sorting: true,
            headerStyle: {
              backgroundColor: '#3e4396',
              fontSize: '1rem',
            },
            rowStyle: (declaration, index) => ({
              backgroundColor: index % 2 === 0 ? '#1f2a40' : '#1f2a40'
            }),
            renderSortIcon: ({ direction }) =>
              direction === 'desc' ? <ArrowDownward /> : <ArrowUpward />
          }}
          icons={{
            Search: () => <SearchIcon />,
            Filter: () => <FilterIcon />,
            SortArrow: ({ direction }) =>
              direction === 'asc' ? <ArrowUpwardIcon /> : <ArrowDownwardIcon />,
            NextPage: () => <ChevronRightIcon />,
            LastPage: () => <LastPageIcon />,
            PreviousPage: () => <ChevronLeftIcon />,
            FirstPage: () => <FirstPageIcon />,
            Clear: () => <ClearIcon />
          }}
        />

        {/* Render the Highcharts bar and line charts */}
      </div>
    </Box>
  );
};

export default ListEmployeeComponent;
