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
    datedesoutage21: new Date().toLocaleDateString('en-GB'),
    datedesortie21: new Date().toLocaleDateString('en-GB'),
    dateprochainesoutage21: new Date().toLocaleDateString('en-GB'),
    quantitelivree21: '',
    quantiteabord21: '',
    stabilite21: 40600,
    consmyne21: '',
    soutagedegazoil21: '',
    quantiteconsomme21: '',
    quantitetransbordée21: '',
    nombredimmobilisationescale21: '',
    nombredimmobilisationmer21: '',
    prixdegazoil21: '',
   
    isPermanent: false,
};

  

export default function Belromar1Form(props) {
  const { addOrEdit, recordForEdit } = props;

  const validate = (fieldValues = values) => {
    let temp = { ...errors };
    if ('quantitelivree21' in fieldValues)
    temp.quantitelivree21 = fieldValues.quantitelivree21 ? '' : 'This field is required.';
if ('quantiteabord21' in fieldValues)
    temp.quantiteabord21 = fieldValues.quantiteabord21 ? '' : 'This field is required.';
if ('quantitetotal21' in fieldValues)
    temp.quantitetotal21 = fieldValues.quantitetotal21 ? '' : 'This field is required.';

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
  const [datedesoutage21, setDatedesoutage21] = useState(null);
  const [datedesortie21, setDatedesortie21] = useState(null);
  const [dateprochainesoutage21, setDateprochainesoutage21] = useState(null);
  const [nom, setNom] = useState('');
  const [quantitelivree21, setQuantitelivree21] = useState('');
  const [quantiteabord21, setQuantiteabord21] = useState('');
  const [quantitetotal21, setQuantitetotal21] = useState('');
  const [stabilite21, setStabilite21] = useState('');
  const [consmyne21, setConsmyne21] = useState('');
  const [jourautono21, setJourautono21] = useState('');
  const [soutagedegazoil21, setSoutagedegazoil21] = useState('');
  const [quantiteconsomme21, setQuantiteconsomme21] = useState('');
  const [quantitetransbordée21, setQuantitetransbordée21] = useState('');
  const [quantitereçue21, setQuantitereçue21] = useState('');
  const [nombredimmobilisationescale21, setNombredimmobilisationescale21] = useState('');
  const [nombredimmobilisationmer21, setNombredimmobilisationmer21] = useState('');
  
  const [prixdegazoil21, setPrixdegazoil21] = useState('');
  
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
  name="datedesoutage21"
  label="Date de soutage"
  value={values.datedesoutage21}
  onChange={(e) => {
    setDatedesoutage21(e.target.value);
    handleInputChange(e);
  }}
/>

<Controls.DatePicker
  name="datedesortie21"
  label="Date de sortie"
  value={values.datedesortie21}
  onChange={(e) => {
    setDatedesortie21(e.target.value);
    handleInputChange(e);
  }}
/>

<Controls.Input
  name="quantitelivree21"
  label="Quantité livrée"
  value={values.quantitelivree21}
  onChange={handleInputChange}
  error={errors.quantitelivree21}
/>

<Controls.Input
  name="quantiteabord21"
  label="Quantité A bord"
  value={values.quantiteabord21}
  onChange={handleInputChange}
  error={errors.quantiteabord21}
/>

<Controls.Input
  name="quantitetotal21"
  label="Quantité Total"
  value={values.quantitetotal21}
  onChange={handleInputChange}
  error={errors.quantitetotal21}
/>

<Controls.Input
  name="stabilite21"
  label="STABILITE"
  value={values.stabilite21}
  onChange={handleInputChange}
  error={errors.stabilite21}
/>

<Controls.Input
  name="consmyne21"
  label="cons.Myne"
  value={values.consmyne21}
  onChange={handleInputChange}
  error={errors.consmyne21}
/>

<Controls.Input 
  name="jourautono21"
  label="Jour.Autono"
  value={values.jourautono21}
  onChange={(e) => {
    setJourautono21(e.target.value);
    handleInputChange(e);
  }}
/>

<Controls.DatePicker
  name="dateprochainesoutage21"
  label="DATE PROCHAINE SOUTAGE "
  value={values.dateprochainesoutage21}
  onChange={(e) => {
    setDateprochainesoutage21(e.target.value);
    handleInputChange(e);
  }}
/>

    
        </Grid>
        <Grid item xs={6}>
         
          
        <Controls.Input 
  name="soutagedegazoil21"
  label=" SOUTAGE DE GASOIL  "
  value={values.soutagedegazoil21}
  onChange={(e) => {
    setSoutagedegazoil21(e.target.value);
    handleInputChange(e);
  }}
/>

<Controls.Input 
  name="quantiteconsomme21"
  label="Quantité consommé pendant l'escale"
  value={values.quantiteconsomme21}
  onChange={(e) => {
    setQuantiteconsomme21(e.target.value);
    handleInputChange(e);
  }}
/>

<Controls.Input 
  name="quantitetransbordée21"
  label="Quantité Transbordée"
  value={values.quantitetransbordée21}
  onChange={(e) => {
    setQuantitetransbordée21(e.target.value);
    handleInputChange(e);
  }}
/>

<Controls.Input 
  name="quantitereçue21"
  label="Quantité Reçue"
  value={values.quantitereçue21}
  onChange={(e) => {
    setQuantitereçue21(e.target.value);
    handleInputChange(e);
  }}
/>  

<Controls.Input 
  name="nombredimmobilisationescale21"
  label="Nombre hrs d'Immobilisation en escale au port"
  value={values.nombredimmobilisationescale21}
  onChange={(e) => {
    setNombredimmobilisationescale21(e.target.value);
    handleInputChange(e);
  }}
/>

<Controls.Input 
  name="nombredimmobilisationmer21"
  label="Nombre hrs d'Immobilisation en haute mer"
  value={values.nombredimmobilisationmer21}
  onChange={(e) => {
    setNombredimmobilisationmer21(e.target.value);
    handleInputChange(e);
  }}
/>

<Controls.Input 
  name="prixdegazoil21"
  label=" PRIX DE GAZOIL  "
  value={values.prixdegazoil21}
  onChange={(e) => {
    setPrixdegazoil21(e.target.value);
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
