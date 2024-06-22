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
    datedesoutage19: new Date().toLocaleDateString('en-GB'),
    datedesortie19: new Date().toLocaleDateString('en-GB'),
    dateprochainesoutage19: new Date().toLocaleDateString('en-GB'),
    quantitelivree19: '',
    quantiteabord19: '',
    stabilite19: 34000,
    consmyne19: '',
    dateprochainesoutage19: '',
    soutagedegazoil19: '',
    quantiteconsomme19: '',
    quantitetransbordée19: '',
    nombredimmobilisationescale19: '',
    nombredimmobilisationmer19: '',
    prixdegazoil19: '',
   
    isPermanent: false,
  };
  

export default function Anzar1Form(props) {
  const { addOrEdit, recordForEdit } = props;

  const validate = (fieldValues = values) => {
    let temp = { ...errors };
    if ('quantitelivree19' in fieldValues)
    temp.quantitelivree19 = fieldValues.quantitelivree19 ? '' : 'This field is required.';
if ('quantiteabord19' in fieldValues)
    temp.quantiteabord19 = fieldValues.quantiteabord19 ? '' : 'This field is required.';
if ('quantitetotal19' in fieldValues)
    temp.quantitetotal19 = fieldValues.quantitetotal19 ? '' : 'This field is required.';


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
  const [datedesoutage19, setDatedesoutage19] = useState(null);
  const [datedesortie19, setDatedesortie19] = useState(null);
  const [dateprochainesoutage19, setDateprochainesoutage19] = useState(null);
  const [nom, setNom] = useState('')
  const [quantitelivree19, setQuantitelivree19] = useState('')
  const [quantiteabord19, setQuantiteabord19] = useState('')
  const [quantitetotal19, setQuantitetotal19] = useState('')
  const [stabilite19, setStabilite19] = useState('')
  const [consmyne19, setConsmyne19] = useState('')
  const [jourautono19, setJourautono19] = useState('')
  const [soutagedegazoil19, setSoutagedegazoil19] = useState('')
  const [quantiteconsomme19, setQuantiteconsomme19] = useState('')
  const [quantitetransbordée19, setQuantitetransbordée19] = useState('')
  const [quantitereçue19, setQuantitereçue19] = useState('')
  const [nombredimmobilisationescale19, setNombredimmobilisationescale19] = useState('')
  const [nombredimmobilisationmer19, setNombredimmobilisationmer19] = useState('')
  
  const [prixdegazoil19, setPrixdegazoil19] = useState('')
  
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
  name="datedesoutage19"
  label="Date de soutage"
  value={values.datedesoutage19}
  onChange={(e) => {
    setDatedesoutage19(e.target.value);
    handleInputChange(e);
  }}
/>

<Controls.DatePicker
  name="datedesortie19"
  label="Date de sortie"
  value={values.datedesortie19}
  onChange={(e) => {
    setDatedesortie19(e.target.value);
    handleInputChange(e);
  }}
/>

<Controls.Input
  name="quantitelivree19"
  label="Quantité livrée"
  value={values.quantitelivree19}
  onChange={handleInputChange}
  error={errors.quantitelivree19}
/>

<Controls.Input
  name="quantiteabord19"
  label="Quantité A bord"
  value={values.quantiteabord19}
  onChange={handleInputChange}
  error={errors.quantiteabord19}
/>

<Controls.Input
  name="quantitetotal19"
  label="Quantité Total"
  value={values.quantitetotal19}
  onChange={handleInputChange}
  error={errors.quantitetotal19}
/>

<Controls.Input
  name="stabilite19"
  label="STABILITE"
  value={values.stabilite19}
  onChange={handleInputChange}
  error={errors.stabilite19}
/>

<Controls.Input
  name="consmyne19"
  label="cons.Myne"
  value={values.consmyne19}
  onChange={handleInputChange}
  error={errors.consmyne19}
/>

<Controls.Input 
  name="jourautono19"
  label="Jour.Autono"
  value={values.jourautono19}
  onChange={(e) => {
    setJourautono19(e.target.value);
    handleInputChange(e);
  }}
/>

<Controls.DatePicker
  name="dateprochainesoutage19"
  label="DATE PROCHAINE SOUTAGE "
  value={values.dateprochainesoutage19}
  onChange={(e) => {
    setDateprochainesoutage19(e.target.value);
    handleInputChange(e);
  }}
/>
    
        </Grid>
        <Grid item xs={6}>
         
          
        <Controls.Input 
  name="soutagedegazoil19"
  label=" SOUTAGE DE GASOIL  "
  value={values.soutagedegazoil19}
  onChange={(e) => {
    setSoutagedegazoil19(e.target.value);
    handleInputChange(e);
  }}
/>

<Controls.Input 
  name="quantiteconsomme19"
  label="Quantité consommé pendant l'escale"
  value={values.quantiteconsomme19}
  onChange={(e) => {
    setQuantiteconsomme19(e.target.value);
    handleInputChange(e);
  }}
/>

<Controls.Input 
  name="quantitetransbordée19"
  label="Quantité Transbordée"
  value={values.quantitetransbordée19}
  onChange={(e) => {
    setQuantitetransbordée19(e.target.value);
    handleInputChange(e);
  }}
/>

<Controls.Input 
  name="quantitereçue19"
  label="Quantité Reçue"
  value={values.quantitereçue19}
  onChange={(e) => {
    setQuantitereçue19(e.target.value);
    handleInputChange(e);
  }}
/>  

<Controls.Input 
  name="nombredimmobilisationescale19"
  label="Nombre hrs d'Immobilisation en escale au port"
  value={values.nombredimmobilisationescale19}
  onChange={(e) => {
    setNombredimmobilisationescale19(e.target.value);
    handleInputChange(e);
  }}
/>

<Controls.Input 
  name="nombredimmobilisationmer19"
  label="Nombre hrs d'Immobilisation en haute mer"
  value={values.nombredimmobilisationmer19}
  onChange={(e) => {
    setNombredimmobilisationmer19(e.target.value);
    handleInputChange(e);
  }}
/>

<Controls.Input 
  name="prixdegazoil19"
  label=" PRIX DE GAZOIL  "
  value={values.prixdegazoil19}
  onChange={(e) => {
    setPrixdegazoil19(e.target.value);
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
