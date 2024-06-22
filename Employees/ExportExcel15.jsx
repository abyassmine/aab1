import React from 'react';
import * as XLSX from 'xlsx';
import { Button, IconButton, Typography } from '@material-ui/core';
import GetAppIcon from '@material-ui/icons/GetApp';

const ExportExcel15 = ({ records, darkMode }) => {
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
        new Date(record.datedesoutage15).toLocaleDateString('en-GB'),
        new Date(record.datedesortie15).toLocaleDateString('en-GB'),
        record.quantitelivree15,
        record.quantiteabord15,
        record.quantitetotal15,
        record.stabilite15,
        record.consmyne15,
        Math.floor((record.quantitetotal15 - record.stabilite15) / record.consmyne15 / 1000).toFixed(2),
        new Date(record.dateprochainesoutage15).toLocaleDateString('en-GB'),
        record.soutagedegazoil15,
        record.quantiteconsomme15,
        record.quantitetransbordée15,
        record.quantitereçue15,
        record.nombredimmobilisationescale15,
        record.nombredimmobilisationmer15,
        record.prixdegazoil15,
    ]);
    

    // Add a title before the header
    const title = [['MARANDA1']];
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

export default ExportExcel15;
