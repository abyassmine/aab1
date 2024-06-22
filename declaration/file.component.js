import React, { useState, useEffect, useRef } from 'react';
import './vivo.css';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import SearchIcon from '@material-ui/icons/Search';
import { Link, useNavigate, useParams } from 'react-router-dom';
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import DeclarationService from './DeclarationService';
import { FaTimes, FaEdit, FaTrash, FaCheck, FaTimesCircle } from 'react-icons/fa';
import { Box } from "@mui/material";
import Header from "./../componentss/Header";
import Alert from 'react-s-alert';
import logovivo from '../assets/Vivo_Energy-Logo.wine.png'; 
import UploadFilesService from "./file.service";

import { saveAs } from 'file-saver';
const UploadFiles = () => {
  const [selectedFiles, setSelectedFiles] = useState(undefined);
  const [selectedFileName, setSelectedFileName] = useState("");
  const [currentFile, setCurrentFile] = useState(undefined);
  const [progress, setProgress] = useState(0);
  const [message, setMessage] = useState("");
  const [fileInfos, setFileInfos] = useState([]);
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
      const [showUploadFiles, setShowUploadFiles] = useState(false);
      const [showUploadFiles1, setShowUploadFiles1] = useState(false);
      const [fileSelected, setFileSelected] = useState(false);
      const [fileInputValue, setFileInputValue] = useState('');
      const [selectedFiles1, setSelectedFiles1] = useState([]);
      const [lastSelectedFile, setLastSelectedFile] = useState(null);
      const fileInputRef1 = useRef(null);
  useEffect(() => {
    const storedFiles = JSON.parse(localStorage.getItem('storedFiles')) || [];
    if (storedFiles.length > 0) {
      setSelectedFiles(storedFiles);
    }
  }, []);
  const handleFileChange = (e) => {
    const file = e.target.files[0];
  
    if (!file) {
      console.error('No file selected.');
      return;
    }
  
    const formData = new FormData();
    formData.append('file', file);
    formData.append('bn', bn);
  
    fetch('http://localhost:8091/api/v1/uploadFile', {
      method: 'POST',
      body: formData,
    })
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        // Handle the response as needed
        console.log('Server response:', data);
      })
      .catch(error => {
        // Handle errors
        console.error('Error uploading file:', error);
      });
  
    const fileDetails = {
      name: file.name,
      url: URL.createObjectURL(file),
    };
  
    // Retrieve existing stored files from localStorage
    const storedFiles = JSON.parse(localStorage.getItem('storedFiles')) || [];
  
    // Update localStorage with the new file details
    localStorage.setItem('storedFiles', JSON.stringify([...storedFiles, fileDetails]));
  
    // Update state with the new file details
    setSelectedFiles(Array.isArray(selectedFiles) ? [...selectedFiles, fileDetails] : [fileDetails]);
  };
  
  
  
  
  
  
  
 
const handleFileChange1 = (e) => {
  const file = e.target.files[0];
  const reader = new FileReader();

  reader.readAsDataURL(file);
  reader.onload = () => {
    const fileUrl = reader.result;
    const updatedFiles1 = [...selectedFiles1, fileUrl];
    sessionStorage.setItem('storedFiles1', JSON.stringify(updatedFiles1));
  
  };
};
 useEffect(() => {
  const storedFiles = JSON.parse(sessionStorage.getItem('storedFiles')) || [];
  setSelectedFiles(storedFiles);
 }, []);

 useEffect(() => {
  const storedFiles1 = JSON.parse(sessionStorage.getItem('storedFiles1')) || [];
  setSelectedFiles1(storedFiles1);
 }, []);



  const sendLastSelectedFile = () => {
    if (lastSelectedFile) {
      saveAs(lastSelectedFile, 'lastSelectedFile'); // Sending the last selected file
    } else {
      console.error('No file selected.');
    }
  };

  const handleDownload = (fileUrl, fileName) => {
    fetch(fileUrl)
      .then((response) => response.blob())
      .then((blob) => {
        const url = window.URL.createObjectURL(new Blob([blob]));
        const a = document.createElement('a');
        a.href = url;
        a.download = fileName; // Provide the file name for download
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        window.URL.revokeObjectURL(url);
      })
      .catch((error) => console.error('Error downloading file:', error));
  };
  
  
  let declaration = ''; // Define and initialize declaration variable
  let fileDeclaration = ''; // Define and initialize fileDeclaration variable
  
  // Then use these variables in your code:
  const handleUpload = () => {
    const formDataToSend = {
      declaration: declaration, // Use declaration variable
      fileDeclaration: fileDeclaration, // Use fileDeclaration variable
      rapport: rapport,
    };
  
    navigate('/FileTable', { state: { selectedFiles } });
  };
  
  
        const handleDropBoxClick = () => {
            // When the drop box is clicked, set the fileSelected state to false
            // This will allow the blue-light effect to be applied again when a new file is selected
            setFileSelected(false);
          };
          const fileInputRef = useRef(null);
          const handleChooseFileClick = () => {
            console.log('Choose File button clicked');
            // Trigger the click event of the file input
            if (fileInputRef.current) {
              fileInputRef.current.click();
            }
          };
      
          const defaultFournisseur = 'VivoEnergy';
          useEffect(() => {
            setFournisseur(defaultFournisseur);
          }, []);
        
      const handleDragOver = (event) => {
        event.preventDefault();
        const fileDrag = document.getElementById('file-drag');
        fileDrag.classList.add('hover');
      };
    
      const handleDragLeave = () => {
        const fileDrag = document.getElementById('file-drag');
        fileDrag.classList.remove('hover');
      };
    
      const handleDrop = (event) => {
        event.preventDefault();
        handleDragLeave();
    
        const fileInput = document.getElementById('file-upload');
        fileInput.files = event.dataTransfer.files;
        handleFileChange(event);
      };
    
      
      const handleFileChangeForFiles1 = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
      
        reader.readAsDataURL(file);
        reader.onload = () => {
          const fileUrl = reader.result;
          const updatedFiles1 = [...selectedFiles1, fileUrl];
          sessionStorage.setItem('storedFiles1', JSON.stringify(updatedFiles1));
          setSelectedFiles1(updatedFiles1);
      
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
    
        const formData = new FormData();
        formData.append('prix', prix);
        formData.append('date', date);
        formData.append('numerobl', numerobl);
        formData.append('quantite', quantite);
        formData.append('fournisseur', fournisseur);
        formData.append('nombateau', nombateau);
    
        // Append each file to the FormData object
        selectedFiles.forEach((file, index) => {
            formData.append(`file_${index}`, file);
        });
    
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
                    navigate('/FileTable');
                    Alert.success('Message sent successfully');
                })
                .catch((error) => {
                    console.log(error);
                });
        } else if (fileDeclaration) {
            // Handle the case when you have fileDeclaration but no id
            DeclarationService.createEmployee(declaration)
                .then((response) => {
                    // Handle the response as needed
                    console.log(response.data);
                    navigate('/FileTable');
                    Alert.success('Message sent successfully');
                })
                .catch((error) => {
                    console.log(error);
                });
        } else {
            // Handle the default case (when neither id nor fileDeclaration is present)
            DeclarationService.createEmployee(formData)
                .then((response) => {
                    console.log(response.data);
                    navigate('/FileTable');
                    Alert.success('Message sent successfully');
                })
                .catch((error) => {
                    console.log(error);
                });
        }
    };

      const toggleUploadFiles = () => {
        // Toggle the visibility of the Upload Files section
        setShowUploadFiles(!showUploadFiles);
      };
      const toggleUploadFiles1 = () => {
        // Toggle the visibility of the Upload Files section
        setShowUploadFiles1(!showUploadFiles1);
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
      
      const handleDeleteFile = (fileUrlToDelete) => {
        const updatedFiles = selectedFiles.filter(fileUrl => fileUrl !== fileUrlToDelete);
        setSelectedFiles(updatedFiles);
      
        // Update sessionStorage with the updated files
        sessionStorage.setItem('storedFiles', JSON.stringify(updatedFiles));
      };
      useEffect(() => {
        const storedFiles = JSON.parse(sessionStorage.getItem('storedFiles')) || [];
        setSelectedFiles(storedFiles);
      }, []);
      
      useEffect(() => {
        UploadFilesService.getFiles().then((response) => {
          setFileInfos(response.data);
        });
      }, []);
    
      const selectFile = (event) => {
        setSelectedFiles(event.target.files);
        setSelectedFileName(event.target.files[0].name);
      };
    
      const upload = async () => {
        if (selectedFiles && selectedFiles.length > 0) {
          const currentFile = selectedFiles[0];
          setCurrentFile(currentFile);
          setProgress(0);
    
          try {
            const response = await UploadFilesService.upload(currentFile, (event) => {
              setProgress(Math.round((100 * event.loaded) / event.total));
            });
    
            setMessage(response.data.message);
    
            const files = await UploadFilesService.getFiles();
    
            setFileInfos(files.data);
    
            setSelectedFileName(currentFile.name);
          } catch (error) {
            setProgress(0);
            setMessage("Failed to upload the file!");
            setCurrentFile(undefined);
          }
    
          setSelectedFiles(undefined);
        }
      };
    
     // Inside UploadFiles component
    
    
    
     const sendFile = async () => {
      if (selectedFiles && selectedFiles.length > 0) {
        const fileToSend = selectedFiles[0];
        try {
          const response = await UploadFilesService.upload(fileToSend, (event) => {
            setProgress(Math.round((100 * event.loaded) / event.total));
          });
    
          setMessage(response.data.message);
    
          const files = await UploadFilesService.getFiles();
          
          // Store file information and download URLs in browser storage
          localStorage.setItem('fileInfos', JSON.stringify(files.data.map(file => ({
            ...file,
            downloadUrl: `http://localhost:8092/download/${file}`
          }))));
    
          // Navigate to the correct URL after uploading the file
          navigate('/FileTable'); // Change this to the desired URL
    
        } catch (error) {
          setProgress(0);
          setMessage("Failed to upload the file!");
          setCurrentFile(undefined);
        }
    
        setSelectedFiles(undefined);
      }
    };
    
    
    
    
    const deleteFile = async (filename) => {
      try {
        await UploadFilesService.deleteFile(filename);
        setFileInfos(fileInfos.filter(file => file !== filename));
        Alert.success('File deleted successfully');
        
        // Update file information in browser storage after deletion
        const updatedFileInfos = fileInfos.filter(file => file !== filename);
        localStorage.setItem('fileInfos', JSON.stringify(updatedFileInfos));
      } catch (error) {
        console.error('Error deleting file:', error);
        Alert.error('Failed to delete file');
      }
    };
    
    
      
  return (
    <div className="container-left"> 
        
      <nav>
        <ul className="mcd-menu">
          <li>
           
          <a href="/">
         
              <strong>Home</strong>
            
            </a>
          </li>
          <li>
            {/* Step 3: Update the "About us" link to toggle the form visibility */}
            <a  className="active" onClick={toggleForm}>
              <strong>add price diesel information</strong>
            </a>
          </li>
          <li>
        <a  onClick={toggleUploadFiles}>
          <strong>BON DE LIVRAISON </strong>
        </a>
      </li>
          <li>
            <a onClick={toggleUploadFiles1}>
            
              <strong>Rapport du chef</strong>
              
            </a>
          </li>
          <li>
            <a href="/">
             
              <strong>Blog</strong>
             
            </a>
            <ul>
              <li>
                <a href="#"><i className="fa fa-globe"></i>Mission</a>
              </li>
              <li>
                <a href="#"><i className="fa fa-group"></i>Our Team</a>
                <ul>
                  <li><a href="#"><i className="fa fa-female"></i>Leyla Sparks</a></li>
                  <li>
                    <a href="#"><i className="fa fa-male"></i>Gleb Ismailov</a>
                    <ul>
                      <li><a href="#"><i className="fa fa-leaf"></i>About</a></li>
                      <li><a href="#"><i className="fa fa-tasks"></i>Skills</a></li>
                    </ul>
                  </li>
                  <li><a href="#"><i className="fa fa-female"></i>Viktoria Gibbers</a></li>
                </ul>
              </li>
              <li><a href="#"><i className="fa fa-trophy"></i>Rewards</a></li>
              <li><a href="#"><i className="fa fa-certificate"></i>Certificates</a></li>
            </ul>
          </li>
          <li>
            <a href="/">
              
              
              <strong>Portfolio</strong>
            
            </a>
          </li>
          <li>
            <a href="/">
         
              <strong>Contacts</strong>
             
            </a>
          </li>
          <li className="float">
            <a className="search">
              <input type="text" placeholder="search ..." />
              <button style={{ height: '40px' }}><SearchIcon /></button>
            </a>
            <a href="/" className="search-mobile">
              <i className="fa fa-search"></i>
            </a>
          </li>
        </ul>
      </nav>
     
      <form className="login-form">
      {showForm && (
        <div className="form">
          <div className="form-content">
            <h1 className="title22"> INFORMATIONS PRIX DE GAZOIL </h1>
            <br /> <br />
            <input
              type="text"
              placeholder="Enter the price"
              value={prix}
              onChange={(e) => setPrix(e.target.value)}
            />
            <input
              type="text"
              placeholder="Enter Date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
            <input
              type="text"
              placeholder="Enter N°BL"
              value={numerobl}
              onChange={(e) => setNumerobl(e.target.value)}
            />
             <input
              type="text"
              placeholder="Enter Quantité"
              value={quantite}
              onChange={(e) => setQuantite(e.target.value)}
            />
            <input
              type="text"
              placeholder="Enter FSS"
              value={fournisseur || defaultFournisseur} // Set the default value
              onChange={(e) => setFournisseur(e.target.value)}
            />
             <input
              type="text"
              placeholder="Enter C/C"
              value={nombateau }
              onChange={(e) => setNombateau(e.target.value)}
            />
            
            
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
            <div className="circle-container">
              <div className="circle-shadow">
                <img
                  src={logovivo}
                  alt="Logo Vivo"
                  style={{ height: '90px', marginRight: '10px' }}
                />
              </div>
            </div>
          </div>
        </div>
      )}

{showUploadFiles && (
    <div className="container27" >
                <div className="card22">
                <h3>Upload Files:BON DE LIVRAISON</h3>
                <div
              className={`drop_box ${fileSelected ? 'blue-light' : ''}`}
              onClick={handleDropBoxClick}
            >

<header>
              <h4>Select File here</h4>
            </header>
            <p>Files Supported: PDF, TEXT, DOC , DOCX</p>
    <div className="form-group">
      <input
        className="form-control"
        name="file"
        onChange={selectFile}
        type="file"
      />
    </div>
    <div style={{ display: 'flex', alignItems: 'center' , marginTop:'30px'}}>
    <div className="form-group">
      <button
        className="btn22"
        disabled={!selectedFiles}
        onClick={upload}
        type="submit"
      >
        Upload
      </button>
      <button
        className="btn22"
        disabled={!selectedFileName}
        onClick={sendFile}
      >
        Send File
      </button>
    </div>
    </div>
    </div>
    </div>
    {currentFile && (
      
      <div className="progress">
        <div
          className="progress-bar bg-success"
          role="progressbar"
          aria-valuenow={progress}
          aria-valuemin="0"
          aria-valuemax="100"
          style={{ width: progress + "%" }}
        >
          {progress}%
        </div>
      </div>
    )}
    <div className="alert alert-light" role="alert">
      <p className="text-danger">{message}</p>
    </div>
   
 
      <div className="btn-group mx-auto">
        <h4 className="card-header">Download the file</h4>
      </div>
      <ul className="list-group">
        {fileInfos &&
          fileInfos.map((file) => (
            <a
              href={`http://localhost:8092/download/${file}`}
              className="list-group-item list-group-item-action"
              key={file}
            >
              <li>{file}<button className="btn btn-danger" onClick={() => deleteFile(file)}>Delete</button></li>
            </a>
          ))}
      </ul>
    </div>
    

  
      )}
      
    
{showUploadFiles1 && (
      <div className="container27" >
         
        <div className="card22">
          <h3>Upload Files:Rapport du chef</h3>
          
          <div
              className={`drop_box ${fileSelected ? 'blue-light' : ''}`}
              onClick={handleDropBoxClick}
            >
            <header>
              <h4>Select File here</h4>
            </header>
            <p>Files Supported: PDF, TEXT, DOC , DOCX</p>
            
          
          <div>
          <input
  type="file"
  id="file-upload-1"

  ref={fileInputRef1} // Separate file input reference for selectedFiles1
  onChange={handleFileChangeForFiles1} // Use handleFileChangeForFiles1 for selectedFiles1
/>


    </div>
 
      <div style={{ display: 'flex', alignItems: 'center' , marginTop:'30px'}}>
        {/* Separate divs for the buttons */}
        <div style={{ marginRight: '20px' }}>
        <button className="btn22" onClick={handleDownload}>
        Download
      </button>
      {selectedFiles.length > 0 && (
  
  <button className="btn22"  onClick={(e) => {
   handleUpload();
   sendLastSelectedFile();
   saveOrUpdateEmployee(e);
 }}>
       SendAll
     </button>
 )}
        </div>
        <div>
         
        </div>
      </div>
    </div>
  </div>
  {selectedFiles1.length > 0 && (
  <div>
    <p>Downloaded Files:</p>
    {selectedFiles1.map((fileUrl, index) => (
      <div key={index}>
        <a href={fileUrl} download={`selectedFile_${index}`}>
          Download File {index + 1}
        </a>
        <span onClick={() => handleDeleteFile(fileUrl)}>
          <FaTimes style={{ cursor: 'pointer', marginLeft: '5px', color: 'red' }} />
        </span>
      </div>
    ))}
  </div>
)}

</div>

      )}
      
    </form>
  </div>
      
  );
};

export default UploadFiles;