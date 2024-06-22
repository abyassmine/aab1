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
  datedesoutage11: new Date().toLocaleDateString('en-GB'),
  datedesortie11: new Date().toLocaleDateString('en-GB'),
  dateprochainesoutage11: new Date().toLocaleDateString('en-GB'),
  quantitelivree11: '',
  quantiteabord11: '',
  stabilite11: '45458',
  consmyne11: '',
  dateprochainesoutage11: '',
  soutagedegazoil11: '',
  quantiteconsomme11: '',
  quantitetransbordée11: '',
  quantitereçue11:'',
  nombredimmobilisationescale11: '',
  nombredimmobilisationmer11: '',
  prixdegazoil11: '',

  isPermanent: false,
};

export default function GorguesForm(props) {
  const { addOrEdit, recordForEdit } = props;

  const validate = (fieldValues = values) => {
    let temp = { ...errors };
    if ('quantitelivree11' in fieldValues)
      temp.quantitelivree11 = fieldValues.quantitelivree11 ? '' : 'This field is required.';
    if ('quantiteabord11' in fieldValues)
      temp.quantiteabord11 = fieldValues.quantiteabord11 ? '' : 'This field is required.';
    if ('quantitetotal11' in fieldValues)
      temp.quantitetotal11 = fieldValues.quantitetotal11 ? '' : 'This field is required.';

    if ('departmentId' in fieldValues) {
      temp.departmentId = fieldValues.departmentId && fieldValues.departmentId.length !== 0 ? '' : 'This field is required.';
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
  const [datedesoutage11, setDatedesoutage11] = useState(null);
  const [datedesortie11, setDatedesortie11] = useState(null);
  const [dateprochainesoutage11, setDateprochainesoutage11] = useState(null);
  const [nom, setNom] = useState('');
  const [quantitelivree11, setQuantitelivree11] = useState('');
  const [quantiteabord11, setQuantiteabord11] = useState('');
  const [quantitetotal11, setQuantitetotal11] = useState('');
  const [stabilite11, setStabilite11] = useState('');
  const [consmyne11, setConsmyne11] = useState('');
  const [jourautono11, setJourautono11] = useState('');
  const [soutagedegazoil11, setSoutagedegazoil11] = useState('');
  const [prixdegazoil11, setPrixdegazoil11] = useState('');
  const [quantiteconsomme11, setQuantiteconsomme11] = useState('');
  const [quantitetransbordée11, setQuantitetransbordée11] = useState('');
  const [quantitereçue11, setQuantitereçue11] = useState('');
  const [nombredimmobilisationescale11, setNombredimmobilisationescale11] = useState('');
  const [nombredimmobilisationmer11, setNombredimmobilisationmer11] = useState('');
  const [entite1, setEntite1] = useState('');
  const [fonction1, setFonction1] = useState('');
  const [marque1, setMarque1] = useState('');
  const [model1, setModel1] = useState('');
  const [ndeserie, setNdeserie] = useState('');
  const [codeImmob, setCodeImmob] = useState('');
  const [datdacquis, setDatdacquis] = useState(null);
  const [etat, setEtat] = useState('');
  const [observation, setObservation] = useState('');
  const [type, setType] = useState('');
  const [departmentId, setDepartmentId] = useState('');

  return (
    <Form onSubmit={handleSubmit}>
      <Grid container>
        <Grid item xs={6}>
          <Controls.DatePicker
            name="datedesoutage11"
            label="Date de soutage"
            value={values.datedesoutage11}
            onChange={(e) => {
              setDatedesoutage11(e.target.value);
              handleInputChange(e);
            }}
          />
          <Controls.DatePicker
            name="datedesortie11"
            label="Date de sortie"
            value={values.datedesortie11}
            onChange={(e) => {
              setDatedesortie11(e.target.value);
              handleInputChange(e);
            }}
          />

          <Controls.Input
            name="quantitelivree11"
            label="Quantité livrée"
            value={values.quantitelivree11}
            onChange={handleInputChange}
            error={errors.quantitelivree11}
          />

          <Controls.Input
            name="quantiteabord11"
            label="Quantité A bord"
            value={values.quantiteabord11}
            onChange={handleInputChange}
            error={errors.quantiteabord11}
          />
          <Controls.Input
            name="quantitetotal11"
            label="Quantité Total"
            value={values.quantitetotal11}
            onChange={handleInputChange}
            error={errors.quantitetotal11}
          />
          <Controls.Input
            name="stabilite11"
            label="STABILITE"
            value={values.stabilite11}
            onChange={handleInputChange}
            error={errors.stabilite11}
          />
          <Controls.Input
            name="consmyne11"
            label="cons.Myne"
            value={values.consmyne11}
            onChange={handleInputChange}
            error={errors.consmyne11}
          />

          <Controls.Input
            name="jourautono11"
            label="Jour.Autono"
            value={values.jourautono11}
            onChange={(e) => {
              setJourautono11(e.target.value);
              handleInputChange(e);
            }}
          />
          <Controls.DatePicker
            name="dateprochainesoutage11"
            label="DATE PROCHAINE SOUTAGE "
            value={values.dateprochainesoutage11}
            onChange={(e) => {
              setDateprochainesoutage11(e.target.value);
              handleInputChange(e);
            }}
          />
        </Grid>
        <Grid item xs={6}>
          <Controls.Input
            name="soutagedegazoil11"
            label=" SOUTAGE DE GASOIL  "
            value={values.soutagedegazoil11}
            onChange={(e) => {
              setSoutagedegazoil11(e.target.value);
              handleInputChange(e);
            }}
          />
          <Controls.Input
            name="quantiteconsomme11"
            label=" Quantité consommé pendant l'escale "
            value={values.quantiteconsomme11}
            onChange={(e) => {
              setQuantiteconsomme11(e.target.value);
              handleInputChange(e);
            }}
          />
          <Controls.Input
            name="quantitetransbordée11"
            label=" Quantité Transbordée"
            value={values.quantitetransbordée11}
            onChange={(e) => {
              setQuantitetransbordée11(e.target.value);
              handleInputChange(e);
            }}
          />
          <Controls.Input
            name="quantitereçue11"
            label="Quantité Reçue"
            value={values.quantitereçue11}
            onChange={(e) => {
              setQuantitereçue11(e.target.value);
              handleInputChange(e);
            }}
          />
          <Controls.Input
            name="nombredimmobilisationescale11"
            label="Nombre hrs d'Immobilisation en escale au port"
            value={values.nombredimmobilisationescale11}
            onChange={(e) => {
              setNombredimmobilisationescale11(e.target.value);
              handleInputChange(e);
            }}
          />
          <Controls.Input
            name="nombredimmobilisationmer11"
            label="Nombre hrs d'Immobilisation en haute mer"
            value={values.nombredimmobilisationmer11}
            onChange={(e) => {
              setNombredimmobilisationmer11(e.target.value);
              handleInputChange(e);
            }}
          />
          <Controls.Input
            name="prixdegazoil11"
            label=" PRIX DE GAZOIL  "
            value={values.prixdegazoil11}
            onChange={(e) => {
              setPrixdegazoil11(e.target.value);
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
            <Controls.Button type="submit" text="Submit" />
            <Controls.Button text="Reset" color="default" onClick={resetForm} />
          </div>
        </Grid>
      </Grid>
    </Form>
  );
}
