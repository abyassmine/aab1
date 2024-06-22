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
  datedesoutage15: new Date().toLocaleDateString('en-GB'),
  datedesortie15: new Date().toLocaleDateString('en-GB'),
  dateprochainesoutage15: new Date().toLocaleDateString('en-GB'),
  quantitelivree15: '',
  quantiteabord15: '',
  stabilite15: '40660',
  consmyne15: '',
  soutagedegazoil15: '',
  quantiteconsomme15: '',
  quantitetransbordée15: '',
  nombredimmobilisationescale15: '',
  nombredimmobilisationmer15: '',
  prixdegazoil15: '',
 
  isPermanent: false,
};

export default function Maranda1Form(props) {
  const { addOrEdit, recordForEdit } = props;

  const validate = (fieldValues = values) => {
    let temp = { ...errors };
    if ('quantitelivree15' in fieldValues)
  temp.quantitelivree15 = fieldValues.quantitelivree15 ? '' : 'This field is required.';
if ('quantiteabord15' in fieldValues)
  temp.quantiteabord15 = fieldValues.quantiteabord15 ? '' : 'This field is required.';
if ('quantitetotal15' in fieldValues)
  temp.quantitetotal15 = fieldValues.quantitetotal15 ? '' : 'This field is required.';


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
  const [datedesoutage15, setDatedesoutage15] = useState(null);
const [datedesortie15, setDatedesortie15] = useState(null);
const [dateprochainesoutage15, setDateprochainesoutage15] = useState(null);
const [nom, setNom] = useState('');
const [quantitelivree15, setQuantitelivree15] = useState('');
const [quantiteabord15, setQuantiteabord15] = useState('');
const [quantitetotal15, setQuantitetotal15] = useState('');
const [stabilite15, setStabilite15] = useState('');
const [consmyne15, setConsmyne15] = useState('');
const [jourautono15, setJourautono15] = useState('');
const [soutagedegazoil15, setSoutagedegazoil15] = useState('');
const [prixdegazoil15, setPrixdegazoil15] = useState('');
const [quantiteconsomme15, setQuantiteconsomme15] = useState('');
const [quantitetransbordée15, setQuantitetransbordée15] = useState('');
const [quantitereçue15, setQuantitereçue15] = useState('');
const [nombredimmobilisationescale15, setNombredimmobilisationescale15] = useState('');
const [nombredimmobilisationmer15, setNombredimmobilisationmer15] = useState('');

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
  name="datedesoutage15"
  label="Date de soutage"
  value={values.datedesoutage15}
  onChange={(e) => {
    setDatedesoutage15(e.target.value);
    handleInputChange(e);
  }}
/>

<Controls.DatePicker
  name="datedesortie15"
  label="Date de sortie"
  value={values.datedesortie15}
  onChange={(e) => {
    setDatedesortie15(e.target.value);
    handleInputChange(e);
  }}
/>

<Controls.Input
  name="quantitelivree15"
  label="Quantité livrée"
  value={values.quantitelivree15}
  onChange={handleInputChange}
  error={errors.quantitelivree15}
/>

<Controls.Input
  name="quantiteabord15"
  label="Quantité A bord"
  value={values.quantiteabord15}
  onChange={handleInputChange}
  error={errors.quantiteabord15}
/>

<Controls.Input
  name="quantitetotal15"
  label="Quantité Total"
  value={values.quantitetotal15}
  onChange={handleInputChange}
  error={errors.quantitetotal15}
/>

<Controls.Input
  name="stabilite15"
  label="STABILITE"
  value={values.stabilite15}
  onChange={handleInputChange}
  error={errors.stabilite15}
/>

<Controls.Input
  name="consmyne15"
  label="cons.Myne"
  value={values.consmyne15}
  onChange={handleInputChange}
  error={errors.consmyne15}
/>

<Controls.Input 
  name="jourautono15"
  label="Jour.Autono"
  value={values.jourautono15}
  onChange={(e) => {
    setJourautono15(e.target.value);
    handleInputChange(e);
  }}
/>

<Controls.DatePicker
  name="dateprochainesoutage15"
  label="DATE PROCHAINE SOUTAGE"
  value={values.dateprochainesoutage15}
  onChange={(e) => {
    setDateprochainesoutage15(e.target.value);
    handleInputChange(e);
  }}
/>

        </Grid>
        <Grid item xs={6}>
         
         
          
        <Controls.Input 
  name="soutagedegazoil15"
  label=" Compliment inter marée  "
  value={values.soutagedegazoil15}
  onChange={(e) => {
    setSoutagedegazoil15(e.target.value);
    handleInputChange(e);
  }}
/>

<Controls.Input 
  name="quantiteconsomme15"
  label=" Quantité consommée pendant l'escale "
  value={values.quantiteconsomme15}
  onChange={(e) => {
    setQuantiteconsomme15(e.target.value);
    handleInputChange(e);
  }}
/>

<Controls.Input 
  name="quantitetransbordée15"
  label=" Quantité Transbordée"
  value={values.quantitetransbordée15}
  onChange={(e) => {
    setQuantitetransbordée15(e.target.value);
    handleInputChange(e);
  }}
/>

<Controls.Input 
  name="quantitereçue15"
  label="Quantité Reçue"
  value={values.quantitereçue15}
  onChange={(e) => {
    setQuantitereçue15(e.target.value);
    handleInputChange(e);
  }}
/>

<Controls.Input 
  name="nombredimmobilisationescale15"
  label="Nombre hrs d'Immobilisation en escale au port"
  value={values.nombredimmobilisationescale15}
  onChange={(e) => {
    setNombredimmobilisationescale15(e.target.value);
    handleInputChange(e);
  }}
/>

<Controls.Input 
  name="nombredimmobilisationmer15"
  label="Nombre hrs d'Immobilisation en haute mer"
  value={values.nombredimmobilisationmer15}
  onChange={(e) => {
    setNombredimmobilisationmer15(e.target.value);
    handleInputChange(e);
  }}
/>

<Controls.Input 
  name="prixdegazoil15"
  label=" PRIX DE GAZOIL "
  value={values.prixdegazoil15}
  onChange={(e) => {
    setPrixdegazoil15(e.target.value);
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
