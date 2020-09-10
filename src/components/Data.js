import React, { useState, useEffect } from 'react';
import SelectState from './SelectState';
import StateData from './StateData';

export default function Data({
  mouseIn,
  mouseEvent,
  currentDiv,
  handleStateSelection,
  data,
}) {
  const [divStatus, setDivStatus] = useState('sm-2 col-lg-2');
  const [iconStatus, setIconStatus] = useState('m-auto');
  const [textStatus, setTextStatus] = useState('hide');

  useEffect(() => {
    if (!mouseIn) {
      setDivStatus('sm-2 col-lg-2 overScroll');
      setIconStatus('m-auto');
      setTextStatus('hide');
    } else if (currentDiv === 'data') {
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
      mouseEvent(event, 'data');
    }
  };

  const handleButtonSelection = (state) => {
    handleStateSelection(state);
  };

  return (
    <div id="data" className={divStatus} onClick={handleDivClick}>
      <div className="d-flex flex-column m-auto w100 h100 overScroll">
        <div id="icon" className={`d-flex ${iconStatus}`}>
          <i className="fas fa-clinic-medical m-auto"></i>
          <p
            id="subtitle"
            className={
              divStatus !== 'sm-9 col-lg-9'
                ? 'text-nowrap ml-3 my-auto d-lg-none'
                : 'd-none'
            }
          >
            Casos por Estado
          </p>
          <div
            id="title"
            className={`text-center ml-3 my-auto ${
              divStatus !== 'sm-9 col-lg-9' && 'd-none'
            }`}
          >
            <h3>Casos por</h3>
            <h1>Estado</h1>
          </div>
        </div>
        <div id="text" className={textStatus}>
          <SelectState
            onButtonSelection={handleButtonSelection}
            divStatus={divStatus}
            data={data}
          />
          <StateData data={data} />
        </div>
      </div>
    </div>
  );
}
