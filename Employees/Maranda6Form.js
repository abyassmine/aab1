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
  datedesoutage8: new Date().toLocaleDateString('en-GB'),
  datedesortie8: new Date().toLocaleDateString('en-GB'),
  dateprochainesoutage8: new Date().toLocaleDateString('en-GB'),
  quantitelivree8: '',
  quantiteabord8: '',
  stabilite8: '40660',
  consmyne8: '',
  dateprochainesoutage8: '',
  soutagedegazoil8: '',
  quantiteconsomme8: '',
  quantitetransbordée8: '',
  nombredimmobilisationescale8: '',
  nombredimmobilisationmer8: '',
  prixdegazoil8: '',

  isPermanent: false,
};

export default function Maranda6Form(props) {
  const { addOrEdit, recordForEdit } = props;

  const validate = (fieldValues = values) => {
    let temp = { ...errors };
    if ('quantitelivree8' in fieldValues)
      temp.quantitelivree8 = fieldValues.quantitelivree8 ? '' : 'This field is required.';
    if ('quantiteabord8' in fieldValues)
      temp.quantiteabord8 = fieldValues.quantiteabord8 ? '' : 'This field is required.';
    if ('quantitetotal8' in fieldValues)
      temp.quantitetotal8 = fieldValues.quantitetotal8 ? '' : 'This field is required.';

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
  const [datedesoutage8, setDatedesoutage8] = useState(null);
  const [datedesortie8, setDatedesortie8] = useState(null);
  const [dateprochainesoutage8, setDateprochainesoutage8] = useState(null);
  const [nom, setNom] = useState('');
  const [quantitelivree8, setQuantitelivree8] = useState('');
  const [quantiteabord8, setQuantiteabord8] = useState('');
  const [quantitetotal8, setQuantitetotal8] = useState('');
  const [stabilite8, setStabilite8] = useState('');
  const [consmyne8, setConsmyne8] = useState('');
  const [jourautono8, setJourautono8] = useState('');
  const [soutagedegazoil8, setSoutagedegazoil8] = useState('');
  const [prixdegazoil8, setPrixdegazoil8] = useState('');
  const [quantiteconsomme8, setQuantiteconsomme8] = useState('');
  const [quantitetransbordée8, setQuantitetransbordée8] = useState('');
  const [quantitereçue8, setQuantitereçue8] = useState('');
  const [nombredimmobilisationescale8, setNombredimmobilisationescale8] = useState('');
  const [nombredimmobilisationmer8, setNombredimmobilisationmer8] = useState('');
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
            name="datedesoutage8"
            label="Date de soutage"
            value={values.datedesoutage8}
            onChange={(e) => {
              setDatedesoutage8(e.target.value);
              handleInputChange(e);
            }}
          />
          <Controls.DatePicker
            name="datedesortie8"
            label="Date de sortie"
            value={values.datedesortie8}
            onChange={(e) => {
              setDatedesortie8(e.target.value);
              handleInputChange(e);
            }}
          />

          <Controls.Input
            name="quantitelivree8"
            label="Quantité livrée"
            value={values.quantitelivree8}
            onChange={handleInputChange}
            error={errors.quantitelivree8}
          />

          <Controls.Input
            name="quantiteabord8"
            label="Quantité A bord"
            value={values.quantiteabord8}
            onChange={handleInputChange}
            error={errors.quantiteabord8}
          />
          <Controls.Input
            name="quantitetotal8"
            label="Quantité Total"
            value={values.quantitetotal8}
            onChange={handleInputChange}
            error={errors.quantitetotal8}
          />
          <Controls.Input
            name="stabilite8"
            label="STABILITE"
            value={values.stabilite8}
            onChange={handleInputChange}
            error={errors.stabilite8}
          />
          <Controls.Input
            name="consmyne8"
            label="cons.Myne"
            value={values.consmyne8}
            onChange={handleInputChange}
            error={errors.consmyne8}
          />

          <Controls.Input
            name="jourautono8"
            label="Jour.Autono"
            value={values.jourautono8}
            onChange={(e) => {
              setJourautono8(e.target.value);
              handleInputChange(e);
            }}
          />
          <Controls.DatePicker
            name="dateprochainesoutage8"
            label="DATE PROCHAINE SOUTAGE "
            value={values.dateprochainesoutage8}
            onChange={(e) => {
              setDateprochainesoutage8(e.target.value);
              handleInputChange(e);
            }}
          />
        </Grid>
        <Grid item xs={6}>
          <Controls.Input
            name="soutagedegazoil8"
            label=" SOUTAGE DE GASOIL  "
            value={values.soutagedegazoil8}
            onChange={(e) => {
              setSoutagedegazoil8(e.target.value);
              handleInputChange(e);
            }}
          />
          <Controls.Input
            name="quantiteconsomme8"
            label=" Quantité consommé pendant l'escale "
            value={values.quantiteconsomme8}
            onChange={(e) => {
              setQuantiteconsomme8(e.target.value);
              handleInputChange(e);
            }}
          />
          <Controls.Input
            name="quantitetransbordée8"
            label=" Quantité Transbordée"
            value={values.quantitetransbordée8}
            onChange={(e) => {
              setQuantiteconsomme8(e.target.value);
              handleInputChange(e);
            }}
          />
          <Controls.Input
            name="quantitereçue8"
            label="Quantité Reçue"
            value={values.quantitereçue8}
            onChange={(e) => {
              setQuantitereçue8(e.target.value);
              handleInputChange(e);
            }}
          />
          <Controls.Input
            name="nombredimmobilisationescale8"
            label="Nombre hrs d'Immobilisation en escale au port"
            value={values.nombredimmobilisationescale8}
            onChange={(e) => {
              setNombredimmobilisationescale8(e.target.value);
              handleInputChange(e);
            }}
          />
          <Controls.Input
            name="nombredimmobilisationmer8"
            label="Nombre hrs d'Immobilisation en haute mer"
            value={values.nombredimmobilisationmer8}
            onChange={(e) => {
              setNombredimmobilisationmer8(e.target.value);
              handleInputChange(e);
            }}
          />
          <Controls.Input
            name="prixdegazoil8"
            label=" PRIX DE GAZOIL  "
            value={values.prixdegazoil8}
            onChange={(e) => {
              setPrixdegazoil8(e.target.value);
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
