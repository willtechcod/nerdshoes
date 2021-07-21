import React, { useState, useContext } from 'react';
import { Menu } from '../../components/Menu';
import { Rodape } from '../../components/Rodape';

import { useHistory } from 'react-router-dom';

import { Context } from '../../Context/AuthContext';
import api from '../../config/configApi';


import './Login.css';

export const Login = () => {

  const history = useHistory();

  const { signIn } = useContext(Context);


  const [dadosUsuario, setUsuario] = useState({
    usuario: '',
    senha: ''
  });

  const [status, setStatus] = useState({
    type: '',
    messagem: ''
  });


  const valorInput = e => setUsuario({ ...dadosUsuario, [e.target.name]: e.target.value })
  const loginSubmit = async e => {
    e.preventDefault();
    //console.log(dadosUsuario.usuario);
    //console.log(dadosUsuario.senha);

    const headers = {
      'Content-Type': 'application/json'
    };

    api.post("/login", dadosUsuario, { headers })
      .then((response) => {

        //console.log(response.data.token);
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
          // Salvar o token localStorage
          localStorage.setItem('token', JSON.stringify(response.data.token));
          api.defaults.headers.Authorization = `Bearer ${response.data.token}`;
          signIn(true);
          return history.push('/dashboard');
        }

      }).catch(() => {
        setStatus({
          type: 'erro',
          messagem: "Erro: Usuário ou a Senha incorretos!"
        });

      });
  };

  return (
    <div>
      <Menu/>
      
    <div className="Container" >
      
      <form className="FormLogin" onSubmit={loginSubmit}>
        {status.type === 'erro' ? <p className="erro">{status.messagem}</p> : ""}
        {status.type === 'success' ? <p className="success">{status.messagem}</p> : ""}
        <h1>Login</h1>
        <input className="input" type="email" name="usuario" placeholder="Usuário" onChange={valorInput} />
        <input className="input" type="password" name="senha" placeholder="Senha" autoComplete="on" onChange={valorInput} />
        <button className="bt" type="submit" >Entrar</button><br />
      </form>
    </div>
    <Rodape/>
    </div>
  );
}