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
  datedesoutage9: new Date().toLocaleDateString('en-GB'),
  datedesortie9: new Date().toLocaleDateString('en-GB'),
  dateprochainesoutage9: new Date().toLocaleDateString('en-GB'),
  quantitelivree9: '',
  quantiteabord9: '',
  stabilite9: '36000',
  consmyne9: '',
  dateprochainesoutage9: '',
  soutagedegazoil9: '',
  quantiteconsomme9: '',
  quantitetransbordée9: '',
  nombredimmobilisationescale9: '',
  nombredimmobilisationmer9: '',
  prixdegazoil9: '',
 
  isPermanent: false,
};

export default function AlicanteForm(props) {
  const { addOrEdit, recordForEdit } = props;

  const validate = (fieldValues = values) => {
    let temp = { ...errors };
    if ('quantitelivree9' in fieldValues)
    temp.quantitelivree9 = fieldValues.quantitelivree9 ? '' : 'This field is required.';
    if ('quantiteabord9' in fieldValues)
    temp.quantiteabord9 = fieldValues.quantiteabord9 ? '' : 'This field is required.';
    if ('quantitetotal9' in fieldValues)
    temp.quantitetotal9 = fieldValues.quantitetotal9 ? '' : 'This field is required.';
    

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
  const [datedesoutage9, setDatedesoutage9] = useState(null);
  const [datedesortie9, setDatedesortie9] = useState(null);
  const [dateprochainesoutage9, setDateprochainesoutage9] = useState(null);
  const [nom, setNom] = useState('')
  const [quantitelivree9, setQuantitelivree9] = useState('');
  const [quantiteabord9, setQuantiteabord9] = useState('');
  const [quantitetotal9, setQuantitetotal9] = useState('');
  const [stabilite9, setStabilite9] = useState('');
  const [consmyne9, setConsmyne9] = useState('');
  const [jourautono9, setJourautono9] = useState('');
  const [soutagedegazoil9, setSoutagedegazoil9] = useState('');
  const [prixdegazoil9, setPrixdegazoil9] = useState('');
  const [quantiteconsomme9, setQuantiteconsomme9] = useState('');
  const [quantitetransbordée9, setQuantitetransbordée9] = useState('');
  const [quantitereçue9, setQuantitereçue9] = useState('');
  const [nombredimmobilisationescale9, setNombredimmobilisationescale9] = useState('');
  const [nombredimmobilisationmer9, setNombredimmobilisationmer9] = useState('');
  
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
                name="datedesoutage9"
                label="Date de soutage"
                value={values.datedesoutage9}
                onChange={(e) => {
                    setDatedesoutage9(e.target.value);
                    handleInputChange(e);
                }}
            />
            <Controls.DatePicker
                name="datedesortie9"
                label="Date de sortie"
                value={values.datedesortie9}
                onChange={(e) => {
                    setDatedesortie9(e.target.value);
                    handleInputChange(e);
                }}
            />
            <Controls.Input
                name="quantitelivree9"
                label="Quantité livrée"
                value={values.quantitelivree9}
                onChange={handleInputChange}
                error={errors.quantitelivree9}
            />

<Controls.Input
  name="quantiteabord9"
  label="Quantité A bord"
  value={values.quantiteabord9}
  onChange={handleInputChange}
  error={errors.quantiteabord9}
/>
<Controls.Input
  name="quantitetotal9"
  label="Quantité Total"
  value={values.quantitetotal9}
  onChange={handleInputChange}
  error={errors.quantitetotal9}
/>
<Controls.Input
  name="stabilite9"
  label="STABILITE"
  value={values.stabilite9}
  onChange={handleInputChange}
  error={errors.stabilite9}
/>
<Controls.Input
  name="consmyne9"
  label="cons.Myne"
  value={values.consmyne9}
  onChange={handleInputChange}
  error={errors.consmyne9}
/>
        
<Controls.Input 
           name="jourautono9"
           label="Jour.Autono"
           value={values.jourautono9}
           onChange={(e) => {
             setJourautono9(e.target.value);
             handleInputChange(e);
           }}
          
         />
         <Controls.DatePicker
                        name="dateprochainesoutage9"
                        label="DATE PROCHAINE SOUTAGE "
                        value={values.dateprochainesoutage9}
                        onChange={(e) => {
                          setDateprochainesoutage9(e.target.value);
                          handleInputChange(e);
                        }}
                        
                    />
        </Grid>
        <Grid item xs={6}>
         
         
          
                     <Controls.Input 
           name="soutagedegazoil9"
           label=" SOUTAGE DE GASOIL  "
           value={values.soutagedegazoil9}
           onChange={(e) => {
             setSoutagedegazoil9(e.target.value);
             handleInputChange(e);
           }}
          
         />
          <Controls.Input 
           name="quantiteconsomme9"
           label=" Quantité consommé pendant l'escale "
           value={values.quantiteconsomme9}
           onChange={(e) => {
             setQuantiteconsomme9(e.target.value);
             handleInputChange(e);
           }}
          
         />
         
          <Controls.Input 
           name="quantitetransbordée9"
           label=" Quantité Transbordée"
           value={values.quantitetransbordée9}
           onChange={(e) => {
             setQuantiteconsomme9(e.target.value);
             handleInputChange(e);
           }}
          
         />
          <Controls.Input 
           name="quantitereçue9"
           label="Quantité Reçue"
           value={values.quantitereçue9}
           onChange={(e) => {
            setQuantitereçue9(e.target.value);
             handleInputChange(e);
           }}
          
         />
          <Controls.Input 
           name="nombredimmobilisationescale9"
           label="Nombre hrs d'Immobilisation en escale au port"
           value={values.nombredimmobilisationescale9}
           onChange={(e) => {
            setNombredimmobilisationescale9(e.target.value);
             handleInputChange(e);
           }}
          
         />
            <Controls.Input 
           name="nombredimmobilisationmer9"
           label="Nombre hrs d'Immobilisation en haute mer"
           value={values.nombredimmobilisationmer9}
           onChange={(e) => {
            setNombredimmobilisationmer9(e.target.value);
             handleInputChange(e);
           }}
          
         />
          <Controls.Input 
                name="prixdegazoil9"
                label="PRIX DE GAZOIL"
                value={values.prixdegazoil9}
                onChange={(e) => {
                    setPrixdegazoil9(e.target.value);
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
