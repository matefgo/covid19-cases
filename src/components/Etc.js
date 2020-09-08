import React, { useState, useEffect } from 'react';

export default function Etc({ mouseIn, mouseEvent, currentDiv }) {
  const [divStatus, setDivStatus] = useState('sm-2 col-lg-2');
  const [iconStatus, setIconStatus] = useState('mx-lg-auto');

  useEffect(() => {
    if (!mouseIn) {
      setDivStatus('sm-2 col-lg-2');
      setIconStatus('mx-lg-auto');
    } else if (currentDiv === 'etc') {
      setDivStatus('sm-9 col-lg-9');
      setIconStatus('');
    } else {
      setDivStatus('sm-1 col-lg-1');
      setIconStatus('mx-lg-auto');
    }
  }, [mouseIn, currentDiv]);

  const handleDivClick = (event) => {
    if (divStatus === 'sm-1 col-lg-1') {
      mouseEvent(event, 'etc');
    }
  };

  return (
    <div
      id="etc"
      className={`d-flex flex-column flex-lg-row align-items-center justify-content-center ${divStatus}`}
      onClick={handleDivClick}
    >
      <div id="icon" className={`mr-2 d-flex align-items-center ${iconStatus}`}>
        <i className="fas fa-shield-virus"></i>
        <p
          id="subtitle"
          className={
            divStatus !== 'sm-9 col-lg-9' ? 'ml-4 d-lg-none' : 'd-none'
          }
        >
          Previna-se
        </p>
      </div>
    </div>
  );
}
