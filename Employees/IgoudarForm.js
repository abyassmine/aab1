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
  datedesoutage5: new Date().toLocaleDateString('en-GB'),
  datedesortie5: new Date().toLocaleDateString('en-GB'),
  dateprochainesoutage5: new Date().toLocaleDateString('en-GB'),
  quantitelivree5: '',
  quantiteabord5: '',
  stabilite5: '40660',
  consmyne5: '',
  dateprochainesoutage5: '',
  soutagedegazoil5: '',
  quantiteconsomme5: '',
  quantitetransbordée5: '',
  nombredimmobilisationescale5: '',
  nombredimmobilisationmer5: '',
  prixdegazoil5: '',
  
 
  isPermanent: false,
};

export default function IgoudarForm(props) {
  const { addOrEdit, recordForEdit } = props;

  const validate = (fieldValues = values) => {
    let temp = { ...errors };
    if ('quantitelivree5' in fieldValues)
    temp.quantitelivree5 = fieldValues.quantitelivree5 ? '' : 'This field is required.';
    if ('quantiteabord5' in fieldValues)
    temp.quantiteabord5 = fieldValues.quantiteabord5 ? '' : 'This field is required.';
    if ('quantitetotal5' in fieldValues)
    temp.quantitetotal5 = fieldValues.quantitetotal5 ? '' : 'This field is required.';
    

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
  const [datedesoutage5, setDatedesoutage5] = useState(null);
  const [datedesortie5, setDatedesortie5] = useState(null);
  const [dateprochainesoutage5, setDateprochainesoutage5] = useState(null);
  const [nom, setNom] = useState('')
  const [quantitelivree5, setQuantitelivree5] = useState('');
const [quantiteabord5, setQuantiteabord5] = useState('');
const [quantitetotal5, setQuantitetotal5] = useState('');
const [stabilite5, setStabilite5] = useState('');
const [consmyne5, setConsmyne5] = useState('');
const [jourautono5, setJourautono5] = useState('');
const [soutagedegazoil5, setSoutagedegazoil5] = useState('');
const [prixdegazoil5, setPrixdegazoil5] = useState('');
const [quantiteconsomme5, setQuantiteconsomme5] = useState('');
const [quantitetransbordée5, setQuantitetransbordée5] = useState('');
const [quantitereçue5, setQuantitereçue5] = useState('');
const [nombredimmobilisationescale5, setNombredimmobilisationescale5] = useState('');
const [nombredimmobilisationmer5, setNombredimmobilisationmer5] = useState('');

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
  name="datedesoutage5"
  label="Date de soutage"
  value={values.datedesoutage5}
  onChange={(e) => {
    setDatedesoutage5(e.target.value);
    handleInputChange(e);
  }}
/>

<Controls.DatePicker
  name="datedesortie5"
  label="Date de sortie"
  value={values.datedesortie5}
  onChange={(e) => {
    setDatedesortie5(e.target.value);
    handleInputChange(e);
  }}
/>

<Controls.Input
  name="quantitelivree5"
  label="Quantité livrée"
  value={values.quantitelivree5}
  onChange={handleInputChange}
  error={errors.quantitelivree5}
/>

<Controls.Input
  name="quantiteabord5"
  label="Quantité A bord"
  value={values.quantiteabord5}
  onChange={handleInputChange}
  error={errors.quantiteabord5}
/>

<Controls.Input
  name="quantitetotal5"
  label="Quantité Total"
  value={values.quantitetotal5}
  onChange={handleInputChange}
  error={errors.quantitetotal5}
/>

<Controls.Input
  name="stabilite5"
  label="STABILITE"
  value={values.stabilite5}
  onChange={handleInputChange}
  error={errors.stabilite5}
/>

<Controls.Input
  name="consmyne5"
  label="cons.Myne"
  value={values.consmyne5}
  onChange={handleInputChange}
  error={errors.consmyne5}
/>

<Controls.Input 
  name="jourautono5"
  label="Jour.Autono"
  value={values.jourautono5}
  onChange={(e) => {
    setJourautono5(e.target.value);
    handleInputChange(e);
  }}
/>

<Controls.DatePicker
  name="dateprochainesoutage5"
  label="DATE PROCHAINE SOUTAGE "
  value={values.dateprochainesoutage5}
  onChange={(e) => {
    setDateprochainesoutage5(e.target.value);
    handleInputChange(e);
  }}
/>

        </Grid>
        <Grid item xs={6}>
         
         
          
        <Controls.Input 
  name="soutagedegazoil5"
  label=" SOUTAGE DE GASOIL  "
  value={values.soutagedegazoil5}
  onChange={(e) => {
    setSoutagedegazoil5(e.target.value);
    handleInputChange(e);
  }}
/>

<Controls.Input 
  name="quantiteconsomme5"
  label=" Quantité consommé pendant l'escale "
  value={values.quantiteconsomme5}
  onChange={(e) => {
    setQuantiteconsomme5(e.target.value);
    handleInputChange(e);
  }}
/>

<Controls.Input 
  name="quantitetransbordée5"
  label=" Quantité Transbordée"
  value={values.quantitetransbordée5}
  onChange={(e) => {
    setQuantitetransbordée5(e.target.value);
    handleInputChange(e);
  }}
/>

<Controls.Input 
  name="quantitereçue5"
  label="Quantité Reçue"
  value={values.quantitereçue5}
  onChange={(e) => {
    setQuantitereçue5(e.target.value);
    handleInputChange(e);
  }}
/>

<Controls.Input 
  name="nombredimmobilisationescale5"
  label="Nombre hrs d'Immobilisation en escale au port"
  value={values.nombredimmobilisationescale5}
  onChange={(e) => {
    setNombredimmobilisationescale5(e.target.value);
    handleInputChange(e);
  }}
/>

<Controls.Input 
  name="nombredimmobilisationmer5"
  label="Nombre hrs d'Immobilisation en haute mer"
  value={values.nombredimmobilisationmer5}
  onChange={(e) => {
    setNombredimmobilisationmer5(e.target.value);
    handleInputChange(e);
  }}
/>

<Controls.Input 
  name="prixdegazoil5"
  label=" PRIX DE GAZOIL  "
  value={values.prixdegazoil5}
  onChange={(e) => {
    setPrixdegazoil5(e.target.value);
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
