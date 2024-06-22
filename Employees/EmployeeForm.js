import React, { useState, useEffect } from 'react';
import { Grid } from '@material-ui/core';
import Controls from './../components/controls/Controls';
import { useForm, Form } from './../components/useForm';
import * as employeeService from './../services/EmployeeService';

const typeItems = [
  { id: 'pc', title: 'PC' },
  { id: 'imprimante', title: 'imprimante' },
  { id: 'scanner', title: 'scanner' },
];

const initialFValues = {
  id: 0,
  datedesoutage: new Date().toLocaleDateString('en-GB'),
  datedesortie: new Date().toLocaleDateString('en-GB'),
  dateprochainesoutage: new Date().toLocaleDateString('en-GB'),
  quantitelivree: '',
  quantiteabord: '',
  quantitereçu: '',
  stabilite: 45458,
  consmyne: '',
  dateprochainesoutage: '', 
  soutagedegazoil: '',
  prixdegazoil: '',
 
  isPermanent: false,
};

export default function EmployeeForm(props) {
  const { addOrEdit, recordForEdit } = props;

  const validate = (fieldValues = values) => {
    let temp = { ...errors };
    if ('quantitelivree' in fieldValues)
    temp.quantitelivree = fieldValues.quantitelivree ? '' : 'This field is required.';
    if ('quantiteabord' in fieldValues)
    temp.quantiteabord = fieldValues.quantiteabord ? '' : 'This field is required.';
   

    if ('departmentId' in fieldValues) {
      temp.departmentId =
        fieldValues.departmentId && fieldValues.departmentId.length !== undefined
          ? ''
          : 'This field is required.';
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
  const [datedesoutage, setDatedesoutage] = useState(null);
  const [datedesortie, setDatedesortie] = useState(null);
  const [dateprochainesoutage, setDateprochainesoutage] = useState(null);
  const [nom, setNom] = useState('')
  const [quantitelivree, setQuantitelivree] = useState('')
  const [quantiteabord, setQuantiteabord] = useState('')
  const [quantitetotal, setQuantitetotal] = useState('')
  const [quantitereçu, setQuantitereçu] = useState('')
  const [stabilite, setStabilite] = useState('')
  const [consmyne, setConsmyne] = useState('')
  const [jourautono, setJourautono] = useState('')
  const [soutagedegazoil, setSoutagedegazoil] = useState('')
  const [prixdegazoil, setPrixdegazoil] = useState('')
const [entite, setEntite] = useState('')
const [fonction, setFonction] = useState('')
const [marque, setMarque] = useState('')
const [model, setModel] = useState('')
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
                        name="datedesoutage"
                        label="Date de soutage"
                        value={values.datedesoutage}
                        onChange={(e) => {
                          setDatedesoutage(e.target.value);
                          handleInputChange(e);
                        }}
                        
                    />
                   <Controls.DatePicker
  name="datedesortie"
  label="Date de sortie"
  value={values.datedesortie}
  onChange={(e) => {
    setDatedesortie(e.target.value);
    handleInputChange(e);
  }}
/>

                     <Controls.Input
  name="quantitelivree"
  label="Quantité livrée"
  value={values.quantitelivree}
  onChange={handleInputChange}
  error={errors.quantitelivree}
/>

<Controls.Input
  name="quantiteabord"
  label="Quantité A bord"
  value={values.quantiteabord}
  onChange={handleInputChange}
  error={errors.quantiteabord}
/>
<Controls.Input
  name="quantitetotal"
  label="Quantité Total"
  value={values.quantitetotal}
  onChange={handleInputChange}
  error={errors.quantitetotal}
/>

<Controls.Input
  name="stabilite"
  label="STABILITE"
  value={values.stabilite}
  onChange={handleInputChange}
  error={errors.stabilite}
/>
<Controls.Input
  name="consmyne"
  label="cons.Myne"
  value={values.consmyne}
  onChange={handleInputChange}
  error={errors.consmyne}
/>
        
          
        </Grid>
        <Grid item xs={6}>
         
          <Controls.Input 
           name="jourautono"
           label="Jour.Autono"
           value={values.jourautono}
           onChange={(e) => {
             setJourautono(e.target.value);
             handleInputChange(e);
           }}
          
         />
          <Controls.DatePicker
                        name="dateprochainesoutage"
                        label="DATE PROCHAINE SOUTAGE "
                        value={values.dateprochainesoutage}
                        onChange={(e) => {
                          setDateprochainesoutage(e.target.value);
                          handleInputChange(e);
                        }}
                        
                    />
                     <Controls.Input 
           name="soutagedegazoil"
           label=" SOUTAGE DE GASOIL  "
           value={values.soutagedegazoil}
           onChange={(e) => {
             setSoutagedegazoil(e.target.value);
             handleInputChange(e);
           }}
          
         />
         <Controls.Input 
           name="prixdegazoil"
           label=" PRIX DE GAZOIL  "
           value={values.prixdegazoil}
           onChange={(e) => {
             setPrixdegazoil(e.target.value);
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
