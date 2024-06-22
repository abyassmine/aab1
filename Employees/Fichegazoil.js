import React, { useState, useEffect, useRef } from 'react';
import './fiche.css';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import SearchIcon from '@material-ui/icons/Search';
import { Link, useNavigate, useParams } from 'react-router-dom';
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import DeclarationService from '../declaration/DeclarationService';
import { FaTimes, FaEdit, FaTrash, FaCheck, FaTimesCircle } from 'react-icons/fa';
import { Box } from "@mui/material";
import Header from "./../componentss/Header";
import Alert from 'react-s-alert';
import logovivo from '../assets/Vivo_Energy-Logo.wine.png'; 

import { saveAs } from 'file-saver';
const Fichegazoil = () => {
   
      const [iddeclaration, setIddeclaration] = useState('');
     
      const [prix, setPrix] = useState('');
      const [date, setDate] = useState('');
     const [ numerobl,setNumerobl]=useState('');
     const [ quantite,setQuantite]=useState('');
     const [ fournisseur,setFournisseur]=useState('');
     const [ nombateau,setNombateau]=useState('');
     const [ bn,setBn]=useState('');
     const [ rapport,setRapport]=useState('');
     const [file, setFile] = useState(null);
     const [fileData, setFileData] = useState(null);
     
      const [showForm, setShowForm] = useState(false); 
      const [filePreview, setFilePreview] = useState('');
      // Add a new state variable for the file name
const [fileName, setFileName] = useState('');
const [fileName1, setFileName1] = useState('');
const [fileURL, setFileURL] = useState('');
const [fileURL1, setFileURL1] = useState('');
      const [isImage, setIsImage] = useState(true);
      const [isFileSelected, setIsFileSelected] = useState(false);
      const [uploadProgress, setUploadProgress] = useState(0);
     
      const [fileSelected2, setFileSelected2] = useState(false);
      const [fileInputValue, setFileInputValue] = useState('');
      const [selectedFiles, setSelectedFiles] = useState([]);
      const [selectedFiles2, setSelectedFiles2] = useState([]);
      const [lastSelectedFile2, setLastSelectedFile2] = useState(null);
      const fileInputRef1 = useRef(null);
  useEffect(() => {
    const storedFiles2 = JSON.parse(localStorage.getItem('storedFiles2')) || [];
    if (storedFiles2.length > 0) {
      setSelectedFiles2(storedFiles2);
    }
  }, []);

  

const handleFileChange2 = (e) => {
  const file = e.target.files[0];
  const reader = new FileReader();

  reader.readAsDataURL(file);
  reader.onload = () => {
    const fileUrl = reader.result;
    const updatedFiles2 = [...selectedFiles2, fileUrl];
    
    // Use sessionStorage instead of localStorage
    sessionStorage.setItem('storedFiles2', JSON.stringify(updatedFiles2));
    setSelectedFiles2(updatedFiles2);
  };
};




  const sendLastSelectedFile2 = () => {
    if (lastSelectedFile2) {
      saveAs(lastSelectedFile2, 'lastSelectedFile2'); // Sending the last selected file
    } else {
      console.error('No file selected.');
    }
  };

  const handleDownload2 = (fileUrl) => {
    saveAs(fileUrl, 'selectedFile2');
  };

  let declaration = ''; // Define and initialize declaration variable
  let fileDeclaration = ''; // Define and initialize fileDeclaration variable
  
  // Then use these variables in your code:
  const handleUpload2 = () => {
    const formDataToSend = {
      declaration: declaration, // Use declaration variable
      fileDeclaration: fileDeclaration, // Use fileDeclaration variable
      rapport: rapport,
    };
  
  
  };
  
        const handleDropBoxClick2 = () => {
            // When the drop box is clicked, set the fileSelected state to false
            // This will allow the blue-light effect to be applied again when a new file is selected
            setFileSelected2(false);
          };
          const fileInputRef2 = useRef(null);
          const handleChooseFileClick2 = () => {
            console.log('Choose File button clicked');
            // Trigger the click event of the file input
            if (fileInputRef2.current) {
              fileInputRef2.current.click();
            }
          };
      
          
      const handleDragOver = (event) => {
        event.preventDefault();
        const fileDrag = document.getElementById('file-drag');
        fileDrag.classList.add('hover');
      };
    
      const handleDragLeave = () => {
        const fileDrag = document.getElementById('file-drag');
        fileDrag.classList.remove('hover');
      };
    
      const handleDrop2 = (event) => {
        event.preventDefault();
        handleDragLeave();
    
        const fileInput2 = document.getElementById('file-upload');
        fileInput2.files = event.dataTransfer.files;
        handleFileChange2(event);
      };
    
      
      const handleFileChangeForFiles2 = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
      
        reader.readAsDataURL(file);
        reader.onload = () => {
          const fileUrl = reader.result;
          const updatedFiles2 = [...selectedFiles2, fileUrl];
          sessionStorage.setItem('storedFiles2', JSON.stringify(updatedFiles2));
          setSelectedFiles2(updatedFiles2);
      
          // Update the rapport state with the file object
          setRapport(file);
        };
      };
      
      const navigate = useNavigate();
      const { id } = useParams();
    
      const saveOrUpdateEmployee = (e) => {
        e.preventDefault();
        const fileDeclaration = {
            fileName: fileName,
            fileData: fileData,
            bn: file, // Using the file object in bn
          };
        const declaration = {
          prix,
          date,
          quantite,
          fournisseur,
          nombateau,
          numerobl,
          bn: fileName, // Use the file object itself
          rapport: rapport,
        };
        const formDataToSend = {
            ...declaration,
            fileDeclaration: fileDeclaration,
          };
      
        if (id) {
          DeclarationService.updateEmployee(id, declaration)
            .then((response) => {
              
              Alert.success('Message sent successfully');
            })
            .catch((error) => {
              console.log(error);
            });
        } else {
          DeclarationService.createEmployee(declaration)
            .then((response) => {
              console.log(response.data);
              
              Alert.success('Message sent successfully');
            })
            .catch((error) => {
              console.log(error);
            });
        }
      };
      
      
    
      
   
      useEffect(() => {
        if (id) {
          // Fetch employee data by ID
          DeclarationService.getEmployeeById(id)
            .then((response) => {
              // Extract the relevant data from the response
              const employeeData = response.data;
      
              // Update state based on the fetched employee data
              setIddeclaration(employeeData.iddeclaration);
              
      
              // Check if prixdegazoil exists in the employee data before updating prix
              if ('prixdegazoil' in employeeData) {
                setPrix(employeeData.prixdegazoil);
              } else {
                // Handle the case when prixdegazoil is not available
                console.error('prixdegazoil not found in employee data:', employeeData);
              }
              setDate(employeeData.date);
              setNumerobl(employeeData.numerobl);
              setQuantite(employeeData.quantite);
              setFournisseur(employeeData.fournisseur);
              setNombateau(employeeData.nombateau);
              setBn(employeeData.bn);
              setRapport(employeeData.rapport);
            })
            .catch((error) => {
              console.log(error);
            });
        }
      }, [id]);
      
       // Include id as a dependency for useEffect
    
      const title = () => {
        if (id) {
          return <h2 className="text-center">Update Materiel</h2>;
        } else {
          return <h2 className="text-center">Add Materiel</h2>;
        }
      };
      const toggleForm = () => {
        setShowForm(!showForm); // Step 2
      };
      
      const handleDeleteFile2 = (fileUrlToDelete) => {
        const updatedFiles2 = selectedFiles2.filter(fileUrl => fileUrl !== fileUrlToDelete);
        setSelectedFiles2(updatedFiles2);
      
        // Update sessionStorage with the updated files
        sessionStorage.setItem('storedFiles2', JSON.stringify(updatedFiles2));
      };
      useEffect(() => {
        const storedFiles2 = JSON.parse(sessionStorage.getItem('storedFiles2')) || [];
        setSelectedFiles2(storedFiles2);
      }, []);
      
      
      
  return (
    <div className='container27'> 
        
     
      <div style={{marginTop:'590px'}} >
         
        <div className="card22">
          <h3>Upload Files: FicheGazoil</h3>
          
          <div
              className={`drop_box ${fileSelected2 ? 'blue-light' : ''}`}
              onClick={handleDropBoxClick2}
            >
            <header>
              <h4>Select File here</h4>
            </header>
            <p>Files Supported: PDF, TEXT, DOC , DOCX</p>
            
          
          <div>
          <input
    type="file"
    id="file-upload"
    ref={fileInputRef2}
    
    onChange={(e) => {
      
      handleFileChange2(e);
    }}
  />
  

    </div>
 
      <div style={{ display: 'flex', alignItems: 'center' , marginTop:'30px'}}>
        {/* Separate divs for the buttons */}
        <div style={{ marginRight: '20px' }}>
        <button className="btn22" onClick={handleDownload2}>
        Download
      </button>
      {selectedFiles2.length > 0 && (
  
  <button className="btn22"  onClick={(e) => {
   handleUpload2();
   
 }}>
       save
     </button>
 )}
        </div>
        <div>
         
        </div>
      </div>
    </div>
  </div>
  {selectedFiles2.length > 0 && (
  <div>
    <p>Downloaded Files:</p>
    {selectedFiles2.map((fileUrl, index) => (
      <div key={index}>
        <a href={fileUrl} download={`selectedFile2_${index}`}>
          Download File {index + 1}
        </a>
        <span onClick={() => handleDeleteFile2(fileUrl)}>
        <FaTimes style={{ cursor: 'pointer', marginLeft: '5px' , color:'red'}} />
        </span>
      </div>
    ))}
  </div>
)}
</div>

     
      
    

      
  
  </div>
        
         
       
  
      
      
  );
};

export default Fichegazoil;
