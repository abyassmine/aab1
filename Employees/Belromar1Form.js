import React, { useState, useEffect } from 'react';
import { Grid } from '@material-ui/core';
import Controls from './../components/controls/Controls';
import { useForm, Form } from './../components/useForm';
import * as EmployeeServiceKelti from './../services/EmployeeServiceKelti';

const typeItems = [
  { id: 'pc', title: 'PC' },
  { id: 'imprimante', title: 'imprimante' },
  { id: 'scanner', title: 'scanner' },
];

const initialFValues = {
    id: 0,
    datedesoutage20: new Date().toLocaleDateString('en-GB'),
    datedesortie20: new Date().toLocaleDateString('en-GB'),
    dateprochainesoutage20: new Date().toLocaleDateString('en-GB'),
    quantitelivree20: '',
    quantiteabord20: '',
    stabilite20: 44400,
    consmyne20: '',
    soutagedegazoil20: '',
    quantiteconsomme20: '',
    quantitetransbordée20: '',
    nombredimmobilisationescale20: '',
    nombredimmobilisationmer20: '',
    prixdegazoil20: '',
   
    isPermanent: false,
  };
  

export default function Belromar1Form(props) {
  const { addOrEdit, recordForEdit } = props;

  const validate = (fieldValues = values) => {
    let temp = { ...errors };
    if ('quantitelivree20' in fieldValues)
    temp.quantitelivree20 = fieldValues.quantitelivree20 ? '' : 'This field is required.';
if ('quantiteabord20' in fieldValues)
    temp.quantiteabord20 = fieldValues.quantiteabord20 ? '' : 'This field is required.';
if ('quantitetotal20' in fieldValues)
    temp.quantitetotal20 = fieldValues.quantitetotal20 ? '' : 'This field is required.';


      if ('departmentId' in fieldValues) {
        temp.departmentId = (fieldValues.departmentId && fieldValues.departmentId.length !== 0) ? '' : 'This field is required.';
      }
      
     

    setErrors({
      ...temp,
    });

    if (fieldValues === values) return Object.values(temp).every((x) => x === '');
  };

  const {
    values,
    setValues,
    errors,
    setErrors,
    handleInputChange,
    resetForm,
  } = useForm(initialFValues, true, validate);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      addOrEdit(values, resetForm);
    }
  };
  
  

  useEffect(() => {
    if (recordForEdit != null) setValues({ ...recordForEdit });
  }, [recordForEdit, setValues]);
  const [datedesoutage20, setDatedesoutage20] = useState(null);
  const [datedesortie20, setDatedesortie20] = useState(null);
  const [dateprochainesoutage20, setDateprochainesoutage20] = useState(null);
  const [nom, setNom] = useState('');
  const [quantitelivree20, setQuantitelivree20] = useState('');
  const [quantiteabord20, setQuantiteabord20] = useState('');
  const [quantitetotal20, setQuantitetotal20] = useState('');
  const [stabilite20, setStabilite20] = useState('');
  const [consmyne20, setConsmyne20] = useState('');
  const [jourautono20, setJourautono20] = useState('');
  const [soutagedegazoil20, setSoutagedegazoil20] = useState('');
  const [quantiteconsomme20, setQuantiteconsomme20] = useState('');
  const [quantitetransbordée20, setQuantitetransbordée20] = useState('');
  const [quantitereçue20, setQuantitereçue20] = useState('');
  const [nombredimmobilisationescale20, setNombredimmobilisationescale20] = useState('');
  const [nombredimmobilisationmer20, setNombredimmobilisationmer20] = useState('');
  
  const [prixdegazoil20, setPrixdegazoil20] = useState('');
  
const [entite1, setEntite1] = useState('')
const [fonction1, setFonction1] = useState('')
const [marque1, setMarque1] = useState('')
const [model1, setModel1] = useState('')
const [ndeserie, setNdeserie] = useState('')
const [codeImmob, setCodeImmob] = useState('')
const [datdacquis, setDatdacquis] = useState(null);
const [etat, setEtat] = useState('')
const [observation, setObservation]= useState('')
const [type, setType]= useState('')
const [departmentId, setDepartmentId]= useState('')

  return (
    <Form onSubmit={handleSubmit}>
      <Grid container>
        <Grid item xs={6}>
        <Controls.DatePicker
  name="datedesoutage20"
  label="Date de soutage"
  value={values.datedesoutage20}
  onChange={(e) => {
    setDatedesoutage20(e.target.value);
    handleInputChange(e);
  }}
/>

<Controls.DatePicker
  name="datedesortie20"
  label="Date de sortie"
  value={values.datedesortie20}
  onChange={(e) => {
    setDatedesortie20(e.target.value);
    handleInputChange(e);
  }}
/>

<Controls.Input
  name="quantitelivree20"
  label="Quantité livrée"
  value={values.quantitelivree20}
  onChange={handleInputChange}
  error={errors.quantitelivree20}
/>

<Controls.Input
  name="quantiteabord20"
  label="Quantité A bord"
  value={values.quantiteabord20}
  onChange={handleInputChange}
  error={errors.quantiteabord20}
/>

<Controls.Input
  name="quantitetotal20"
  label="Quantité Total"
  value={values.quantitetotal20}
  onChange={handleInputChange}
  error={errors.quantitetotal20}
/>

<Controls.Input
  name="stabilite20"
  label="STABILITE"
  value={values.stabilite20}
  onChange={handleInputChange}
  error={errors.stabilite20}
/>

<Controls.Input
  name="consmyne20"
  label="cons.Myne"
  value={values.consmyne20}
  onChange={handleInputChange}
  error={errors.consmyne20}
/>

<Controls.Input 
  name="jourautono20"
  label="Jour.Autono"
  value={values.jourautono20}
  onChange={(e) => {
    setJourautono20(e.target.value);
    handleInputChange(e);
  }}
/>

<Controls.DatePicker
  name="dateprochainesoutage20"
  label="DATE PROCHAINE SOUTAGE "
  value={values.dateprochainesoutage20}
  onChange={(e) => {
    setDateprochainesoutage20(e.target.value);
    handleInputChange(e);
  }}
/>

    
        </Grid>
        <Grid item xs={6}>
         
          
        <Controls.Input 
  name="soutagedegazoil20"
  label=" SOUTAGE DE GASOIL  "
  value={values.soutagedegazoil20}
  onChange={(e) => {
    setSoutagedegazoil20(e.target.value);
    handleInputChange(e);
  }}
/>

<Controls.Input 
  name="quantiteconsomme20"
  label="Quantité consommé pendant l'escale"
  value={values.quantiteconsomme20}
  onChange={(e) => {
    setQuantiteconsomme20(e.target.value);
    handleInputChange(e);
  }}
/>

<Controls.Input 
  name="quantitetransbordée20"
  label="Quantité Transbordée"
  value={values.quantitetransbordée20}
  onChange={(e) => {
    setQuantitetransbordée20(e.target.value);
    handleInputChange(e);
  }}
/>

<Controls.Input 
  name="quantitereçue20"
  label="Quantité Reçue"
  value={values.quantitereçue20}
  onChange={(e) => {
    setQuantitereçue20(e.target.value);
    handleInputChange(e);
  }}
/>  

<Controls.Input 
  name="nombredimmobilisationescale20"
  label="Nombre hrs d'Immobilisation en escale au port"
  value={values.nombredimmobilisationescale20}
  onChange={(e) => {
    setNombredimmobilisationescale20(e.target.value);
    handleInputChange(e);
  }}
/>

<Controls.Input 
  name="nombredimmobilisationmer20"
  label="Nombre hrs d'Immobilisation en haute mer"
  value={values.nombredimmobilisationmer20}
  onChange={(e) => {
    setNombredimmobilisationmer20(e.target.value);
    handleInputChange(e);
  }}
/>

<Controls.Input 
  name="prixdegazoil20"
  label=" PRIX DE GAZOIL  "
  value={values.prixdegazoil20}
  onChange={(e) => {
    setPrixdegazoil20(e.target.value);
    handleInputChange(e);
  }}
/>


                    <Controls.Checkbox
                        name="isPermanent"
                        label="Permanent Employee"
                        value={values.isPermanent}
                        onChange={handleInputChange}
                    />

                    <div>
                        <Controls.Button
                            type="submit"
                            text="Submit"
                             />
                        <Controls.Button
                            text="Reset"
                            color="default"
                            onClick={resetForm} />
                    </div>
                </Grid>
            </Grid>
        </Form>
    )
}
