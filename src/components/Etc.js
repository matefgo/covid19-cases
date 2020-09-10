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
      <div className="d-flex flex-column m-auto w100 h100 overScroll">
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
          className={`d-flex flex-column mx-5 my-3 text-justify align-items-start ${textStatus}`}
        >
          <div className="d-flex my-2 align-items-center justify-content-start">
            <i id="infoIcon" className="fas fa-people-arrows"></i>
            <div className="d-flex flex-column ml-3">
              <h4>Distanciamento Social</h4>
              <p className="m-0">
                Mantenha distância mínima de 1 (um) metro entre pessoas em
                lugares públicos e de convívio social. Evite abraços, beijos e
                apertos de mãos. Adote um comportamento amigável sem contato
                físico, mas sempre com um sorriso no rosto.
              </p>
            </div>
          </div>
          <div className="d-flex my-2 align-items-center justify-content-start">
            <i id="infoIcon" className="fas fa-hands-wash"></i>
            <div className="d-flex flex-column ml-3">
              <h4>Lave as mãos</h4>
              <p className="m-0">
                Lave com frequência as mãos até a altura dos punhos, com água e
                sabão, ou então higienize com álcool em gel 70%. Essa frequência
                deve ser ampliada quando estiver em algum ambiente público
                (ambientes de trabalho, prédios e instalações comerciais, etc),
                quando utilizar estrutura de transporte público ou tocar
                superfícies e objetos de uso compartilhado.
              </p>
            </div>
          </div>
          <div className="d-flex my-2 align-items-center justify-content-start">
            <i id="infoIcon" className="fas fa-head-side-mask"></i>
            <div className="d-flex flex-column ml-3">
              <h4>Use máscara</h4>
              <p className="m-0">
                Recomenda-se a utilização de máscaras em todos os ambientes. As
                máscaras de tecido (caseiras/artesanais), não são Equipamentos
                de Proteção Individual (EPI), mas podem funcionar como uma
                barreira física, em especial contra a saída de gotículas
                potencialmente contaminadas.
              </p>
            </div>
          </div>
          <div className="d-flex my-2 align-items-center justify-content-start">
            <i id="infoIcon" className="fas fa-house-user"></i>
            <div className="d-flex flex-column ml-3">
              <h4>Fique em casa</h4>
              <p className="m-0">
                Evite circulação desnecessária nas ruas, estádios, teatros,
                shoppings, shows, cinemas e igrejas.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
