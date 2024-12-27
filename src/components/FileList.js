import React from 'react';
import { useSelector } from 'react-redux';
import './FileList.css'; // Import the CSS file

const FileList = () => {
    const files = useSelector((state) => state.files);
    return (
        <div className="file-list-container">
            <h3 className="file-list-title">Uploaded Files:</h3>
            <ul className="file-list">
                {files.map((file, index) => (
                    <li key={index} className="file-list-item">
                        {file.name}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default FileList;
