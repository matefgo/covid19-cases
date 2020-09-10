import React, { useState, useEffect } from 'react';

export default function Etc({ mouseIn, mouseEvent, currentDiv }) {
  const [divStatus, setDivStatus] = useState('sm-2 col-lg-2');
  const [iconStatus, setIconStatus] = useState('m-auto');
  const [textStatus, setTextStatus] = useState('hide');

  useEffect(() => {
    if (!mouseIn) {
      setDivStatus('sm-2 col-lg-2 overScroll');
      setIconStatus('m-auto');
      setTextStatus('hide');
    } else if (currentDiv === 'etc') {
      setDivStatus('sm-9 col-lg-9');
      setIconStatus('mx-auto my-5 my-lg-4');
      setTextStatus('showText');
    } else {
      setDivStatus('sm-1 col-lg-1');
      setIconStatus('m-auto');
      setTextStatus('hide');
    }
  }, [mouseIn, currentDiv]);

  const handleDivClick = (event) => {
    if (divStatus === 'sm-1 col-lg-1') {
      mouseEvent(event, 'etc');
    }
  };

  return (
    <div id="etc" className={divStatus} onClick={handleDivClick}>
      <div className="d-flex flex-column m-auto h100 overScroll">
        <div id="icon" className={`d-flex ${iconStatus}`}>
          <i className="fas fa-shield-virus m-auto"></i>
          <p
            id="subtitle"
            className={
              divStatus !== 'sm-9 col-lg-9'
                ? 'text-nowrap ml-3 my-auto d-lg-none'
                : 'd-none'
            }
          >
            Previna-se
          </p>
          <div
            id="title"
            className={`text-center ml-3 my-auto ${
              divStatus !== 'sm-9 col-lg-9' && 'd-none'
            }`}
          >
            <h3>Como se</h3>
            <h1>Prevenir?</h1>
          </div>
        </div>
        <div
          id="text"
          className={`d-flex flex-column mx-auto text-justify align-items-left ${textStatus}`}
        >
          <div className="d-flex my-3">
            <i id="infoIcon" className="my-auto fas fa-head-side-virus"></i>
            <div className="ml-3">
              <h3>Casos</h3>
              <h4>primeira info</h4>
            </div>
          </div>
          <div className="d-flex my-3">
            <i id="infoIcon" className="my-auto fas fa-head-side-cough"></i>
            <div className="ml-3">
              <h3>Casos</h3>
              <h4>primeira info</h4>
            </div>
          </div>
          <div className="d-flex my-3">
            <i id="infoIcon" className="my-auto fas fa-virus-slash"></i>
            <div className="ml-3">
              <h3>Casos</h3>
              <h4>primeira info</h4>
            </div>
          </div>
          <div className="d-flex my-3">
            <i id="infoIcon" className="my-auto fas fa-skull-crossbones"></i>
            <div className="ml-3">
              <h3>Casos</h3>
              <h4>primeira info</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
