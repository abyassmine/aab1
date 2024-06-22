import React from 'react';
import * as XLSX from 'xlsx';
import { Button, IconButton, Typography } from '@material-ui/core';
import GetAppIcon from '@material-ui/icons/GetApp';

const ExportExcel20 = ({ records, darkMode }) => {
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
        new Date(record.datedesoutage20).toLocaleDateString('en-GB'),
        new Date(record.datedesortie20).toLocaleDateString('en-GB'),
        record.quantitelivree20,
        record.quantiteabord20,
        record.quantitetotal20,
        record.stabilite20,
        record.consmyne20,
        Math.floor((record.quantitetotal20 - record.stabilite20) / record.consmyne20 / 1000).toFixed(2),
        new Date(record.dateprochainesoutage20).toLocaleDateString('en-GB'),
        record.soutagedegazoil20,
        record.quantiteconsomme20,
        record.quantitetransbordée20,
        record.quantitereçue20,
        record.nombredimmobilisationescale20,
        record.nombredimmobilisationmer20,
        record.prixdegazoil20,
    ]);
    
    
         
    // Add a title before the header
    const title = [['BELROMAR1']];
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

export default ExportExcel20;
