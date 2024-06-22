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
  datedesoutage1: new Date().toLocaleDateString('en-GB'),
  datedesortie1: new Date().toLocaleDateString('en-GB'),
  dateprochainesoutage1: new Date().toLocaleDateString('en-GB'),
  quantitelivree1: '',
  quantiteabord1: '',
  stabilite1: 45458,
  consmyne1: '',
  dateprochainesoutage1: '',
  soutagedegazoil1: '',
  quantiteconsomme1: '',
  quantitetransbordée1: '',
  nombredimmobilisationescale1: '',
  nombredimmobilisationmer1: '',
  prixdegazoil1: '',
 
  isPermanent: false,
};

export default function KeltiForm(props) {
  const { addOrEdit, recordForEdit } = props;

  const validate = (fieldValues = values) => {
    let temp = { ...errors };
    if ('quantitelivree1' in fieldValues)
    temp.quantitelivree1 = fieldValues.quantitelivree1 ? '' : 'This field is required.';
    if ('quantiteabord1' in fieldValues)
    temp.quantiteabord1 = fieldValues.quantiteabord1 ? '' : 'This field is required.';
    if ('quantitetotal1' in fieldValues)
    temp.quantitetotal1 = fieldValues.quantitetotal1 ? '' : 'This field is required.';
    

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
  const [datedesoutage1, setDatedesoutage1] = useState(null);
  const [datedesortie1, setDatedesortie1] = useState(null);
  const [dateprochainesoutage1, setDateprochainesoutage1] = useState(null);
  const [nom, setNom] = useState('')
  const [quantitelivree1, setQuantitelivree1] = useState('')
  const [quantiteabord1, setQuantiteabord1] = useState('')
  const [quantitetotal1, setQuantitetotal1] = useState('')
  const [stabilite1, setStabilite1] = useState('')
  const [consmyne1, setConsmyne1] = useState('')
  const [jourautono1, setJourautono1] = useState('')
  const [soutagedegazoil1, setSoutagedegazoil1] = useState('')
  const [quantiteconsomme1, setQuantiteconsomme1] = useState('')
  const [quantitetransbordée1, setQuantitetransbordée1] = useState('')
  const [quantitereçue1, setQuantitereçue1] = useState('')
  const [nombredimmobilisationescale1, setNombredimmobilisationescale1] = useState('')
  const [nombredimmobilisationmer1, setNombredimmobilisationmer1] = useState('')
  const [prixdegazoil1, setPrixdegazoil1] = useState('')
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
                        name="datedesoutage1"
                        label="Date de soutage"
                        value={values.datedesoutage1}
                        onChange={(e) => {
                          setDatedesoutage1(e.target.value);
                          handleInputChange(e);
                        }}
                        
                    />
                   <Controls.DatePicker
  name="datedesortie1"
  label="Date de sortie"
  value={values.datedesortie1}
  onChange={(e) => {
    setDatedesortie1(e.target.value);
    handleInputChange(e);
  }}
/>

                     <Controls.Input
  name="quantitelivree1"
  label="Quantité livrée"
  value={values.quantitelivree1}
  onChange={handleInputChange}
  error={errors.quantitelivree1}
/>

<Controls.Input
  name="quantiteabord1"
  label="Quantité A bord"
  value={values.quantiteabord1}
  onChange={handleInputChange}
  error={errors.quantiteabord1}
/>
<Controls.Input
  name="quantitetotal1"
  label="Quantité Total"
  value={values.quantitetotal1}
  onChange={handleInputChange}
  error={errors.quantitetotal1}
/>
<Controls.Input
  name="stabilite1"
  label="STABILITE"
  value={values.stabilite1}
  onChange={handleInputChange}
  error={errors.stabilite1}
/>
<Controls.Input
  name="consmyne1"
  label="cons.Myne"
  value={values.consmyne1}
  onChange={handleInputChange}
  error={errors.consmyne1}
/>
        
<Controls.Input 
           name="jourautono1"
           label="Jour.Autono"
           value={values.jourautono1}
           onChange={(e) => {
             setJourautono1(e.target.value);
             handleInputChange(e);
           }}
          
         />
          <Controls.DatePicker
                        name="dateprochainesoutage1"
                        label="DATE PROCHAINE SOUTAGE "
                        value={values.dateprochainesoutage1}
                        onChange={(e) => {
                          setDateprochainesoutage1(e.target.value);
                          handleInputChange(e);
                        }}
                        
                    />  
        </Grid>
        <Grid item xs={6}>
         
          
                     <Controls.Input 
           name="soutagedegazoil1"
           label=" SOUTAGE DE GASOIL  "
           value={values.soutagedegazoil1}
           onChange={(e) => {
             setSoutagedegazoil1(e.target.value);
             handleInputChange(e);
           }}
          
         />
         <Controls.Input 
  name="quantiteconsomme1"
  label=" Quantité consommé pendant l'escale "
  value={values.quantiteconsomme1}
  onChange={(e) => {
    setQuantiteconsomme1(e.target.value);
    handleInputChange(e);
  }}
/>

<Controls.Input 
  name="quantitetransbordée1"
  label=" Quantité Transbordée"
  value={values.quantitetransbordée1}
  onChange={(e) => {
    setQuantitetransbordée1(e.target.value);
    handleInputChange(e);
  }}
/>

<Controls.Input 
  name="quantitereçue1"
  label="Quantité Reçue"
  value={values.quantitereçue1}
  onChange={(e) => {
    setQuantitereçue1(e.target.value);
    handleInputChange(e);
  }}
/>

<Controls.Input 
  name="nombredimmobilisationescale1"
  label="Nombre hrs d'Immobilisation en escale au port"
  value={values.nombredimmobilisationescale1}
  onChange={(e) => {
    setNombredimmobilisationescale1(e.target.value);
    handleInputChange(e);
  }}
/>

<Controls.Input 
  name="nombredimmobilisationmer1"
  label="Nombre hrs d'Immobilisation en haute mer"
  value={values.nombredimmobilisationmer1}
  onChange={(e) => {
    setNombredimmobilisationmer1(e.target.value);
    handleInputChange(e);
  }}
/>

         <Controls.Input 
           name="prixdegazoil1"
           label=" PRIX DE GAZOIL  "
           value={values.prixdegazoil1}
           onChange={(e) => {
             setPrixdegazoil1(e.target.value);
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
