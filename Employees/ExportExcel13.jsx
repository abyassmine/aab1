import React from 'react';
import * as XLSX from 'xlsx';
import { Button, IconButton, Typography } from '@material-ui/core';
import GetAppIcon from '@material-ui/icons/GetApp';

const ExportExcel13 = ({ records, darkMode }) => {
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
        new Date(record.datedesoutage13).toLocaleDateString('en-GB'),
        new Date(record.datedesortie13).toLocaleDateString('en-GB'),
        record.quantitelivree13,
        record.quantiteabord13,
        record.quantitetotal13,
        record.stabilite13,
        record.consmyne13,
        Math.floor((record.quantitetotal13 - record.stabilite13) / record.consmyne13 / 1000).toFixed(2),
        new Date(record.dateprochainesoutage13).toLocaleDateString('en-GB'),
        record.soutagedegazoil13,
        record.quantiteconsomme13,
        record.quantitetransbordée13,
        record.quantitereçue13,
        record.nombredimmobilisationescale13,
        record.nombredimmobilisationmer13,
        record.prixdegazoil13,
    ]);
    
    // Add a title before the header
    const title = [['MLY EL HABIB']];
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

export default ExportExcel13;
