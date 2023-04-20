import React, { useState } from 'react';
import './Detection.css';

const BrainTumorDetection = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [error, setError] = useState('');

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file && (file.type === 'image/jpeg' || file.type === 'image/png')) {
      setSelectedFile(file);
      setError('');
    } else {
      setSelectedFile(null);
      setError('Please upload a valid image file (JPEG or PNG)');
    }
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (selectedFile) {
      // Send selectedFile to server for tumor detection
      console.log('File submitted for tumor detection:', selectedFile);
    } else {
      setError('Please select a file');
    }
  };

  return (
    <div className="brain-tumor-detection">
      <header>
        <h1>Brain Tumor Detection</h1>
      </header>
      <main>
        <form onSubmit={handleFormSubmit}>
          <div>
            <label htmlFor="scan">Upload a brain scan file:</label>
            <input type="file" id="scan" name="scan" accept=".jpg,.jpeg,.png" onChange={handleFileChange} required />
            <span className="error" id="scan-error">{error}</span>
          </div>
          <button type="submit" >Detect</button>
        </form>
        <div id="result"></div>
      </main>
      <footer>
        <p>© 2023 Brain Tumor Detection Inc.</p>
      </footer>
    </div>
  );
};

export default BrainTumorDetection;
