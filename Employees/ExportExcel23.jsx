import React from 'react';
import * as XLSX from 'xlsx';
import { Button, IconButton, Typography } from '@material-ui/core';
import GetAppIcon from '@material-ui/icons/GetApp';

const ExportExcel23 = ({ records, darkMode }) => {
  const exportToExcel = () => {
    const header = [
      'DATE DE SOUTAGE',
      'DATE DE SORTIE',
      'Quantité Livrée',
      'Quantité A bord',
      'Quantité Total',
      'STABILITE',
      'cons.Myne',
      'Jour.Autono',
      'DATE PROCHAINE SOUTAGE',
      'SOUTAGE DE GASOIL',
      'Quantité Consommée Pendant Lescale' , 
      'Quantité Transbordée', 
      'Quantité Reçue', 
      'Nombre hrs dImmobilisation en escale au port',
      'Nombre hrs dImmobilisation en haute mer', 
      'PRIX DE GAZOIL',
    ];

    // Create a new array of arrays with the "consmyne" field included
    const data = records.map((record) => [
        new Date(record.datedesoutage23).toLocaleDateString('en-GB'),
        new Date(record.datedesortie23).toLocaleDateString('en-GB'),
        record.quantitelivree23,
        record.quantiteabord23,
        record.quantitetotal23,
        record.stabilite23,
        record.consmyne23,
        Math.floor((record.quantitetotal23 - record.stabilite23) / record.consmyne23 / 1000).toFixed(2),
        new Date(record.dateprochainesoutage23).toLocaleDateString('en-GB'),
        record.soutagedegazoil23,
        record.quantiteconsomme23,
        record.quantitetransbordée23,
        record.quantitereçue23,
        record.nombredimmobilisationescale23,
        record.nombredimmobilisationmer23,
        record.prixdegazoil23,
    ]);
    
    
    
         
    // Add a title before the header
    const title = [['DADES']];
    const ws = XLSX.utils.aoa_to_sheet([...title, header.map(h => h.toUpperCase()), ...data]);

    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet 1');
    const excelFileName = 'EmployeeData.xlsx';
    XLSX.writeFile(wb, excelFileName);
  };

  return (
    <>
      <IconButton
        variant="outlined"
        color={darkMode ? 'secondary' : 'primary'}
        onClick={exportToExcel}
      >
        <GetAppIcon style={{ color: darkMode ? '#00FFFF' : '' }} />
      </IconButton>
    </>
  );
};

export default ExportExcel23;
