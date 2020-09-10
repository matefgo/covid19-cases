import React, { useEffect, useState } from 'react';

export default function Info({ mouseIn, mouseEvent, currentDiv, data }) {
  const [divStatus, setDivStatus] = useState('sm-2 col-lg-2 overScroll');
  const [iconStatus, setIconStatus] = useState('m-auto');
  const [textStatus, setTextStatus] = useState('hide');

  const formatter = new Intl.NumberFormat('bt-BR');

  useEffect(() => {
    if (!mouseIn) {
      setDivStatus('sm-2 col-lg-2 overScroll');
      setIconStatus('m-auto');
      setTextStatus('hide');
    } else if (currentDiv === 'info') {
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
      mouseEvent(event, 'info');
    }
  };

  return (
    <div id="info" className={divStatus} onClick={handleDivClick}>
      <div className="d-flex flex-column m-auto w100 h100 overScroll">
        <div id="icon" className={`d-flex ${iconStatus}`}>
          <i className="fas fa-file-medical m-auto"></i>
          <p
            id="subtitle"
            className={
              divStatus !== 'sm-9 col-lg-9'
                ? 'text-nowrap ml-3 my-auto d-lg-none'
                : 'd-none'
            }
          >
            Total de Casos
          </p>
          <div
            id="title"
            className={`text-center ml-3 my-auto ${
              divStatus !== 'sm-9 col-lg-9' && 'd-none'
            }`}
          >
            <h3>Número Total de</h3>
            <h1>Casos</h1>
          </div>
        </div>
        <div
          id="text"
          className={`d-flex flex-column mx-4 my-lg-3 text-justify ${textStatus}`}
        >
          <div className="d-flex mx-auto my-3">
            <i id="infoIcon" className="my-auto fas fa-head-side-virus"></i>
            <div className="ml-3 text-center">
              <p className="infoCaseName">Casos</p>
              <p className="infoCaseNumber">{formatter.format(data.cases)}</p>
            </div>
          </div>
          <div className="d-flex mx-auto my-3">
            <i id="infoIcon" className="my-auto far fa-question-circle"></i>
            <div className="ml-3 text-center">
              <p className="infoCaseName">Suspeitas</p>
              <p className="infoCaseNumber">
                {formatter.format(data.suspects)}
              </p>
            </div>
          </div>
          <div className="d-flex mx-auto my-3">
            <i id="infoIcon" className="my-auto fas fa-virus-slash"></i>
            <div className="ml-3 text-center">
              <p className="infoCaseName">Descartados</p>
              <p className="infoCaseNumber">{formatter.format(data.refuses)}</p>
            </div>
          </div>
          <div className="d-flex mx-auto my-3">
            <i id="infoIcon" className="my-auto fas fa-skull-crossbones"></i>
            <div className="ml-3 text-center">
              <p className="infoCaseName">Mortes</p>
              <p className="infoCaseNumber">{formatter.format(data.deaths)}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
