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
  datedesoutage2: new Date().toLocaleDateString('en-GB'),
  datedesortie2: new Date().toLocaleDateString('en-GB'),
  dateprochainesoutage2: new Date().toLocaleDateString('en-GB'),
  quantitelivree2: '',
  quantiteabord2: '',
  stabilite2: 45466,
  consmyne2: '',
  dateprochainesoutage2: '',
  soutagedegazoil2: '',
  quantiteconsomme2: '',
  quantitetransbordée2: '',
  nombredimmobilisationescale2: '',
  nombredimmobilisationmer2: '',
  prixdegazoil2: '',
 
  isPermanent: false,
};

export default function Anzar1Form(props) {
  const { addOrEdit, recordForEdit } = props;

  const validate = (fieldValues = values) => {
    let temp = { ...errors };
    if ('quantitelivree2' in fieldValues)
    temp.quantitelivree2 = fieldValues.quantitelivree2 ? '' : 'This field is required.';
    if ('quantiteabord2' in fieldValues)
    temp.quantiteabord2 = fieldValues.quantiteabord2 ? '' : 'This field is required.';
    if ('quantitetotal2' in fieldValues)
    temp.quantitetotal2 = fieldValues.quantitetotal2 ? '' : 'This field is required.';
    

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
  const [datedesoutage2, setDatedesoutage2] = useState(null);
  const [datedesortie2, setDatedesortie2] = useState(null);
  const [dateprochainesoutage2, setDateprochainesoutage2] = useState(null);
  const [nom, setNom] = useState('')
  const [quantitelivree2, setQuantitelivree2] = useState('')
  const [quantiteabord2, setQuantiteabord2] = useState('')
  const [quantitetotal2, setQuantitetotal2] = useState('')
  const [stabilite2, setStabilite2] = useState('')
  const [consmyne2, setConsmyne2] = useState('')
  const [jourautono2, setJourautono2] = useState('')
  const [soutagedegazoil2, setSoutagedegazoil2] = useState('')
  const [quantiteconsomme2, setQuantiteconsomme2] = useState('')
  const [quantitetransbordée2, setQuantitetransbordée2] = useState('')
  const [quantitereçue2, setQuantitereçue2] = useState('')
  const [nombredimmobilisationescale2, setNombredimmobilisationescale2] = useState('')
  const [nombredimmobilisationmer2, setNombredimmobilisationmer2] = useState('')
 
  const [prixdegazoil2, setPrixdegazoil2] = useState('')
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
                        name="datedesoutage2"
                        label="Date de soutage"
                        value={values.datedesoutage2}
                        onChange={(e) => {
                          setDatedesoutage2(e.target.value);
                          handleInputChange(e);
                        }}
                        
                    />
                   <Controls.DatePicker
  name="datedesortie2"
  label="Date de sortie"
  value={values.datedesortie2}
  onChange={(e) => {
    setDatedesortie2(e.target.value);
    handleInputChange(e);
  }}
/>

                     <Controls.Input
  name="quantitelivree2"
  label="Quantité livrée"
  value={values.setQuantitelivree2}
  onChange={handleInputChange}
  error={errors.quantitelivree2}
/>

<Controls.Input
  name="quantiteabord2"
  label="Quantité A bord"
  value={values.quantiteabord2}
  onChange={handleInputChange}
  error={errors.quantiteabord2}
/>
<Controls.Input
  name="quantitetotal2"
  label="Quantité Total"
  value={values.quantitetotal2}
  onChange={handleInputChange}
  error={errors.quantitetotal2}
/>
<Controls.Input
  name="stabilite2"
  label="STABILITE"
  value={values.stabilite2}
  onChange={handleInputChange}
  error={errors.stabilite2}
/>
<Controls.Input
  name="consmyne2"
  label="cons.Myne"
  value={values.consmyne2}
  onChange={handleInputChange}
  error={errors.consmyne2}
/>
        
<Controls.Input 
           name="jourautono2"
           label="Jour.Autono"
           value={values.jourautono2}
           onChange={(e) => {
             setJourautono2(e.target.value);
             handleInputChange(e);
           }}
          
         />
          <Controls.DatePicker
                        name="dateprochainesoutage2"
                        label="DATE PROCHAINE SOUTAGE "
                        value={values.dateprochainesoutage2}
                        onChange={(e) => {
                          setDateprochainesoutage2(e.target.value);
                          handleInputChange(e);
                        }}
                        
                    />      
        </Grid>
        <Grid item xs={6}>
         
          
                     <Controls.Input 
           name="soutagedegazoil2"
           label=" SOUTAGE DE GASOIL  "
           value={values.soutagedegazoil2}
           onChange={(e) => {
             setSoutagedegazoil2(e.target.value);
             handleInputChange(e);
           }}
          
         />
         <Controls.Input 
  name="quantiteconsomme2"
  label="Quantité consommé pendant l'escale"
  value={values.quantiteconsomme2}
  onChange={(e) => {
    setQuantiteconsomme2(e.target.value);
    handleInputChange(e);
  }}
/>

<Controls.Input 
  name="quantitetransbordée2"
  label="Quantité Transbordée"
  value={values.quantitetransbordée2}
  onChange={(e) => {
    setQuantitetransbordée2(e.target.value);
    handleInputChange(e);
  }}
/>

<Controls.Input 
  name="quantitereçue2"
  label="Quantité Reçue"
  value={values.quantitereçue2}
  onChange={(e) => {
    setQuantitereçue2(e.target.value);
    handleInputChange(e);
  }}
/>

<Controls.Input 
  name="nombredimmobilisationescale2"
  label="Nombre hrs d'Immobilisation en escale au port"
  value={values.nombredimmobilisationescale2}
  onChange={(e) => {
    setNombredimmobilisationescale2(e.target.value);
    handleInputChange(e);
  }}
/>

<Controls.Input 
  name="nombredimmobilisationmer2"
  label="Nombre hrs d'Immobilisation en haute mer"
  value={values.nombredimmobilisationmer2}
  onChange={(e) => {
    setNombredimmobilisationmer2(e.target.value);
    handleInputChange(e);
  }}
/>

         <Controls.Input 
           name="prixdegazoil2"
           label=" PRIX DE GAZOIL  "
           value={values.prixdegazoil2}
           onChange={(e) => {
             setPrixdegazoil2(e.target.value);
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
