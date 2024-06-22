import React from 'react';
import * as XLSX from 'xlsx';
import { Button, IconButton, Typography } from '@material-ui/core';
import GetAppIcon from '@material-ui/icons/GetApp';

const ExportExcel10 = ({ records, darkMode }) => {
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
        new Date(record.datedesoutage10).toLocaleDateString('en-GB'),
        new Date(record.datedesortie10).toLocaleDateString('en-GB'),
        record.quantitelivree10,
        record.quantiteabord10,
        record.quantitetotal10,
        record.stabilite10,
        record.consmyne10,
        Math.floor((record.quantitetotal10 - record.stabilite10) / record.consmyne10 / 1000).toFixed(2),
        new Date(record.dateprochainesoutage10).toLocaleDateString('en-GB'),
        record.soutagedegazoil10,
        record.quantiteconsomme10,
        record.quantitetransbordée10,
        record.quantitereçue10,
        record.nombredimmobilisationescale10,
        record.nombredimmobilisationmer10,
        record.prixdegazoil10,
    ]);
    
      
    // Add a title before the header
    const title = [['TOUMZIN']];
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

export default ExportExcel10;
