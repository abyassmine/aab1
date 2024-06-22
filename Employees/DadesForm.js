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
    datedesoutage23: new Date().toLocaleDateString('en-GB'),
    datedesortie23: new Date().toLocaleDateString('en-GB'),
    dateprochainesoutage23: new Date().toLocaleDateString('en-GB'),
    quantitelivree23: '',
    quantiteabord23: '',
    stabilite23: 45458,
    consmyne23: '',
    soutagedegazoil23: '',
    quantiteconsomme23: '',
    quantitetransbordée23: '',
    nombredimmobilisationescale23: '',
    nombredimmobilisationmer23: '',
    prixdegazoil23: '',
   
    isPermanent: false,
};


  

export default function AzalForm(props) {
  const { addOrEdit, recordForEdit } = props;

  const validate = (fieldValues = values) => {
    let temp = { ...errors };
    if ('quantitelivree23' in fieldValues)
    temp.quantitelivree23 = fieldValues.quantitelivree23 ? '' : 'This field is required.';
if ('quantiteabord23' in fieldValues)
    temp.quantiteabord23 = fieldValues.quantiteabord23 ? '' : 'This field is required.';
if ('quantitetotal23' in fieldValues)
    temp.quantitetotal23 = fieldValues.quantitetotal23 ? '' : 'This field is required.';

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
  const [datedesoutage23, setDatedesoutage23] = useState(null);
const [datedesortie23, setDatedesortie23] = useState(null);
const [dateprochainesoutage23, setDateprochainesoutage23] = useState(null);
const [nom, setNom] = useState('');
const [quantitelivree23, setQuantitelivree23] = useState('');
const [quantiteabord23, setQuantiteabord23] = useState('');
const [quantitetotal23, setQuantitetotal23] = useState('');
const [stabilite23, setStabilite23] = useState('');
const [consmyne23, setConsmyne23] = useState('');
const [jourautono23, setJourautono23] = useState('');
const [soutagedegazoil23, setSoutagedegazoil23] = useState('');
const [quantiteconsomme23, setQuantiteconsomme23] = useState('');
const [quantitetransbordée23, setQuantitetransbordée23] = useState('');
const [quantitereçue23, setQuantitereçue23] = useState('');
const [nombredimmobilisationescale23, setNombredimmobilisationescale23] = useState('');
const [nombredimmobilisationmer23, setNombredimmobilisationmer23] = useState('');

const [prixdegazoil23, setPrixdegazoil23] = useState('');

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
  name="datedesoutage23"
  label="Date de soutage"
  value={values.datedesoutage23}
  onChange={(e) => {
    setDatedesoutage23(e.target.value);
    handleInputChange(e);
  }}
/>

<Controls.DatePicker
  name="datedesortie23"
  label="Date de sortie"
  value={values.datedesortie23}
  onChange={(e) => {
    setDatedesortie23(e.target.value);
    handleInputChange(e);
  }}
/>

<Controls.Input
  name="quantitelivree23"
  label="Quantité livrée"
  value={values.quantitelivree23}
  onChange={handleInputChange}
  error={errors.quantitelivree23}
/>

<Controls.Input
  name="quantiteabord23"
  label="Quantité A bord"
  value={values.quantiteabord23}
  onChange={handleInputChange}
  error={errors.quantiteabord23}
/>

<Controls.Input
  name="quantitetotal23"
  label="Quantité Total"
  value={values.quantitetotal23}
  onChange={handleInputChange}
  error={errors.quantitetotal23}
/>

<Controls.Input
  name="stabilite23"
  label="STABILITE"
  value={values.stabilite23}
  onChange={handleInputChange}
  error={errors.stabilite23}
/>

<Controls.Input
  name="consmyne23"
  label="cons.Myne"
  value={values.consmyne23}
  onChange={handleInputChange}
  error={errors.consmyne23}
/>

<Controls.Input 
  name="jourautono23"
  label="Jour.Autono"
  value={values.jourautono23}
  onChange={(e) => {
    setJourautono23(e.target.value);
    handleInputChange(e);
  }}
/>

<Controls.DatePicker
  name="dateprochainesoutage23"
  label="DATE PROCHAINE SOUTAGE"
  value={values.dateprochainesoutage23}
  onChange={(e) => {
    setDateprochainesoutage23(e.target.value);
    handleInputChange(e);
  }}
/>

        </Grid>
        <Grid item xs={6}>
         
          
        <Controls.Input 
  name="soutagedegazoil23"
  label=" SOUTAGE DE GASOIL  "
  value={values.soutagedegazoil23}
  onChange={(e) => {
    setSoutagedegazoil23(e.target.value);
    handleInputChange(e);
  }}
/>

<Controls.Input 
  name="quantiteconsomme23"
  label="Quantité consommé pendant l'escale"
  value={values.quantiteconsomme23}
  onChange={(e) => {
    setQuantiteconsomme23(e.target.value);
    handleInputChange(e);
  }}
/>

<Controls.Input 
  name="quantitetransbordée23"
  label="Quantité Transbordée"
  value={values.quantitetransbordée23}
  onChange={(e) => {
    setQuantitetransbordée23(e.target.value);
    handleInputChange(e);
  }}
/>

<Controls.Input 
  name="quantitereçue23"
  label="Quantité Reçue"
  value={values.quantitereçue23}
  onChange={(e) => {
    setQuantitereçue23(e.target.value);
    handleInputChange(e);
  }}
/>  

<Controls.Input 
  name="nombredimmobilisationescale23"
  label="Nombre hrs d'Immobilisation en escale au port"
  value={values.nombredimmobilisationescale23}
  onChange={(e) => {
    setNombredimmobilisationescale23(e.target.value);
    handleInputChange(e);
  }}
/>

<Controls.Input 
  name="nombredimmobilisationmer23"
  label="Nombre hrs d'Immobilisation en haute mer"
  value={values.nombredimmobilisationmer23}
  onChange={(e) => {
    setNombredimmobilisationmer23(e.target.value);
    handleInputChange(e);
  }}
/>

<Controls.Input 
  name="prixdegazoil23"
  label=" PRIX DE GAZOIL  "
  value={values.prixdegazoil23}
  onChange={(e) => {
    setPrixdegazoil23(e.target.value);
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
