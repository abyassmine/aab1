import React from 'react';
import * as XLSX from 'xlsx';
import { Button, IconButton, Typography } from '@material-ui/core';
import GetAppIcon from '@material-ui/icons/GetApp';

const ExportExcel18 = ({ records, darkMode }) => {
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
        new Date(record.datedesoutage18).toLocaleDateString('en-GB'),
        new Date(record.datedesortie18).toLocaleDateString('en-GB'),
        record.quantitelivree18,
        record.quantiteabord18,
        record.quantitetotal18,
        record.stabilite18,
        record.consmyne18,
        Math.floor((record.quantitetotal18 - record.stabilite18) / record.consmyne18 / 1000).toFixed(2),
        new Date(record.dateprochainesoutage18).toLocaleDateString('en-GB'),
        record.soutagedegazoil18,
        record.quantiteconsomme18,
        record.quantitetransbordée18,
        record.quantitereçue18,
        record.nombredimmobilisationescale18,
        record.nombredimmobilisationmer18,
        record.prixdegazoil18,
    ]);
    

    // Add a title before the header
    const title = [['MARANDA7']];
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

export default ExportExcel18;
