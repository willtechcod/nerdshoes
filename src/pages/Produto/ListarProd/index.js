import React, { useEffect, useState } from 'react';
import Dashboard from '../../Dashboard';

import api from '../../../config/configApi';

import './Listar.css';


export const ListarProd = () => {

  
  const [data, setData] = useState({});
  const [status, setStatus] = useState({
    type: '',
    messagem: ''
  });
  const getProdutos = async () => {
    await api.get('/produto')
      .then((response) => {
        console.log(response.data);
        if (response.data.erro) {
          setStatus({
            type: 'erro',
            messagem: response.data.messagem
          });
        } else {
          setData(response.data.produtos);
        }
      })
      .catch(() => {
        setStatus({
          type: 'erro',
          messagem: 'Erro: Servidor fora do ar Tente mais tarde!'
        });
      });
  }

  useEffect(() => {
    getProdutos();
  }, []);

  return (
    <div>
      <Dashboard></Dashboard>
     
    </div>
  );
};