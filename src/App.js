import React from 'react';
import FileUpload from './components/FileUpload';
import FileList from './components/FileList';

const App = () => {
  return (
    <div style={{ padding: '20px' }}>
      <h1>File Upload App</h1>
      <FileUpload />
      <FileList />
    </div>
  );
};

export default App;