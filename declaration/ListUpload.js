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
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import { Paper, Toolbar, InputAdornment } from '@material-ui/core';
import './decla.css';
import { useLocation } from 'react-router-dom';
const ListUpload = () => {
  const [declarations, setDeclarations] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
const [bnOrder, setBnOrder] = useState([]);
const [rapportOrder, setRapportOrder] = useState([]);

const [selectedFiles, setSelectedFiles] = useState(
  JSON.parse(localStorage.getItem('selectedFiles')) || []
);

const [selectedFiles1, setSelectedFiles1] = useState(
  JSON.parse(localStorage.getItem('selectedFiles')) || []
);

const location = useLocation();

useEffect(() => {
  if (location.state && location.state.selectedFiles) {
    const newSelectedFiles = location.state.selectedFiles;

    // Create a new array for each newly selected file to maintain separate rows
    const updatedSelectedFiles = newSelectedFiles.map(file => [file]);

    // Concatenate existing selected files with new rows
    const mergedSelectedFiles = [...selectedFiles, ...updatedSelectedFiles];
    const storedFiles = JSON.parse(localStorage.getItem('selectedFiles')) || [];

    if (storedFiles.length > 0) {
      setSelectedFiles(storedFiles);
    }
    setSelectedFiles(mergedSelectedFiles);
  }
  getAllDeclarations();
}, [location.state]);
useEffect(() => {
  if (location.state && location.state.selectedFiles1) {
    // If selectedFiles1 exists in location state, update selectedFiles1 state
    const newSelectedFiles1 = location.state.selectedFiles1;
    // Your logic to handle and update selectedFiles1 state
  }
  getAllDeclarations();
}, [location.state]);
useEffect(() => {
  // Add event listener for beforeunload to clear 'selectedFiles' in localStorage
  const handleBeforeUnload = () => {
    localStorage.removeItem('selectedFiles');
  };

  window.addEventListener('beforeunload', handleBeforeUnload);

  return () => {
    // Remove the event listener when the component is unmounted
    window.removeEventListener('beforeunload', handleBeforeUnload);
  };
}, []);

const updateSelectedFiles = (updatedFiles) => {
  try {
    const updatedFilesString = JSON.stringify(updatedFiles);
    if (updatedFilesString.length > window.localStorage.remainingSpace) {
      throw new Error("Updating 'selectedFiles' exceeds localStorage quota.");
    }

    setSelectedFiles(updatedFiles);
    localStorage.setItem('selectedFiles', updatedFilesString);
  } catch (error) {
    console.error(error.message);
    localStorage.removeItem('selectedFiles'); // Clear 'selectedFiles' on error
  }
};

// Function to remove a specific file from selectedFiles
const removeFile = (rowIndex, fileIndex) => {
  const updatedFiles = [...selectedFiles];
  updatedFiles[rowIndex].splice(fileIndex, 1); // Remove the file at index
  updateSelectedFiles(updatedFiles); // Update the state and localStorage
};


  useEffect(() => {
    getAllDeclarations();
    // Create an initial order based on the incoming 'bn' values
    const order = declarations.map(declaration => declaration.fileName);
    const order1 = declarations.map(declaration => declaration.fileName1);
    setBnOrder(order);
    setRapportOrder(order);
  }, []);
  useEffect(() => {
    getAllDeclarations();
  }, []);

 // Assuming fileName is the actual file name associated with bn
 const getAllDeclarations = () => {
    DeclarationService.getAllEmployees()
      .then((response) => {
        setDeclarations(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };


  const extractLinks = () => {
    return selectedFiles.map((fileUrl, index) => ({
      link: fileUrl,
      downloadText: `selectedFile_${index + 1}`,
    }));
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
  const handleMoveUp = (bn) => {
    const index = bnOrder.findIndex(fileName => fileName === bn);
    if (index > 0) {
      const updatedOrder = [...bnOrder];
      const temp = updatedOrder[index];
      updatedOrder[index] = updatedOrder[index - 1];
      updatedOrder[index - 1] = temp;
      setBnOrder(updatedOrder);
    }
  };

  const handleMoveDown = (bn) => {
    const index = bnOrder.findIndex(fileName => fileName === bn);
    if (index < bnOrder.length - 1) {
      const updatedOrder = [...bnOrder];
      const temp = updatedOrder[index];
      updatedOrder[index] = updatedOrder[index + 1];
      updatedOrder[index + 1] = temp;
      setBnOrder(updatedOrder);
    }
  };
  
  

  const filteredDeclarations = declarations.filter((declaration) => {
    return (
      (declaration.nom && declaration.nom.toLowerCase().includes(searchTerm.toLowerCase())) ||
      (declaration.subject && declaration.subject.toLowerCase().includes(searchTerm.toLowerCase())) ||
      (declaration.type && declaration.type.toLowerCase().includes(searchTerm.toLowerCase())) ||
      (declaration.description && declaration.description.toLowerCase().includes(searchTerm.toLowerCase())) ||
      (declaration.prix && declaration.prix.toLowerCase().includes(searchTerm.toLowerCase())) ||
      (declaration.date && declaration.date.toLowerCase().includes(searchTerm.toLowerCase())) ||
      (declaration.numerobl && declaration.numerobl.toLowerCase().includes(searchTerm.toLowerCase())) ||
      (declaration.quantite && declaration.quantite.toLowerCase().includes(searchTerm.toLowerCase())) ||
      (declaration.fournisseur && declaration.fournisseur.toLowerCase().includes(searchTerm.toLowerCase())) ||
      (declaration.nombateau && declaration.nombateau.toLowerCase().includes(searchTerm.toLowerCase()))||
      (declaration.bn && declaration.bn.toLowerCase().includes(searchTerm.toLowerCase()))||
      (declaration.rapport && declaration.rapport.toLowerCase().includes(searchTerm.toLowerCase()))
    );
  });
  const handleDownload = (fileData) => {
    const blob = new Blob([fileData], { type: 'application/octet-stream' });
    const blobURL = window.URL.createObjectURL(blob);
    
    const a = document.createElement('a');
    a.href = blobURL;
    a.download = 'downloadedFile'; // Default file name
  
    document.body.appendChild(a);
    a.click();
  
    document.body.removeChild(a);
    window.URL.revokeObjectURL(blobURL);
  };
  
  const handleDownload1 = (fileData, fileName1) => {
    const blob = new Blob([fileData], { type: 'application/octet-stream' });
    
    // Extract the file name from the path (remove the fake path)
    const extractedFileName = fileName1 ? fileName1.split('\\').pop() : 'downloadedFile';
  
    const blobURL = window.URL.createObjectURL(blob);
    
    const a = document.createElement('a');
    a.href = blobURL;
    a.download = extractedFileName; // Use the extracted file name for downloading
  
    document.body.appendChild(a);
    a.click();
  
    document.body.removeChild(a);
    window.URL.revokeObjectURL(blobURL);
  };
  
  
  
  
  
  
  
  
  
  
  
  
  

  return (
    <Box m="20px">
         <Header title="Table price diesel information " subtitle="price diesel information for each ship" />
      <Paper style={{marginTop:'150px'}}>
      <Toolbar>
  <InputAdornment position="start">
    <IconButton>
      <SearchIcon />
    </IconButton>
  </InputAdornment>
  <div style={{ flex: 1 }}>
    <input
      type="text"
      placeholder="Search..."
      onChange={handleSearch}
      style={{ width: '100%', marginLeft: '8px' }}
    />
  </div>
  <InputAdornment position="end">
    <IconButton>
      <AddIcon />
    </IconButton>
  </InputAdornment>
</Toolbar>


        <MaterialTable
          columns={[
            { title: 'Prix', field: 'prix', width: 300 },
            { title: 'date', field: 'date', width: 300 },
            { title: 'N°BL', field: 'numerobl', width: 300 },
            { title: 'Quantite', field: 'quantite', width: 300 },
            { title: 'Fournisseur', field: 'fournisseur', width: 300 },
            { title: 'C/C', field: 'nombateau', width: 300 },
            {
              title: 'bn',
              field: 'bn',
              width: 300,
              render: (rowData) => (
                <>
                  {rowData.bn ? (
                    <>
                      {rowData.bn.map((fileUrl, index) => (
                        <div key={index}>
                          <a href={fileUrl} download={`selectedFile_${index + 1}`}>
                            File {index + 1}
                          </a>
                        </div>
                      ))}
                    </>
                  ) : null}
                </>
              ),
            },
            {
              title: 'rapport',
              field: 'rapport',
              width: 300,
              render: (rowData) => (
                <>
                  {rowData.rapport ? (
                    <>
                      <button onClick={() => handleDownload(rowData.rapport)}>
                        Download
                      </button>
                    </>
                  ) : null}
                </>
              ),
            },
             
              
              
              
              

            {
              title: 'Actions',
              field: 'actions',
              width: 300,
              render: (rowData) => (
                <>
                  <IconButton
                    color="secondary"
                    onClick={() => deleteDeclaration(rowData.id)}
                  >
                    <DeleteIcon />
                  </IconButton>
                </>
              ),
            },
          ]}
          data={declarations.map((declaration, index) => ({
            ...declaration,
            bn: selectedFiles[index] || [],
             rapport: selectedFiles1[index] || [],// Assigning selected files to rapport column
          }))}
          title=""
          options={{
            sorting: true,
            headerStyle: {
              backgroundColor: '#3e4396',
              fontSize: '1rem',
            },
          }}
          icons={{
            Search: () => <SearchIcon />,
            Clear: () => <ClearIcon />,
            Add: () => <AddIcon />,
            Edit: () => <EditOutlinedIcon />,
            Delete: () => <DeleteIcon />,
            SortArrow: ({ direction }) =>
              direction === 'asc' ? <ArrowUpwardIcon /> : <ArrowDownwardIcon />,
          }}
        />
        
      </Paper>
      <div>
      {selectedFiles.map((filesInRow, rowIndex) => (
  <div key={rowIndex}>
    {filesInRow.map((fileUrl, fileIndex) => (
      <div key={fileIndex} style={{ display: 'flex', alignItems: 'center' }}>
        <a href={fileUrl} download={`selectedFile_${rowIndex + 1}_${fileIndex + 1}`}>
          Download File {rowIndex + 1}-{fileIndex + 1}
        </a>
        <IconButton
          onClick={() => removeFile(rowIndex, fileIndex)}
          color="secondary"
          aria-label="delete"
        >
          <DeleteIcon />
        </IconButton>
      </div>
    ))}
  </div>
))}
  {selectedFiles.length === 0 && <p>No files uploaded yet.</p>}
</div>

    </Box>
  );
};

export default ListUpload;
