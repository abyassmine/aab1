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
    datedesoutage17: new Date().toLocaleDateString('en-GB'),
    datedesortie17: new Date().toLocaleDateString('en-GB'),
    dateprochainesoutage17: new Date().toLocaleDateString('en-GB'),
    quantitelivree17: '',
    quantiteabord17: '',
    stabilite17: '40660',
    consmyne17: '',
    soutagedegazoil17: '',
    quantiteconsomme17: '',
    quantitetransbordée17: '',
    nombredimmobilisationescale17: '',
    nombredimmobilisationmer17: '',
    prixdegazoil17: '',

    isPermanent: false,
};



export default function Maranda2Form(props) {
  const { addOrEdit, recordForEdit } = props;

  const validate = (fieldValues = values) => {
    let temp = { ...errors };
    if ('quantitelivree17' in fieldValues)
    temp.quantitelivree17 = fieldValues.quantitelivree17 ? '' : 'This field is required.';
if ('quantiteabord17' in fieldValues)
    temp.quantiteabord17 = fieldValues.quantiteabord17 ? '' : 'This field is required.';
if ('quantitetotal17' in fieldValues)
    temp.quantitetotal17 = fieldValues.quantitetotal17 ? '' : 'This field is required.';


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
  const [datedesoutage17, setDatedesoutage17] = useState(null);
const [datedesortie17, setDatedesortie17] = useState(null);
const [dateprochainesoutage17, setDateprochainesoutage17] = useState(null);
const [nom, setNom] = useState('');
const [quantitelivree17, setQuantitelivree17] = useState('');
const [quantiteabord17, setQuantiteabord17] = useState('');
const [quantitetotal17, setQuantitetotal17] = useState('');
const [stabilite17, setStabilite17] = useState('');
const [consmyne17, setConsmyne17] = useState('');
const [jourautono17, setJourautono17] = useState('');
const [soutagedegazoil17, setSoutagedegazoil17] = useState('');
const [prixdegazoil17, setPrixdegazoil17] = useState('');
const [quantiteconsomme17, setQuantiteconsomme17] = useState('');
const [quantitetransbordée17, setQuantitetransbordée17] = useState('');
const [quantitereçue17, setQuantitereçue17] = useState('');
const [nombredimmobilisationescale17, setNombredimmobilisationescale17] = useState('');
const [nombredimmobilisationmer17, setNombredimmobilisationmer17] = useState('');

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
  name="datedesoutage17"
  label="Date de soutage"
  value={values.datedesoutage17}
  onChange={(e) => {
    setDatedesoutage17(e.target.value);
    handleInputChange(e);
  }}
/>

<Controls.DatePicker
  name="datedesortie17"
  label="Date de sortie"
  value={values.datedesortie17}
  onChange={(e) => {
    setDatedesortie17(e.target.value);
    handleInputChange(e);
  }}
/>

<Controls.Input
  name="quantitelivree17"
  label="Quantité livrée"
  value={values.quantitelivree17}
  onChange={handleInputChange}
  error={errors.quantitelivree17}
/>

<Controls.Input
  name="quantiteabord17"
  label="Quantité A bord"
  value={values.quantiteabord17}
  onChange={handleInputChange}
  error={errors.quantiteabord17}
/>

<Controls.Input
  name="quantitetotal17"
  label="Quantité Total"
  value={values.quantitetotal17}
  onChange={handleInputChange}
  error={errors.quantitetotal17}
/>

<Controls.Input
  name="stabilite17"
  label="STABILITE"
  value={values.stabilite17}
  onChange={handleInputChange}
  error={errors.stabilite17}
/>

<Controls.Input
  name="consmyne17"
  label="cons.Myne"
  value={values.consmyne17}
  onChange={handleInputChange}
  error={errors.consmyne17}
/>

<Controls.Input 
  name="jourautono17"
  label="Jour.Autono"
  value={values.jourautono17}
  onChange={(e) => {
    setJourautono17(e.target.value);
    handleInputChange(e);
  }}
/>

<Controls.DatePicker
  name="dateprochainesoutage17"
  label="DATE PROCHAINE SOUTAGE"
  value={values.dateprochainesoutage17}
  onChange={(e) => {
    setDateprochainesoutage17(e.target.value);
    handleInputChange(e);
  }}
/>


        </Grid>
        <Grid item xs={6}>
         
         
          
        <Controls.Input 
  name="soutagedegazoil17"
  label=" SOUTAGE DE GASOIL "
  value={values.soutagedegazoil17}
  onChange={(e) => {
    setSoutagedegazoil17(e.target.value);
    handleInputChange(e);
  }}
/>

<Controls.Input 
  name="quantiteconsomme17"
  label=" Quantité consommée pendant l'escale "
  value={values.quantiteconsomme17}
  onChange={(e) => {
    setQuantiteconsomme17(e.target.value);
    handleInputChange(e);
  }}
/>

<Controls.Input 
  name="quantitetransbordée17"
  label=" Quantité Transbordée"
  value={values.quantitetransbordée17}
  onChange={(e) => {
    setQuantitetransbordée17(e.target.value);
    handleInputChange(e);
  }}
/>

<Controls.Input 
  name="quantitereçue17"
  label="Quantité Reçue"
  value={values.quantitereçue17}
  onChange={(e) => {
    setQuantitereçue17(e.target.value);
    handleInputChange(e);
  }}
/>

<Controls.Input 
  name="nombredimmobilisationescale17"
  label="Nombre hrs d'Immobilisation en escale au port"
  value={values.nombredimmobilisationescale17}
  onChange={(e) => {
    setNombredimmobilisationescale17(e.target.value);
    handleInputChange(e);
  }}
/>

<Controls.Input 
  name="nombredimmobilisationmer17"
  label="Nombre hrs d'Immobilisation en haute mer"
  value={values.nombredimmobilisationmer17}
  onChange={(e) => {
    setNombredimmobilisationmer17(e.target.value);
    handleInputChange(e);
  }}
/>

<Controls.Input 
  name="prixdegazoil17"
  label=" PRIX DE GAZOIL "
  value={values.prixdegazoil17}
  onChange={(e) => {
    setPrixdegazoil17(e.target.value);
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
