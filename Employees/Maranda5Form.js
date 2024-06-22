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
  datedesoutage7: new Date().toLocaleDateString('en-GB'),
  datedesortie7: new Date().toLocaleDateString('en-GB'),
  dateprochainesoutage7: new Date().toLocaleDateString('en-GB'),
  quantitelivree7: '',
  quantiteabord7: '',
  stabilite7: '40660',
  consmyne7: '',
  dateprochainesoutage7: '',
  soutagedegazoil7: '',
  quantiteconsomme7: '',
  quantitetransbordée7: '',
  nombredimmobilisationescale7: '',
  nombredimmobilisationmer7: '',
  prixdegazoil7: '',
  isPermanent: false,
};


export default function Maranda5Form(props) {
  const { addOrEdit, recordForEdit } = props;

  const validate = (fieldValues = values) => {
    let temp = { ...errors };
    if ('quantitelivree7' in fieldValues)
    temp.quantitelivree7 = fieldValues.quantitelivree7 ? '' : 'This field is required.';
    if ('quantiteabord7' in fieldValues)
    temp.quantiteabord7 = fieldValues.quantiteabord7 ? '' : 'This field is required.';
    if ('quantitetotal7' in fieldValues)
    temp.quantitetotal7 = fieldValues.quantitetotal7 ? '' : 'This field is required.';
    

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
  const [datedesoutage7, setDatedesoutage7] = useState(null);
  const [datedesortie7, setDatedesortie7] = useState(null);
  const [dateprochainesoutage7, setDateprochainesoutage7] = useState(null);
  const [nom, setNom] = useState('')
  const [quantitelivree7, setQuantitelivree7] = useState('')
  const [quantiteabord7, setQuantiteabord7] = useState('')
  const [quantitetotal7, setQuantitetotal7] = useState('')
  const [stabilite7, setStabilite7] = useState('');
  const [consmyne7, setConsmyne7] = useState('');
  const [jourautono7, setJourautono7] = useState('');
  const [soutagedegazoil7, setSoutagedegazoil7] = useState('');
  const [prixdegazoil7, setPrixdegazoil7] = useState('');
  const [quantiteconsomme7, setQuantiteconsomme7] = useState('');
  const [quantitetransbordée7, setQuantitetransbordée7] = useState('');
  const [quantitereçue7, setQuantitereçue7] = useState('');
  const [nombredimmobilisationescale7, setNombredimmobilisationescale7] = useState('');
  const [nombredimmobilisationmer7, setNombredimmobilisationmer7] = useState('');
  
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
      name="datedesoutage7"
      label="Date de soutage"
      value={values.datedesoutage7}
      onChange={(e) => {
        setDatedesoutage7(e.target.value);
        handleInputChange(e);
      }}
    />
    <Controls.DatePicker
      name="datedesortie7"
      label="Date de sortie"
      value={values.datedesortie7}
      onChange={(e) => {
        setDatedesortie7(e.target.value);
        handleInputChange(e);
      }}
    />

    <Controls.Input
      name="quantitelivree7"
      label="Quantité livrée"
      value={values.quantitelivree7}
      onChange={handleInputChange}
      error={errors.quantitelivree7}
    />

    <Controls.Input
      name="quantiteabord7"
      label="Quantité A bord"
      value={values.quantiteabord7}
      onChange={handleInputChange}
      error={errors.quantiteabord7}
    />
    <Controls.Input
      name="quantitetotal7"
      label="Quantité Total"
      value={values.quantitetotal7}
      onChange={handleInputChange}
      error={errors.quantitetotal7}
    />
    <Controls.Input
      name="stabilite7"
      label="STABILITE"
      value={values.stabilite7}
      onChange={handleInputChange}
      error={errors.stabilite7}
    />
    <Controls.Input
      name="consmyne7"
      label="cons.Myne"
      value={values.consmyne7}
      onChange={handleInputChange}
      error={errors.consmyne7}
    />

    <Controls.Input
      name="jourautono7"
      label="Jour.Autono"
      value={values.jourautono7}
      onChange={(e) => {
        setJourautono7(e.target.value);
        handleInputChange(e);
      }}
    />
    <Controls.DatePicker
      name="dateprochainesoutage7"
      label="DATE PROCHAINE SOUTAGE "
      value={values.dateprochainesoutage7}
      onChange={(e) => {
        setDateprochainesoutage7(e.target.value);
        handleInputChange(e);
      }}
    />
        </Grid>
        <Grid item xs={6}>
         
         
          
        <Controls.Input
      name="soutagedegazoil7"
      label=" SOUTAGE DE GASOIL  "
      value={values.soutagedegazoil7}
      onChange={(e) => {
        setSoutagedegazoil7(e.target.value);
        handleInputChange(e);
      }}
    />
    <Controls.Input
      name="quantiteconsomme7"
      label=" Quantité consommé pendant l'escale "
      value={values.quantiteconsomme7}
      onChange={(e) => {
        setQuantiteconsomme7(e.target.value);
        handleInputChange(e);
      }}
    />

    <Controls.Input
      name="quantitetransbordée7"
      label=" Quantité Transbordée"
      value={values.quantitetransbordée7}
      onChange={(e) => {
        setQuantitetransbordée7(e.target.value);
        handleInputChange(e);
      }}
    />
    <Controls.Input
      name="quantitereçue7"
      label="Quantité Reçue"
      value={values.quantitereçue7}
      onChange={(e) => {
        setQuantitereçue7(e.target.value);
        handleInputChange(e);
      }}
    />
    <Controls.Input
      name="nombredimmobilisationescale7"
      label="Nombre hrs d'Immobilisation en escale au port"
      value={values.nombredimmobilisationescale7}
      onChange={(e) => {
        setNombredimmobilisationescale7(e.target.value);
        handleInputChange(e);
      }}
    />
    <Controls.Input
      name="nombredimmobilisationmer7"
      label="Nombre hrs d'Immobilisation en haute mer"
      value={values.nombredimmobilisationmer7}
      onChange={(e) => {
        setNombredimmobilisationmer7(e.target.value);
        handleInputChange(e);
      }}
    />
    <Controls.Input
      name="prixdegazoil7"
      label=" PRIX DE GAZOIL  "
      value={values.prixdegazoil7}
      onChange={(e) => {
        setPrixdegazoil7(e.target.value);
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
