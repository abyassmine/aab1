import React from 'react';
import * as XLSX from 'xlsx';
import { Button, IconButton, Typography } from '@material-ui/core';
import GetAppIcon from '@material-ui/icons/GetApp';

const ExportExcel21 = ({ records, darkMode }) => {
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
        new Date(record.datedesoutage21).toLocaleDateString('en-GB'),
        new Date(record.datedesortie21).toLocaleDateString('en-GB'),
        record.quantitelivree21,
        record.quantiteabord21,
        record.quantitetotal21,
        record.stabilite21,
        record.consmyne21,
        Math.floor((record.quantitetotal21 - record.stabilite21) / record.consmyne21 / 1000).toFixed(2),
        new Date(record.dateprochainesoutage21).toLocaleDateString('en-GB'),
        record.soutagedegazoil21,
        record.quantiteconsomme21,
        record.quantitetransbordée21,
        record.quantitereçue21,
        record.nombredimmobilisationescale21,
        record.nombredimmobilisationmer21,
        record.prixdegazoil21,
    ]);
    
    
         
    // Add a title before the header
    const title = [['BELROMAR2']];
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

export default ExportExcel21;
