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
    datedesoutage16: new Date().toLocaleDateString('en-GB'),
    datedesortie16: new Date().toLocaleDateString('en-GB'),
    dateprochainesoutage16: new Date().toLocaleDateString('en-GB'),
    quantitelivree16: '',
    quantiteabord16: '',
    stabilite16: '40660',
    consmyne16: '',
    soutagedegazoil16: '',
    quantiteconsomme16: '',
    quantitetransbordée16: '',
    nombredimmobilisationescale16: '',
    nombredimmobilisationmer16: '',
    prixdegazoil16: '',

    isPermanent: false,
};


export default function Maranda2Form(props) {
  const { addOrEdit, recordForEdit } = props;

  const validate = (fieldValues = values) => {
    let temp = { ...errors };
    if ('quantitelivree16' in fieldValues)
    temp.quantitelivree16 = fieldValues.quantitelivree16 ? '' : 'This field is required.';
  if ('quantiteabord16' in fieldValues)
    temp.quantiteabord16 = fieldValues.quantiteabord16 ? '' : 'This field is required.';
  if ('quantitetotal16' in fieldValues)
    temp.quantitetotal16 = fieldValues.quantitetotal16 ? '' : 'This field is required.';
  

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
  const [datedesoutage16, setDatedesoutage16] = useState(null);
  const [datedesortie16, setDatedesortie16] = useState(null);
  const [dateprochainesoutage16, setDateprochainesoutage16] = useState(null);
  const [nom, setNom] = useState('');
  const [quantitelivree16, setQuantitelivree16] = useState('');
  const [quantiteabord16, setQuantiteabord16] = useState('');
  const [quantitetotal16, setQuantitetotal16] = useState('');
  const [stabilite16, setStabilite16] = useState('');
  const [consmyne16, setConsmyne16] = useState('');
  const [jourautono16, setJourautono16] = useState('');
  const [soutagedegazoil16, setSoutagedegazoil16] = useState('');
  const [prixdegazoil16, setPrixdegazoil16] = useState('');
  const [quantiteconsomme16, setQuantiteconsomme16] = useState('');
  const [quantitetransbordée16, setQuantitetransbordée16] = useState('');
  const [quantitereçue16, setQuantitereçue16] = useState('');
  const [nombredimmobilisationescale16, setNombredimmobilisationescale16] = useState('');
  const [nombredimmobilisationmer16, setNombredimmobilisationmer16] = useState('');
  
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
  name="datedesoutage16"
  label="Date de soutage"
  value={values.datedesoutage16}
  onChange={(e) => {
    setDatedesoutage16(e.target.value);
    handleInputChange(e);
  }}
/>

<Controls.DatePicker
  name="datedesortie16"
  label="Date de sortie"
  value={values.datedesortie16}
  onChange={(e) => {
    setDatedesortie16(e.target.value);
    handleInputChange(e);
  }}
/>

<Controls.Input
  name="quantitelivree16"
  label="Quantité livrée"
  value={values.quantitelivree16}
  onChange={handleInputChange}
  error={errors.quantitelivree16}
/>

<Controls.Input
  name="quantiteabord16"
  label="Quantité A bord"
  value={values.quantiteabord16}
  onChange={handleInputChange}
  error={errors.quantiteabord16}
/>

<Controls.Input
  name="quantitetotal16"
  label="Quantité Total"
  value={values.quantitetotal16}
  onChange={handleInputChange}
  error={errors.quantitetotal16}
/>

<Controls.Input
  name="stabilite16"
  label="STABILITE"
  value={values.stabilite16}
  onChange={handleInputChange}
  error={errors.stabilite16}
/>

<Controls.Input
  name="consmyne16"
  label="cons.Myne"
  value={values.consmyne16}
  onChange={handleInputChange}
  error={errors.consmyne16}
/>

<Controls.Input 
  name="jourautono16"
  label="Jour.Autono"
  value={values.jourautono16}
  onChange={(e) => {
    setJourautono16(e.target.value);
    handleInputChange(e);
  }}
/>

<Controls.DatePicker
  name="dateprochainesoutage16"
  label="DATE PROCHAINE SOUTAGE"
  value={values.dateprochainesoutage16}
  onChange={(e) => {
    setDateprochainesoutage16(e.target.value);
    handleInputChange(e);
  }}
/>

        </Grid>
        <Grid item xs={6}>
         
         
          
        <Controls.Input 
  name="soutagedegazoil16"
  label=" SOUTAGE DE GASOIL "
  value={values.soutagedegazoil16}
  onChange={(e) => {
    setSoutagedegazoil16(e.target.value);
    handleInputChange(e);
  }}
/>

<Controls.Input 
  name="quantiteconsomme16"
  label=" Quantité consommée pendant l'escale "
  value={values.quantiteconsomme16}
  onChange={(e) => {
    setQuantiteconsomme16(e.target.value);
    handleInputChange(e);
  }}
/>

<Controls.Input 
  name="quantitetransbordée16"
  label=" Quantité Transbordée"
  value={values.quantitetransbordée16}
  onChange={(e) => {
    setQuantitetransbordée16(e.target.value);
    handleInputChange(e);
  }}
/>

<Controls.Input 
  name="quantitereçue16"
  label="Quantité Reçue"
  value={values.quantitereçue16}
  onChange={(e) => {
    setQuantitereçue16(e.target.value);
    handleInputChange(e);
  }}
/>

<Controls.Input 
  name="nombredimmobilisationescale16"
  label="Nombre hrs d'Immobilisation en escale au port"
  value={values.nombredimmobilisationescale16}
  onChange={(e) => {
    setNombredimmobilisationescale16(e.target.value);
    handleInputChange(e);
  }}
/>

<Controls.Input 
  name="nombredimmobilisationmer16"
  label="Nombre hrs d'Immobilisation en haute mer"
  value={values.nombredimmobilisationmer16}
  onChange={(e) => {
    setNombredimmobilisationmer16(e.target.value);
    handleInputChange(e);
  }}
/>

<Controls.Input 
  name="prixdegazoil16"
  label=" PRIX DE GAZOIL "
  value={values.prixdegazoil16}
  onChange={(e) => {
    setPrixdegazoil16(e.target.value);
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
