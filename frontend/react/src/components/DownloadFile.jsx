import React from 'react';

function DownloadFile({ filename }) {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = `${process.env.REACT_APP_API_URL}/download/${encodeURIComponent(filename)}`;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <li onClick={handleDownload} style={{ cursor: 'pointer', color: '#B0C4DE' }}>
      {filename}
    </li>
  );
}

export default DownloadFile;
