import React from 'react';

export default function SelectState({ onButtonSelection, data }) {
  const handleButtonClick = (event) => {
    onButtonSelection(event.target.value);
  };

  const currentValue = !data ? '' : data.uf;

  return (
    <div>
      <div className="d-none d-md-flex flex-wrap m-auto align-items-center justify-content-center">
        <button
          type="button"
          className={`btn btn-outline-light ${
            currentValue === 'AC' ? 'active' : ''
          }`}
          onClick={handleButtonClick}
          value="AC"
        >
          Acre
        </button>
        <button
          type="button"
          className={`btn btn-outline-light ${
            currentValue === 'AL' ? 'active' : ''
          }`}
          onClick={handleButtonClick}
          value="AL"
        >
          Alagoas
        </button>
        <button
          type="button"
          className={`btn btn-outline-light ${
            currentValue === 'AP' ? 'active' : ''
          }`}
          onClick={handleButtonClick}
          value="AP"
        >
          Amapá
        </button>
        <button
          type="button"
          className={`btn btn-outline-light ${
            currentValue === 'AM' ? 'active' : ''
          }`}
          onClick={handleButtonClick}
          value="AM"
        >
          Amazonas
        </button>
        <button
          type="button"
          className={`btn btn-outline-light ${
            currentValue === 'BA' ? 'active' : ''
          }`}
          onClick={handleButtonClick}
          value="BA"
        >
          Bahia
        </button>
        <button
          type="button"
          className={`btn btn-outline-light ${
            currentValue === 'CE' ? 'active' : ''
          }`}
          onClick={handleButtonClick}
          value="CE"
        >
          Ceará
        </button>
        <button
          type="button"
          className={`btn btn-outline-light ${
            currentValue === 'DF' ? 'active' : ''
          }`}
          onClick={handleButtonClick}
          value="DF"
        >
          Distrito Federal
        </button>
        <button
          type="button"
          className={`btn btn-outline-light ${
            currentValue === 'ES' ? 'active' : ''
          }`}
          onClick={handleButtonClick}
          value="ES"
        >
          Espírito Santo
        </button>
        <button
          type="button"
          className={`btn btn-outline-light ${
            currentValue === 'GO' ? 'active' : ''
          }`}
          onClick={handleButtonClick}
          value="GO"
        >
          Goiás
        </button>
        <button
          type="button"
          className={`btn btn-outline-light ${
            currentValue === 'MA' ? 'active' : ''
          }`}
          onClick={handleButtonClick}
          value="MA"
        >
          Maranhão
        </button>
        <button
          type="button"
          className={`btn btn-outline-light ${
            currentValue === 'MT' ? 'active' : ''
          }`}
          onClick={handleButtonClick}
          value="MT"
        >
          Mato Grosso
        </button>
        <button
          type="button"
          className={`btn btn-outline-light ${
            currentValue === 'MS' ? 'active' : ''
          }`}
          onClick={handleButtonClick}
          value="MS"
        >
          Mato Grosso do Sul
        </button>
        <button
          type="button"
          className={`btn btn-outline-light ${
            currentValue === 'MG' ? 'active' : ''
          }`}
          onClick={handleButtonClick}
          value="MG"
        >
          Minas Gerais
        </button>
        <button
          type="button"
          className={`btn btn-outline-light ${
            currentValue === 'PA' ? 'active' : ''
          }`}
          onClick={handleButtonClick}
          value="PA"
        >
          Pará
        </button>
        <button
          type="button"
          className={`btn btn-outline-light ${
            currentValue === 'PB' ? 'active' : ''
          }`}
          onClick={handleButtonClick}
          value="PB"
        >
          Paraíba
        </button>
        <button
          type="button"
          className={`btn btn-outline-light ${
            currentValue === 'PR' ? 'active' : ''
          }`}
          onClick={handleButtonClick}
          value="PR"
        >
          Paraná
        </button>
        <button
          type="button"
          className={`btn btn-outline-light ${
            currentValue === 'PE' ? 'active' : ''
          }`}
          onClick={handleButtonClick}
          value="PE"
        >
          Pernambuco
        </button>
        <button
          type="button"
          className={`btn btn-outline-light ${
            currentValue === 'PI' ? 'active' : ''
          }`}
          onClick={handleButtonClick}
          value="PI"
        >
          Piauí
        </button>
        <button
          type="button"
          className={`btn btn-outline-light ${
            currentValue === 'RJ' ? 'active' : ''
          }`}
          onClick={handleButtonClick}
          value="RJ"
        >
          Rio de Janeiro
        </button>
        <button
          type="button"
          className={`btn btn-outline-light ${
            currentValue === 'RN' ? 'active' : ''
          }`}
          onClick={handleButtonClick}
          value="RN"
        >
          Rio Grande do Norte
        </button>
        <button
          type="button"
          className={`btn btn-outline-light ${
            currentValue === 'RS' ? 'active' : ''
          }`}
          onClick={handleButtonClick}
          value="RS"
        >
          Rio Grande do Sul
        </button>
        <button
          type="button"
          className={`btn btn-outline-light ${
            currentValue === 'RO' ? 'active' : ''
          }`}
          onClick={handleButtonClick}
          value="RO"
        >
          Rondônia
        </button>
        <button
          type="button"
          className={`btn btn-outline-light ${
            currentValue === 'RR' ? 'active' : ''
          }`}
          onClick={handleButtonClick}
          value="RR"
        >
          Roraima
        </button>
        <button
          type="button"
          className={`btn btn-outline-light ${
            currentValue === 'SC' ? 'active' : ''
          }`}
          onClick={handleButtonClick}
          value="SC"
        >
          Santa Catarina
        </button>
        <button
          type="button"
          className={`btn btn-outline-light ${
            currentValue === 'SP' ? 'active' : ''
          }`}
          onClick={handleButtonClick}
          value="SP"
        >
          São Paulo
        </button>
        <button
          type="button"
          className={`btn btn-outline-light ${
            currentValue === 'SE' ? 'active' : ''
          }`}
          onClick={handleButtonClick}
          value="SE"
        >
          Sergipe
        </button>
        <button
          type="button"
          className={`btn btn-outline-light ${
            currentValue === 'TO' ? 'active' : ''
          }`}
          onClick={handleButtonClick}
          value="TO"
        >
          Tocantins
        </button>
      </div>
      <div className="mx-4 d-md-none" onChange={handleButtonClick}>
        <label htmlFor="states">Selecione o Estado:</label>
        <select className="custom-select" id="states">
          <option value="" disabled>
            Estados
          </option>
          <option value="AC">Acre</option>
          <option value="AL">Alagoas</option>
          <option value="AP">Amapá</option>
          <option value="AM">Amazonas</option>
          <option value="BA">Bahia</option>
          <option value="CE">Ceará</option>
          <option value="DF">Distrito Federal</option>
          <option value="ES">Espírito Santo</option>
          <option value="GO">Goiás</option>
          <option value="MA">Maranhão</option>
          <option value="MT">Mato Grosso</option>
          <option value="MS">Mato Grosso do Sul</option>
          <option value="MG">Minas Gerais</option>
          <option value="PA">Pará</option>
          <option value="PB">Paraíba</option>
          <option value="PR">Paraná</option>
          <option value="PE">Pernambuco</option>
          <option value="PI">Piauí</option>
          <option value="RJ">Rio de Janeiro</option>
          <option value="RN">Rio Grande do Norte</option>
          <option value="RS">Rio Grande do Sul</option>
          <option value="RO">Rondônia</option>
          <option value="RR">Roraima</option>/option>
          <option value="SC">Santa Catarina</option>
          <option value="SP">São Paulo</option>
          <option value="SE">Sergipe</option>
          <option value="TO">Tocantins</option>
        </select>
      </div>
    </div>
  );
}
