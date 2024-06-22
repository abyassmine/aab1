import React from 'react';
import * as XLSX from 'xlsx';
import { Button, IconButton, Typography } from '@material-ui/core';
import GetAppIcon from '@material-ui/icons/GetApp';

const ExportExcel16 = ({ records, darkMode }) => {
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
        new Date(record.datedesoutage16).toLocaleDateString('en-GB'),
        new Date(record.datedesortie16).toLocaleDateString('en-GB'),
        record.quantitelivree16,
        record.quantiteabord16,
        record.quantitetotal16,
        record.stabilite16,
        record.consmyne16,
        Math.floor((record.quantitetotal16 - record.stabilite16) / record.consmyne16 / 1000).toFixed(2),
        new Date(record.dateprochainesoutage16).toLocaleDateString('en-GB'),
        record.soutagedegazoil16,
        record.quantiteconsomme16,
        record.quantitetransbordée16,
        record.quantitereçue16,
        record.nombredimmobilisationescale16,
        record.nombredimmobilisationmer16,
        record.prixdegazoil16,
    ]);
    

    // Add a title before the header
    const title = [['MARANDA2']];
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

export default ExportExcel16;
