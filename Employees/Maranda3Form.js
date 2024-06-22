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
  datedesoutage6: new Date().toLocaleDateString('en-GB'),
  datedesortie6: new Date().toLocaleDateString('en-GB'),
  dateprochainesoutage6: new Date().toLocaleDateString('en-GB'),
  quantitelivree6: '',
  quantiteabord6: '',
  stabilite6: '40660',
  consmyne6: '',
  dateprochainesoutage6: '',
  soutagedegazoil6: '',
  quantiteconsomme6: '',
  quantitetransbordée6: '',
  nombredimmobilisationescale6: '',
  nombredimmobilisationmer6: '',
  prixdegazoil6: '',
 
  isPermanent: false,
};

export default function Maranda3Form(props) {
  const { addOrEdit, recordForEdit } = props;

  const validate = (fieldValues = values) => {
    let temp = { ...errors };
    if ('quantitelivree6' in fieldValues)
    temp.quantitelivree6 = fieldValues.quantitelivree6 ? '' : 'This field is required.';
    if ('quantiteabord6' in fieldValues)
    temp.quantiteabord6 = fieldValues.quantiteabord6 ? '' : 'This field is required.';
    if ('quantitetotal6' in fieldValues)
    temp.quantitetotal6 = fieldValues.quantitetotal6 ? '' : 'This field is required.';
    

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
  const [datedesoutage6, setDatedesoutage6] = useState(null);
  const [datedesortie6, setDatedesortie6] = useState(null);
  const [dateprochainesoutage6, setDateprochainesoutage6] = useState(null);
  const [nom, setNom] = useState('')
  const [quantitelivree6, setQuantitelivree6] = useState('')
  const [quantiteabord6, setQuantiteabord6] = useState('')
  const [quantitetotal6, setQuantitetotal6] = useState('')
  const [stabilite6, setStabilite6] = useState('')
  const [consmyne6, setConsmyne6] = useState('')
  const [jourautono6, setJourautono6] = useState('')
  const [soutagedegazoil6, setSoutagedegazoil6] = useState('')
  const [prixdegazoil6, setPrixdegazoil6] = useState('')
  const [quantiteconsomme6, setQuantiteconsomme6] = useState('')
  const [quantitetransbordée6, setQuantitetransbordée6] = useState('')
  const [quantitereçue6, setQuantitereçue6] = useState('')
  const [nombredimmobilisationescale6, setNombredimmobilisationescale6] = useState('')
  const [nombredimmobilisationmer6, setNombredimmobilisationmer6] = useState('')
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
                        name="datedesoutage6"
                        label="Date de soutage"
                        value={values.datedesoutage6}
                        onChange={(e) => {
                          setDatedesoutage6(e.target.value);
                          handleInputChange(e);
                        }}
                        
                    />
                   <Controls.DatePicker
  name="datedesortie6"
  label="Date de sortie"
  value={values.datedesortie6}
  onChange={(e) => {
    setDatedesortie6(e.target.value);
    handleInputChange(e);
  }}
/>

                     <Controls.Input
  name="quantitelivree6"
  label="Quantité livrée"
  value={values.quantitelivree6}
  onChange={handleInputChange}
  error={errors.quantitelivree6}
/>

<Controls.Input
  name="quantiteabord6"
  label="Quantité A bord"
  value={values.quantiteabord6}
  onChange={handleInputChange}
  error={errors.quantiteabord6}
/>
<Controls.Input
  name="quantitetotal6"
  label="Quantité Total"
  value={values.quantitetotal6}
  onChange={handleInputChange}
  error={errors.quantitetotal6}
/>
<Controls.Input
  name="stabilite6"
  label="STABILITE"
  value={values.stabilite6}
  onChange={handleInputChange}
  error={errors.stabilite6}
/>
<Controls.Input
  name="consmyne6"
  label="cons.Myne"
  value={values.consmyne6}
  onChange={handleInputChange}
  error={errors.consmyne6}
/>
        
<Controls.Input 
           name="jourautono6"
           label="Jour.Autono"
           value={values.jourautono6}
           onChange={(e) => {
             setJourautono6(e.target.value);
             handleInputChange(e);
           }}
          
         />
         <Controls.DatePicker
                        name="dateprochainesoutage6"
                        label="DATE PROCHAINE SOUTAGE "
                        value={values.dateprochainesoutage6}
                        onChange={(e) => {
                          setDateprochainesoutage6(e.target.value);
                          handleInputChange(e);
                        }}
                        
                    />
        </Grid>
        <Grid item xs={6}>
         
         
          
                     <Controls.Input 
           name="soutagedegazoil6"
           label=" SOUTAGE DE GASOIL  "
           value={values.soutagedegazoil6}
           onChange={(e) => {
             setSoutagedegazoil6(e.target.value);
             handleInputChange(e);
           }}
          
         />
          <Controls.Input 
           name="quantiteconsomme6"
           label=" Quantité consommé pendant l'escale "
           value={values.quantiteconsomme6}
           onChange={(e) => {
             setQuantiteconsomme6(e.target.value);
             handleInputChange(e);
           }}
          
         />
         
          <Controls.Input 
           name="quantitetransbordée6"
           label=" Quantité Transbordée"
           value={values.quantitetransbordée6}
           onChange={(e) => {
             setQuantiteconsomme6(e.target.value);
             handleInputChange(e);
           }}
          
         />
          <Controls.Input 
           name="quantitereçue6"
           label="Quantité Reçue"
           value={values.quantitereçue6}
           onChange={(e) => {
            setQuantitereçue6(e.target.value);
             handleInputChange(e);
           }}
          
         />
          <Controls.Input 
           name="nombredimmobilisationescale6"
           label="Nombre hrs d'Immobilisation en escale au port"
           value={values.nombredimmobilisationescale6}
           onChange={(e) => {
            setNombredimmobilisationescale6(e.target.value);
             handleInputChange(e);
           }}
          
         />
            <Controls.Input 
           name="nombredimmobilisationmer6"
           label="Nombre hrs d'Immobilisation en haute mer"
           value={values.nombredimmobilisationmer6}
           onChange={(e) => {
            setNombredimmobilisationmer6(e.target.value);
             handleInputChange(e);
           }}
          
         />
         <Controls.Input 
           name="prixdegazoil6"
           label=" PRIX DE GAZOIL  "
           value={values.prixdegazoil6}
           onChange={(e) => {
             setPrixdegazoil6(e.target.value);
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
