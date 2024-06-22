import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import './decla.css';
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import DeclarationService from './DeclarationService';
import { FaTimes, FaEdit, FaTrash, FaCheck, FaTimesCircle } from 'react-icons/fa';
import { Box } from "@mui/material";
import Header from "./../componentss/Header";
import Alert from 'react-s-alert';
const AddEmployeeComponent = () => {
  const typeItems = [
    { id: 'pc', title: 'PC' },
    { id: 'imprimante', title: 'imprimante' },
    { id: 'scanner', title: 'scanner' },
  ];
  const [iddeclaration, setIddeclaration] = useState('');
  const [nom, setNom] = useState('');
  const [subject, setSubject] = useState('');
  const [type, setType] = useState('');
  const [description, setDescription] = useState('');
  const navigate = useNavigate();
  const { id } = useParams();

  const saveOrUpdateEmployee = (e) => {
    e.preventDefault();
  
    const declaration = { iddeclaration, nom, subject, type, description };
  
    if (id) {
      DeclarationService.updateEmployee(id, declaration)
        .then((response) => {
          navigate('/manager');
          Alert.success('Message sent successfully'); // Show the alert message
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      DeclarationService.createEmployee(declaration)
        .then((response) => {
          console.log(response.data);
          navigate('/manager');
          Alert.success('Message sent successfully'); // Show the alert message
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };
  

  useEffect(() => {
    if (id) {
      DeclarationService.getEmployeeById(id)
        .then((response) => {
          setIddeclaration(response.data.iddeclaration);
          setNom(response.data.nom);
          setSubject(response.data.subject);
          setType(response.data.type);
          setDescription(response.data.description);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [id]); // Include id as a dependency for useEffect

  const title = () => {
    if (id) {
      return <h2 className="text-center">Update Materiel</h2>;
    } else {
      return <h2 className="text-center">Add Materiel</h2>;
    }
  };

  return (
      <div style={{backgroundColor:'#181818', minHeight: '100vh', }}>
       
       <div className="form">
        <div className="form-content">
          <h1 className="title22">Declaration & Request space</h1>
          <br/> <br/>
          <form className="login-form">
            <input
              type="text"
              placeholder="Enter the Id"
              value={iddeclaration}
              onChange={(e) => setIddeclaration(e.target.value)}
            />
            <input
              type="text"
              placeholder="Enter your username"
              value={nom}
              onChange={(e) => setNom(e.target.value)}
            />
            <input
              type="text"
              placeholder="Enter the Subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
            />
            <select value={type} onChange={(e) => setType(e.target.value)}>
              <option value="">Select Type</option>
              {typeItems.map((item) => (
                <option key={item.id} value={item.id}>
                  {item.title}
                </option>
              ))}
            </select>
            <textarea
              placeholder="Enter the description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
             
            ></textarea>
            <button type="button" onClick={(e) => saveOrUpdateEmployee(e)}>
              Send
            </button>
            <div className="cancel-link">
            <a href="/declaration" className="cancel-link">
              <FaTimes icon={FaTimes} />
            </a>
            </div>
            <div>
            <div className="vl"></div>
            </div>
            
          </form>
          <div className="circle11">
  <ReceiptOutlinedIcon style={{ color: '#059dff', fontSize: '70px' }} />
</div>

        </div>
      </div>
      </div>
  );
};

export default AddEmployeeComponent;
