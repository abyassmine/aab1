import { Box, useTheme } from "@mui/material";
import Header from "../../components/Header";
import { Link } from 'react-router-dom'

import React, {useState, useEffect} from 'react'
import EmployeeService from "../../services/EmployeeService";
const FAQ = () => {
  const [employees, setEmployees] = useState([])

  useEffect(() => {

      getAllEmployees();
  }, [])

  const getAllEmployees = () => {
      EmployeeService.getAllEmployees().then((response) => {
          setEmployees(response.data)
          console.log(response.data);
      }).catch(error =>{
          console.log(error);
      })
  }

  const deleteEmployee = (employeeId) => {
     EmployeeService.deleteEmployee(employeeId).then((response) =>{
      getAllEmployees();

     }).catch(error =>{
         console.log(error);
     })
      
  }

  return (
    
      <div className = "container">
          
          <Header
        title="Materiel"
        subtitle="List of Materiel "
      />
          <Link to = "/faq" className = "btn btn-primary mb-2" > Add Materiel </Link>
          <table className="table table-bordered table-striped">
            
              <thead>
                  <th>  Id </th>
                 
                  <th> Nom </th>
                  <th> Entite </th>
                  <th> Fonction </th>
                  <th> Marque </th>
                  <th> Model </th>
                  <th> N° de série</th>
                  <th> Code Immob</th>
                  <th> Dat d'acquis</th>
                  <th> Etat</th>
                  <th> Observation</th>
                  <th> Actions </th>
              </thead>
              <tbody>
                  {
                      employees.map(
                          employee =>
                          <tr key = {employee.id}> 
                              <td> {employee.id} </td>
                              <td> {employee.nom} </td>
                              <td> {employee.entite} </td>
                              <td> {employee.fonction} </td>
                              <td> {employee.marque} </td>
                              <td> {employee.model} </td>
                              <td> {employee.ndeserie} </td>
                              <td> {employee.codeImmob} </td>
                              <td> {employee.datdacquis} </td>
                              <td> {employee.etat} </td>
                              <td> {employee.observation} </td>
                              
                             
                              <td>
                                  <Link className="btn btn-info" to={`/faq/${employee.id}`} >Update</Link>
                                  <button className = "btn btn-danger" onClick = {() => deleteEmployee(employee.id)}
                                  style = {{marginLeft:"10px"}}> Delete</button>
                              </td>
                          </tr>
                      )
                  }
              </tbody>
          </table>
      </div>
  )
}

export default FAQ;
