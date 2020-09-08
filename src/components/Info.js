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
      setIconStatus('mx-auto mt-5 mb-2 my-lg-4');
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
      <div className="h100 overScroll d-flex flex-column m-auto">
        <div id="icon" className={`d-flex ${iconStatus}`}>
          <i className="mr-2 fas fa-file-medical"></i>
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
        </div>
        <div
          id="title"
          className={`mb-4 m-lg-0 text-center ${
            divStatus !== 'sm-9 col-lg-9' && 'd-none'
          }`}
        >
          <h3>Número Total de</h3>
          <h1>Casos</h1>
        </div>
        <div
          id="text"
          className={`d-flex flex-column mx-4 my-lg-3 text-justify ${textStatus}`}
        >
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
            lacinia feugiat placerat. Quisque euismod lorem sed orci pharetra
            consequat. Morbi ultrices iaculis euismod. Duis vel tempor purus, et
            tempus est. Duis egestas, odio vitae imperdiet consectetur, mauris
            justo ornare purus, vel sollicitudin mi purus quis sapien. Quisque
            sit amet mattis neque. Aenean posuere eros eu sagittis tempor.
            Praesent laoreet leo sed vestibulum ullamcorper. Interdum et
            malesuada fames ac ante ipsum primis in faucibus.
          </p>
          <div className="d-flex flex-wrap align-items-center justify-content-center">
            <div className="d-flex m-4">
              <i id="infoIcon" className="mr-3 fas fa-head-side-virus"></i>
              <div>
                <p className="infoCaseName">Casos</p>
                <p className="infoCaseNumber">{formatter.format(data.cases)}</p>
              </div>
            </div>
            <div className="d-flex m-4">
              <i id="infoIcon" className="mr-3 fas fa-head-side-cough"></i>
              <div>
                <p className="infoCaseName">Suspeitas</p>
                <p className="infoCaseNumber">
                  {formatter.format(data.suspects)}
                </p>
              </div>
            </div>
            <div className="d-flex m-4">
              <i id="infoIcon" className="mr-3 fas fa-virus-slash"></i>
              <div>
                <p className="infoCaseName">Negativos</p>
                <p className="infoCaseNumber">
                  {formatter.format(data.refuses)}
                </p>
              </div>
            </div>
            <div className="d-flex m-4">
              <i id="infoIcon" className="mr-3 fas fa-skull-crossbones"></i>
              <div>
                <p className="infoCaseName">Mortes</p>
                <p className="infoCaseNumber">
                  {formatter.format(data.deaths)}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
