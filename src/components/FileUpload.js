import React from 'react';
import { useDispatch } from 'react-redux';
import './FileUpload.css'; // Import the CSS file

const FileUpload = () => {
    const dispatch = useDispatch();

    const handleDrop = (event) => {
        event.preventDefault();
        const files = Array.from(event.dataTransfer.files);
        dispatch({ type: 'ADD_FILES', payload: files });
    };

    const handleDragOver = (event) => {
        event.preventDefault();
    };

    return (
        <div
            className="file-upload"
            onDrop={handleDrop}
            onDragOver={handleDragOver}
        >
            <p>Drag and drop your files here</p>
        </div>
    );
};

export default FileUpload;
