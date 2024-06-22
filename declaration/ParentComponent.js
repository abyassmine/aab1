// ParentComponent.js

import React, { useState } from 'react';
import FileUpload from './FileUpload'; // Import the FileUpload component

const ParentComponent = () => {
  const [downloadedFileLink, setDownloadedFileLink] = useState(null);

  const handleFileDownload = (downloadLink) => {
    setDownloadedFileLink(downloadLink);
  };

  return (
    <div>
      <h1>Parent Component</h1>
      <FileUpload onFileDownload={handleFileDownload} />
      {downloadedFileLink && (
        <div>
          <p>Downloaded File Link in Parent Component:</p>
          <a href={downloadedFileLink} download="downloaded_file">
            Downloaded File
          </a>
        </div>
      )}
    </div>
  );
};

export default ParentComponent;
