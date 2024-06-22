import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import DeclarationService from './DeclarationService';
import MaterialTable from 'material-table';
import SearchIcon from '@material-ui/icons/Search';
import GetAppIcon from '@material-ui/icons/GetApp';
import AddIcon from '@material-ui/icons/Add';
import TextField from '@material-ui/core/TextField';
import { Search } from '@material-ui/icons';
import Controls from './component/controls/Controls';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
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
import { Box, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Paper, Toolbar, InputAdornment } from "@mui/material";
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import { useLocation } from 'react-router-dom';
import { saveAs } from 'file-saver';
import axios from 'axios';
import './decla.css';

function Listvivocomponent() {
    const [searchTerm, setSearchTerm] = useState('');
    const [declarations, setDeclarations] = useState([]);
    const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
    const [declarationToDelete, setDeclarationToDelete] = useState(null);

    useEffect(() => {
        getAllDeclarations();
    }, []);

    const location = useLocation();
    const { file, fileUrl } = location.state ? location.state : {};
    const storedFileInfos = localStorage.getItem('fileInfos');
    const [fileInfos, setFileInfos] = useState(storedFileInfos ? JSON.parse(storedFileInfos) : []);

    useEffect(() => {
        if (storedFileInfos) {
            setFileInfos(JSON.parse(storedFileInfos));
        }
    }, [storedFileInfos]);

    const deleteFileFromTable = async (filename) => {
        try {
            const updatedFileInfos = fileInfos.filter(file => file !== filename);
            localStorage.setItem('fileInfos', JSON.stringify(updatedFileInfos));
        } catch (error) {
            console.error('Error deleting file from table:', error);
        }
    };

    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
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

    const getAllDeclarations = () => {
        DeclarationService.getAllEmployees()
            .then((response) => {
                setDeclarations(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    const handleDownload = (fileUrl, fileName) => {
        axios({
            url: fileUrl,
            method: 'GET',
            responseType: 'blob',
        })
            .then((response) => {
                const url = window.URL.createObjectURL(new Blob([response.data]));
                const link = document.createElement('a');
                link.href = url;
                link.setAttribute('download', fileName);
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
            })
            .catch((error) => console.error('Error downloading file:', error));
    };

    const handleOpenDeleteDialog = (declarationId) => {
        setDeclarationToDelete(declarationId);
        setOpenDeleteDialog(true);
    };

    const handleCloseDeleteDialog = () => {
        setOpenDeleteDialog(false);
        setDeclarationToDelete(null);
    };

    const handleConfirmDelete = () => {
        if (declarationToDelete !== null) {
            deleteDeclaration(declarationToDelete);
            handleCloseDeleteDialog();
        }
    };

    return (
        <Box m="20px">
            <Header title="Table price diesel information " subtitle="price diesel information for each ship" />
            <Paper style={{ marginTop: '150px' }}></Paper>

            <MaterialTable
                columns={[
                    { title: 'Prix', field: 'prix', width: 300 },
                    { title: 'date', field: 'date', width: 300 },
                    { title: 'N°BL', field: 'numerobl', width: 300 },
                    { title: 'Quantite', field: 'quantite', width: 300 },
                    { title: 'Fournisseur', field: 'fournisseur', width: 300 },
                    { title: 'C/C', field: 'nombateau', width: 300 },
                    {
                        title: 'Actions',
                        render: rowData => (
                            <IconButton
                                color="secondary"
                                onClick={() => handleOpenDeleteDialog(rowData.id)}
                            >
                                <DeleteIcon />
                            </IconButton>
                        ),
                    },
                ]}
                data={[
                    ...declarations.map((declaration, index) => ({
                        ...declaration,
                    }))
                ]}
                title=""
                options={{
                    sorting: true,
                    headerStyle: {
                        backgroundColor: '#01579b',
                        color: '#FFF'
                    },
                    pagination: true,
                    pageSizeOptions: [5, 10, 20],
                    paginationType: 'stepped',
                    actionsColumnIndex: -1,
                }}
                localization={{
                    pagination: {
                        labelRowsSelect: 'Rows',
                        labelDisplayedRows: '{from}-{to} of {count}',
                        firstTooltip: 'First Page',
                        previousTooltip: 'Previous Page',
                        nextTooltip: 'Next Page',
                        lastTooltip: 'Last Page',
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
                    FirstPage: () => <FirstPageIcon />,
                    LastPage: () => <LastPageIcon />,
                    PreviousPage: () => <ChevronLeftIcon />,
                    NextPage: () => <ChevronRightIcon />,
                }}
            />

            <Dialog
                open={openDeleteDialog}
                onClose={handleCloseDeleteDialog}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">{"Are you sure you want to delete this item?"}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        This action cannot be undone.
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleCloseDeleteDialog} color="primary">
                        No
                    </Button>
                    <Button onClick={handleConfirmDelete} color="primary" autoFocus>
                        Yes
                    </Button>
                </DialogActions>
            </Dialog>

            <MaterialTable
                columns={[
                    {
                        title: 'BN',
                        render: rowData => (
                            <a href={rowData.downloadUrl} download={rowData.name}>
                                {rowData.name}
                            </a>
                        ),
                    },
                ]}
                data={[
                    ...fileInfos.map(fileInfo => ({
                        ...fileInfo,
                        name: fileInfo.downloadUrl.split('/').pop()
                    })),
                ]}
                title=""
                options={{
                    sorting: true,
                    headerStyle: {
                        backgroundColor: '#01579b',
                        color: '#FFF'
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
                    FirstPage: () => <FirstPageIcon />,
                    LastPage: () => <LastPageIcon />,
                    PreviousPage: () => <ChevronLeftIcon />,
                    NextPage: () => <ChevronRightIcon />,
                }}
            />

        </Box>
    );
}

export default Listvivocomponent;
