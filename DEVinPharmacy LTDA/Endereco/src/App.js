import React from 'react';
import { Formik, Field, Form } from 'formik';
import './App.css';

function App() {
  function onSubmit(values, actions) {
    console.log('SUBMIT', values);
  }

  function onBlurCep(ev, setFieldValue) {
    const { value } = ev.target;

    const cep = value?.replace(/[^0-9]/g, '');

    if (cep?.length !== 8) {
      return;
    }

    fetch(`https://viacep.com.br/ws/${cep}/json/`)
      .then((res) => res.json())
      .then((data) => {
        setFieldValue('logradouro', data.logradouro);
        setFieldValue('bairro', data.bairro);
        setFieldValue('cidade', data.localidade);
        setFieldValue('uf', data.uf);
      });
  }

  return (
    <div className="App">
      <Formik
        onSubmit={onSubmit}
        validateOnMount
        initialValues={{
          cep: '',
          logradouro: '',
          numero: '',
          complemento: '',
          bairro: '',
          cidade: '',
          uf: '',
        }}
        render={({ isValid, setFieldValue }) => (
          <Form>
            <div className="form-control-group">
              <label>Cep</label>
              <Field name="cep" type="text" onBlur={(ev) => onBlurCep(ev, setFieldValue)} />
            </div>
            <div className="form-control-group">
              <label>Logradouro/Endereço</label>
              <Field name="logradouro" type="text" />
            </div>
            <div className="form-control-group">
              <label>Número</label>
              <Field name="numero" type="text" />
            </div>
            <div className="form-control-group">
              <label>Complemento</label>
              <Field name="complemento" type="text" />
            </div>
            <div className="form-control-group">
              <label>Bairro</label>
              <Field name="bairro" type="text" />
            </div>
            <div className="form-control-group">
              <label>Cidade</label>
              <Field name="Cidade" type="text" />
            </div>
            <div className="form-control-group">
              <label>Estado</label>
              <div className="form-control-group">
              <Field name="Estado" type="text" />
            </div>
            </div>
            <button type="submit" disabled={!isValid}>Enviar</button>
          </Form>
        )}
      />
    </div>
  );
}

export default App;