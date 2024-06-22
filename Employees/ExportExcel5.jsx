import React from 'react';
import * as XLSX from 'xlsx';
import { Button, IconButton, Typography } from '@material-ui/core';
import GetAppIcon from '@material-ui/icons/GetApp';

const ExportExcel5 = ({ records, darkMode }) => {
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
        new Date(record.datedesoutage5).toLocaleDateString('en-GB'),
        new Date(record.datedesortie5).toLocaleDateString('en-GB'),
        record.quantitelivree5,
        record.quantiteabord5,
        record.quantitetotal5,
        record.stabilite5,
        record.consmyne5,
        Math.floor((record.quantitetotal5 - record.stabilite5) / record.consmyne5 / 1000).toFixed(2),
        new Date(record.dateprochainesoutage5).toLocaleDateString('en-GB'),
        record.soutagedegazoil5,
        record.quantiteconsomme5,
        record.quantitetransbordée5,
        record.quantitereçue5,
        record.nombredimmobilisationescale5,
        record.nombredimmobilisationmer5,
        record.prixdegazoil5,
    ]);
    

    // Add a title before the header
    const title = [['IGOUDAR']];
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

export default ExportExcel5;
