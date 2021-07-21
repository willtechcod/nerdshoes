import React, { useEffect, useState } from 'react';
import Dashboard from '../../Dashboard';

import api from '../../../config/configApi';

import './VisualizarProd.css';


export const VisualizarProd = (props) => {

  const [id] = useState(props.match.params.id)
  console.log(id);

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
      <div className="content">
        <div className="box-content">
          <h2>Vizualizar Produto</h2>
          {status.type === 'erro' ? <p className="erro">{status.messagem}</p> : ""}
          {status.type === 'success' ? <p className="success">{status.messagem}</p> : ""}
          {Array.isArray(data) && data.map(produto => (
            <div className="card" key={produto.id}>
              <img className="img-prod" src={produto.image} alt="" />
              <div className="titulo" tag="h5">{produto.nome}</div>
              <div className="subtitulo" tag="h6"><strong>{"R$ " + produto.preco}</strong></div>
              <div className="img-grid">
                <div className="descricao">
                  <div>{produto.estoque + "  disponivel em estoque"}</div>
                </div>
              </div>
            </div>
          ))}

        </div>
      </div>
    </div>
  );
};