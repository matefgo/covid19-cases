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
      setIconStatus('mx-auto mt-5 mb-4 my-lg-4');
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
      <div className="h100 overScroll d-flex flex-column m-auto">
        <div id="icon" className={`d-flex align-items-center ${iconStatus}`}>
          <i className="mr-2 fas fa-viruses"></i>
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
            className={`mx-lg-3 text-center ${
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
          <h4>COVID-19</h4>
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
          <h4>Como os dados são monitorados?</h4>
          <p>
            Phasellus interdum tellus id felis vestibulum dictum. Fusce risus
            velit, varius sit amet felis et, cursus tempus elit. Praesent
            euismod urna quis odio consequat, sit amet rhoncus arcu tempor.
            Maecenas at leo quis dui aliquet accumsan. Nunc quis ligula nec
            dolor gravida consequat. Proin sed dictum diam. In venenatis, enim
            non cursus gravida, nulla ipsum euismod justo, nec mattis lectus
            dolor at lectus. Ut lacus felis, vehicula elementum nibh sit amet,
            mattis mollis nisl.
          </p>
        </div>
      </div>
    </div>
  );
}
