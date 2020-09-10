import React, { useEffect, useState } from 'react';

export default function Principal({ mouseIn, mouseEvent, currentDiv }) {
  const [divStatus, setDivStatus] = useState('sm-6 col-lg-6');
  const [iconStatus, setIconStatus] = useState('m-auto');
  const [textStatus, setTextStatus] = useState('hide');

  useEffect(() => {
    if (!mouseIn) {
      setDivStatus('sm-6 col-lg-6');
      setIconStatus('m-auto');
      setTextStatus('hide');
    } else if (currentDiv === 'principal') {
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
      mouseEvent(event, 'principal');
    }
  };

  return (
    <div id="principal" className={divStatus} onClick={handleDivClick}>
      <div className="d-flex flex-column m-auto h100 overScroll">
        <div id="icon" className={`d-flex ${iconStatus}`}>
          <i className="fas fa-viruses m-auto"></i>
          <p
            id="subtitle"
            className={
              divStatus === 'sm-1 col-lg-1'
                ? 'text-nowrap ml-3 my-auto d-lg-none'
                : 'd-none'
            }
          >
            Saiba mais
          </p>
          <div
            id="title"
            className={`text-center ml-3 my-auto ${
              divStatus === 'sm-1 col-lg-1' && 'd-none'
            }`}
          >
            <h1>COVID 19</h1>
            <h3>Casos Nacionais</h3>
          </div>
        </div>
        <div
          id="textPrincipal"
          className={`d-flex flex-column mx-4 my-lg-3 text-justify ${textStatus}`}
        >
          <h4 className="mb-1">COVID-19</h4>
          <p>
            A COVID-19 é uma doença causada pelo coronavírus, denominado
            SARS-CoV-2, que apresenta um espectro clínico variando de infecções
            assintomáticas a quadros graves. De acordo com a Organização Mundial
            de Saúde, a maioria (cerca de 80%) dos pacientes com COVID-19 podem
            ser assintomáticos ou oligossintomáticos (poucos sintomas), e
            aproximadamente 20% dos casos detectados requer atendimento
            hospitalar por apresentarem dificuldade respiratória, dos quais
            aproximadamente 5% podem necessitar de suporte ventilatório.
          </p>
          <h4 className="mb-1">Como os dados são monitorados?</h4>
          <p>
            O processo de atualização dos dados sobre casos e óbitos confirmados
            por COVID-19 no Brasil é realizado diariamente pelo Ministério da
            Saúde através das informações oficiais repassadas pelas Secretarias
            Estaduais de Saúde das 27 Unidades Federativas brasileiras. Os dados
            fornecidos pelos estados são consolidados e disponibilizados
            publicamente todos os dias, em torno das 19h.
          </p>
        </div>
      </div>
    </div>
  );
}
