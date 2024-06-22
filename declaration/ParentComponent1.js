import React, { useState } from 'react';
import FileUpload from './FileUpload';
import ListUpload from './ListUpload';

const ParentComponent1 = () => {
  const [fileList, setFileList] = useState([]);
  const [uploadedFile, setUploadedFile] = useState(null);
  const handleFileSelect = (selectedFile) => {
    if (selectedFile) {
      // Add the selected file to the fileList
      setFileList([...fileList, selectedFile]);
      setUploadedFile(selectedFile); // Set the uploaded file
    }
  };
 

  
  return (
    <div>
      <FileUpload onFileSelect={handleFileSelect} />
      <ListUpload fileList={fileList} />
    </div>
  );
};

export default ParentComponent1;
