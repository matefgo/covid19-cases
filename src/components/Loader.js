import React from 'react';

export default function Loader() {
  return (
    <div id="loader" className="h-100 row">
      <div id="spin" className="spinner-border text-light m-auto" role="status">
        <span className="sr-only">Carregando</span>
      </div>
    </div>
  );
}
