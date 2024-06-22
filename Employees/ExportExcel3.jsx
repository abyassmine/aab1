import React from 'react';
import * as XLSX from 'xlsx';
import { Button, IconButton, Typography } from '@material-ui/core';
import GetAppIcon from '@material-ui/icons/GetApp';

const ExportExcel3 = ({ records, darkMode }) => {
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
        new Date(record.datedesoutage3).toLocaleDateString('en-GB'),
        new Date(record.datedesortie3).toLocaleDateString('en-GB'),
        record.quantitelivree3,
        record.quantiteabord3,
        record.quantitetotal3,
        record.stabilite3,
        record.consmyne3,
        Math.floor((record.quantitetotal3 - record.stabilite3) / record.consmyne3 / 1000).toFixed(2),
        new Date(record.dateprochainesoutage3).toLocaleDateString('en-GB'),
        record.soutagedegazoil3,
        record.quantiteconsomme3,
        record.quantitetransbordée3,
        record.quantitereçue3,
        record.nombredimmobilisationescale3,
        record.nombredimmobilisationmer3,
        record.prixdegazoil3,
    ]);
    

    // Add a title before the header
    const title = [['TODRA']];
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

export default ExportExcel3;
