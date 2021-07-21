import React, { useState } from 'react';
import Dashboard from '../../Dashboard';

import './Cadastrar.css';
import api from '../../../config/configApi';

export const CadProd = () => {

  const [status, setStatus] = useState({
    type: '',
    messagem: ''
  });


  const [produto, setProduto] = useState({
    nome: '',
    desc: '',
    preco: '',
    estoque: '',
    image: ''

  });

  const valorInput = e => setProduto({ ...produto, [e.target.name]: e.target.value });
  const cadProduto = async e => {
    e.preventDefault();
    const headers = {
      'Content-Type': 'application/json'
    }
    console.log(produto.nome);
    await api.post("/cad_prod", produto, { headers })
      .then((response) => {
        if (response.data.erro) {
          setStatus({
            type: 'erro',
            messagem: response.data.messagem
          });

        } else {
          setStatus({
            type: 'success',
            messagem: response.data.messagem
          });
        }


      }).catch(() => {
        setStatus({
          type: 'erro',
          messagem: 'Erro: Tente Mais Tarde'
        });
      });
  }

  return (
    <div>
      <Dashboard></Dashboard>
      <div className="content">
        <div className="box-content">
          <h2>Cadastrar Produto</h2>
          {status.type === 'erro' ? <p className="erro">{status.messagem}</p> : ""}
          {status.type === 'success' ? <p className="success">{status.messagem}</p> : ""}
          <form onSubmit={cadProduto} encType="multipart/form-data">
            <div className="form-group">
              <label>Nome do Produto:</label>
              <input type="text" name="nome" required onChange={valorInput} />
            </div>
            <div className="form-group">
              <label>Descrição Produto:</label>
              <textarea name="desc" onChange={valorInput} ></textarea>
            </div>
            <div className="form-group">
              <label>Preço:</label>
              <input type="text" name="preco" required onChange={valorInput} />
            </div>
            <div className="form-group">
              <label>Quantidade do Produto:</label>
              <input type="text" name="estoque" required onChange={valorInput} />
            </div>
            <div className="form-group">
              <label>Foto do Produto:</label>
              <input multiple type="file" name="image" onChange={valorInput} />
            </div>
            <div className="form-group">
              <input type="submit" value="Cadastrar" onChange={valorInput} />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};