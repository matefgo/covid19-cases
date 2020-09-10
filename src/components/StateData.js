import React from 'react';

export default function StateData({ data }) {
  const formatter = new Intl.NumberFormat('bt-BR');

  return !data ? (
    <p>Selecione um estado.</p>
  ) : (
    <div className="d-flex flex-wrap">
      <div className="d-flex mx-auto my-3">
        <i id="infoIcon" className="my-auto fas fa-head-side-virus"></i>
        <div className="ml-3">
          <p className="infoCaseName">Casos</p>
          <p className="infoCaseNumber">{formatter.format(data.cases)}</p>
        </div>
      </div>
      <div className="d-flex mx-auto my-3">
        <i id="infoIcon" className="my-auto fas fa-head-side-cough"></i>
        <div className="ml-3">
          <p className="infoCaseName">Suspeitas</p>
          <p className="infoCaseNumber">{formatter.format(data.suspects)}</p>
        </div>
      </div>
      <div className="d-flex mx-auto my-3">
        <i id="infoIcon" className="my-auto fas fa-virus-slash"></i>
        <div className="ml-3">
          <p className="infoCaseName">Descartados</p>
          <p className="infoCaseNumber">{formatter.format(data.refuses)}</p>
        </div>
      </div>
      <div className="d-flex mx-auto my-3">
        <i id="infoIcon" className="my-auto fas fa-skull-crossbones"></i>
        <div className="ml-3">
          <p className="infoCaseName">Mortes</p>
          <p className="infoCaseNumber">{formatter.format(data.deaths)}</p>
        </div>
      </div>
    </div>
  );
}
