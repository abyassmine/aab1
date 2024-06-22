import React, {useState, useEffect} from 'react'
import {Link, useNavigate, useParams } from 'react-router-dom';
import EmployeeService from '../services/EmployeeService'

const AddEmployeeComponent = () => {

  
    const [nom, setNom] = useState('')
    const [entite, setEntite] = useState('')
    const [fonction, setFonction] = useState('')
    const [marque, setMarque] = useState('')
    const [model, setModel] = useState('')
    const [ndeserie, setNdeserie] = useState('')
    const [codeImmob, setCodeImmob] = useState('')
    const [datdacquis, setDatdacquis] = useState('')
    const [etat, setEtat] = useState('')
    const [observation, setObservation]= useState('')
    const navigate = useNavigate();
    const {id} = useParams();

    const saveOrUpdateEmployee = (e) => {
        e.preventDefault();

        const employee = {nom,entite,fonction,marque,model,ndeserie,codeImmob,datdacquis,etat,observation}

        if(id){
            EmployeeService.updateEmployee(id, employee).then((response) => {
                navigate.push('/employees')
            }).catch(error => {
                console.log(error)
            })

        }else{
            EmployeeService.createEmployee(employee).then((response) =>{

                console.log(response.data)
    
                navigate.push('/employees');
    
            }).catch(error => {
                console.log(error)
            })
        }
        
    }

    useEffect(() => {

        EmployeeService.getEmployeeById(id).then((response) =>{
         
            setNom(response.data.nom)
            setEntite(response.data.entite)
            setFonction(response.data.fonction)
            setMarque(response.data.marque)
            setModel(response.data.model)
            setNdeserie(response.data.ndeserie)
            setCodeImmob(response.data.codeImmob)
            setDatdacquis(response.data.datdacquis)
            setEtat(response.data.etat)
            setObservation(response.data.observation)
           
        }).catch(error => {
            console.log(error)
        })
    }, [])

    const title = () => {

        if(id){
            return <h2 className = "text-center">Update Materiel</h2>
        }else{
            return <h2 className = "text-center">Add Materiel</h2>
        }
    }

    return (
        <div>
           <br /><br />
           <div className = "container">
                <div className = "row">
                    <div className = "card col-md-6 offset-md-3 offset-md-3">
                       {
                           title()
                       }
                        <div className = "card-body">
                            <form>
                                
                                <div className = "form-group mb-2">
                                    <label className = "form-label"> Nom :</label>
                                    <input
                                        type = "text"
                                        placeholder = "Enter Nom"
                                        name = "nom"
                                        className = "form-control"
                                        value = {nom}
                                        onChange = {(e) => setNom(e.target.value)}
                                    >
                                    </input>
                                </div>
                                <div className = "form-group mb-2">
                                    <label className = "form-label"> Entite :</label>
                                    <input
                                        type = "text"
                                        placeholder = "Enter Entite"
                                        name = "entite"
                                        className = "form-control"
                                        value = {entite}
                                        onChange = {(e) => setEntite(e.target.value)}
                                    >
                                    </input>
                                </div>
                                <div className = "form-group mb-2">
                                    <label className = "form-label"> Fonction :</label>
                                    <input
                                        type = "text"
                                        placeholder = "Enter Fontion"
                                        name = "fonction"
                                        className = "form-control"
                                        value = {fonction}
                                        onChange = {(e) => setFonction(e.target.value)}
                                    >
                                    </input>
                                </div>
                                <div className = "form-group mb-2">
                                    <label className = "form-label"> Marque :</label>
                                    <input
                                        type = "text"
                                        placeholder = "Enter marque"
                                        name = "marque"
                                        className = "form-control"
                                        value = {marque}
                                        onChange = {(e) => setMarque(e.target.value)}
                                    >
                                    </input>
                                </div>
                                <div className = "form-group mb-2">
                                    <label className = "form-label"> Model :</label>
                                    <input
                                        type = "text"
                                        placeholder = "Enter Model"
                                        name = "model"
                                        className = "form-control"
                                        value = {model}
                                        onChange = {(e) => setModel(e.target.value)}
                                    >
                                    </input>
                                </div>
                                <div className = "form-group mb-2">
                                    <label className = "form-label"> N° de série :</label>
                                    <input
                                        type = "text"
                                        placeholder = "Enter N° de série "
                                        name = "ndeserie"
                                        className = "form-control"
                                        value = {ndeserie}
                                        onChange = {(e) => setNdeserie(e.target.value)}
                                    >
                                    </input>
                                </div>
                                <div className = "form-group mb-2">
                                    <label className = "form-label"> Code Immob :</label>
                                    <input
                                        type = "text"
                                        placeholder = "Enter Code Immob "
                                        name = "codeImmob"
                                        className = "form-control"
                                        value = {codeImmob}
                                        onChange = {(e) => setCodeImmob(e.target.value)}
                                    >
                                    </input>
                                </div>
                                <div className = "form-group mb-2">
                                    <label className = "form-label"> Dat d'acquis :</label>
                                    <input
                                        type = "date"
                                        placeholder = "Enter N° de série "
                                        name = "datdacquis"
                                        className = "form-control"
                                        value = {datdacquis}
                                        onChange = {(e) => setDatdacquis(e.target.value)}
                                    >
                                    </input>
                                </div>
                                <div className = "form-group mb-2">
                                    <label className = "form-label"> Etat :</label>
                                    <input
                                        type = "text"
                                        placeholder = "Etat "
                                        name = "etat"
                                        className = "form-control"
                                        value = {etat}
                                        onChange = {(e) => setEtat(e.target.value)}
                                    >
                                    </input>
                                </div>
                                <div className = "form-group mb-2">
                                    <label className = "form-label"> Observation :</label>
                                    <input
                                        type = "text"
                                        placeholder = "Observation "
                                        name = "observation"
                                        className = "form-control"
                                        value = {observation}
                                        onChange = {(e) => setObservation(e.target.value)}
                                    >
                                    </input>
                                </div>
                               
                                  
                              
                                

                                <button className = "btn btn-success" onClick = {(e) => saveOrUpdateEmployee(e)} >Submit </button>
                                <Link to="/employees" className="btn btn-danger"> Cancel </Link>
                            </form>

                        </div>
                    </div>
                </div>

           </div>

        </div>
    )
}

export default AddEmployeeComponent
