
import React from 'react';

import './Editar.css';

import Dashboard from '../../Dashboard';


export const EditarProd = () =>{


    return (
        <div>
      <Dashboard></Dashboard>
    <div className="content">
      <div className="box-content">
        <h2>Editar Produto</h2>
        <form method="post" encType="multipart/form-data">
          <div className="form-group">
            <label>Nome do Produto:</label>
            <input type="text" name="nome" required/>
          </div>
          <div className="form-group">
            <label>Descrição Produto:</label>
            <textarea name="desc" ></textarea>
          </div>
          <div className="form-group">
            <label>Preço:</label>
            <input type="text" name="preco" required/>
          </div>
          <div className="form-group">
            <label>Quantidade do Produto:</label>
            <input type="text" name="estoque" required />
          </div>
          <div className="form-group">
            <label>Foto do Produto:</label>
            <input multiple type="file" name="image" />
          </div>
          <div className="form-group">
            <input type="submit" name="acao" value="Editar" />
          </div>
        </form>
        </div>
      </div>
      </div>
  );
};
