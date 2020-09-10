import React from 'react';

export default function StateData({ data }) {
  const formatter = new Intl.NumberFormat('bt-BR');

  const cases = !data ? 0 : data.cases;
  const suspects = !data ? 0 : data.suspects;
  const refuses = !data ? 0 : data.refuses;
  const deaths = !data ? 0 : data.deaths;

  return (
    <div
      className={
        !data
          ? 'hideStateData d-flex flex-column flex-md-row flex-md-wrap align-items-center justify-content-center'
          : 'showStateData d-flex flex-column flex-md-row flex-md-wrap align-items-center justify-content-center'
      }
    >
      <div className="d-flex mx-3 my-3">
        <i id="infoIcon" className="my-auto fas fa-head-side-virus"></i>
        <div className="ml-3 text-center">
          <p className="infoCaseName">Casos</p>
          <p className="infoCaseNumber">{formatter.format(cases)}</p>
        </div>
      </div>
      <div className="d-flex mx-3 my-3">
        <i id="infoIcon" className="my-auto far fa-question-circle"></i>
        <div className="ml-3 text-center">
          <p className="infoCaseName">Suspeitas</p>
          <p className="infoCaseNumber">{formatter.format(suspects)}</p>
        </div>
      </div>
      <div className="d-flex mx-3 my-3">
        <i id="infoIcon" className="my-auto fas fa-virus-slash"></i>
        <div className="ml-3 text-center">
          <p className="infoCaseName">Descartados</p>
          <p className="infoCaseNumber">{formatter.format(refuses)}</p>
        </div>
      </div>
      <div className="d-flex mx-3 my-3">
        <i id="infoIcon" className="my-auto fas fa-skull-crossbones"></i>
        <div className="ml-3 text-center">
          <p className="infoCaseName">Mortes</p>
          <p className="infoCaseNumber">{formatter.format(deaths)}</p>
        </div>
      </div>
    </div>
  );
}
