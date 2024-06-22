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
    datedesoutage22: new Date().toLocaleDateString('en-GB'),
    datedesortie22: new Date().toLocaleDateString('en-GB'),
    dateprochainesoutage22: new Date().toLocaleDateString('en-GB'),
    quantitelivree22: '',
    quantiteabord22: '',
    stabilite22: 46000,
    consmyne22: '',
    soutagedegazoil22: '',
    quantiteconsomme22: '',
    quantitetransbordée22: '',
    nombredimmobilisationescale22: '',
    nombredimmobilisationmer22: '',
    prixdegazoil22: '',
   
    isPermanent: false,
};


  

export default function AzalForm(props) {
  const { addOrEdit, recordForEdit } = props;

  const validate = (fieldValues = values) => {
    let temp = { ...errors };
    if ('quantitelivree22' in fieldValues)
    temp.quantitelivree22 = fieldValues.quantitelivree22 ? '' : 'This field is required.';
if ('quantiteabord22' in fieldValues)
    temp.quantiteabord22 = fieldValues.quantiteabord22 ? '' : 'This field is required.';
if ('quantitetotal22' in fieldValues)
    temp.quantitetotal22 = fieldValues.quantitetotal22 ? '' : 'This field is required.';

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
  const [datedesoutage22, setDatedesoutage22] = useState(null);
  const [datedesortie22, setDatedesortie22] = useState(null);
  const [dateprochainesoutage22, setDateprochainesoutage22] = useState(null);
  const [nom, setNom] = useState('');
  const [quantitelivree22, setQuantitelivree22] = useState('');
  const [quantiteabord22, setQuantiteabord22] = useState('');
  const [quantitetotal22, setQuantitetotal22] = useState('');
  const [stabilite22, setStabilite22] = useState('');
  const [consmyne22, setConsmyne22] = useState('');
  const [jourautono22, setJourautono22] = useState('');
  const [soutagedegazoil22, setSoutagedegazoil22] = useState('');
  const [quantiteconsomme22, setQuantiteconsomme22] = useState('');
  const [quantitetransbordée22, setQuantitetransbordée22] = useState('');
  const [quantitereçue22, setQuantitereçue22] = useState('');
  const [nombredimmobilisationescale22, setNombredimmobilisationescale22] = useState('');
  const [nombredimmobilisationmer22, setNombredimmobilisationmer22] = useState('');
  const [prixdegazoil22, setPrixdegazoil22] = useState('');
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
  name="datedesoutage22"
  label="Date de soutage"
  value={values.datedesoutage22}
  onChange={(e) => {
    setDatedesoutage22(e.target.value);
    handleInputChange(e);
  }}
/>

<Controls.DatePicker
  name="datedesortie22"
  label="Date de sortie"
  value={values.datedesortie22}
  onChange={(e) => {
    setDatedesortie22(e.target.value);
    handleInputChange(e);
  }}
/>

<Controls.Input
  name="quantitelivree22"
  label="Quantité livrée"
  value={values.quantitelivree22}
  onChange={handleInputChange}
  error={errors.quantitelivree22}
/>

<Controls.Input
  name="quantiteabord22"
  label="Quantité A bord"
  value={values.quantiteabord22}
  onChange={handleInputChange}
  error={errors.quantiteabord22}
/>

<Controls.Input
  name="quantitetotal22"
  label="Quantité Total"
  value={values.quantitetotal22}
  onChange={handleInputChange}
  error={errors.quantitetotal22}
/>

<Controls.Input
  name="stabilite22"
  label="STABILITE"
  value={values.stabilite22}
  onChange={handleInputChange}
  error={errors.stabilite22}
/>

<Controls.Input
  name="consmyne22"
  label="cons.Myne"
  value={values.consmyne22}
  onChange={handleInputChange}
  error={errors.consmyne22}
/>

<Controls.Input 
  name="jourautono22"
  label="Jour.Autono"
  value={values.jourautono22}
  onChange={(e) => {
    setJourautono22(e.target.value);
    handleInputChange(e);
  }}
/>

<Controls.DatePicker
  name="dateprochainesoutage22"
  label="DATE PROCHAINE SOUTAGE"
  value={values.dateprochainesoutage22}
  onChange={(e) => {
    setDateprochainesoutage22(e.target.value);
    handleInputChange(e);
  }}
/>

        </Grid>
        <Grid item xs={6}>
         
          
        <Controls.Input 
  name="soutagedegazoil22"
  label=" SOUTAGE DE GASOIL  "
  value={values.soutagedegazoil22}
  onChange={(e) => {
    setSoutagedegazoil22(e.target.value);
    handleInputChange(e);
  }}
/>

<Controls.Input 
  name="quantiteconsomme22"
  label="Quantité consommé pendant l'escale"
  value={values.quantiteconsomme22}
  onChange={(e) => {
    setQuantiteconsomme22(e.target.value);
    handleInputChange(e);
  }}
/>

<Controls.Input 
  name="quantitetransbordée22"
  label="Quantité Transbordée"
  value={values.quantitetransbordée22}
  onChange={(e) => {
    setQuantitetransbordée22(e.target.value);
    handleInputChange(e);
  }}
/>

<Controls.Input 
  name="quantitereçue22"
  label="Quantité Reçue"
  value={values.quantitereçue22}
  onChange={(e) => {
    setQuantitereçue22(e.target.value);
    handleInputChange(e);
  }}
/>  

<Controls.Input 
  name="nombredimmobilisationescale22"
  label="Nombre hrs d'Immobilisation en escale au port"
  value={values.nombredimmobilisationescale22}
  onChange={(e) => {
    setNombredimmobilisationescale22(e.target.value);
    handleInputChange(e);
  }}
/>

<Controls.Input 
  name="nombredimmobilisationmer22"
  label="Nombre hrs d'Immobilisation en haute mer"
  value={values.nombredimmobilisationmer22}
  onChange={(e) => {
    setNombredimmobilisationmer22(e.target.value);
    handleInputChange(e);
  }}
/>

<Controls.Input 
  name="prixdegazoil22"
  label=" PRIX DE GAZOIL  "
  value={values.prixdegazoil22}
  onChange={(e) => {
    setPrixdegazoil22(e.target.value);
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
