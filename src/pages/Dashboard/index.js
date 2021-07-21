import React, { useContext } from 'react';

import './Dashboard.css';
import { FaUserAlt } from 'react-icons/fa';
import { AiOutlineMenu } from 'react-icons/ai';
import { FaHome } from 'react-icons/fa';



import { Context } from '../../Context/AuthContext';

const Dashboard = () => {

           

    const { handleLogout } = useContext(Context);

    return (

        <div className="topo-painel">
            <div className="menu">
                <div className="box-usuario">
                    <div className="avatar-usuario">
                        <i><FaUserAlt /></i>
                    </div>
                    <div className="nome-usuario">
                        <p>William P. da Conceição</p>
                        <p>Administrador</p>
                    </div>
                </div>
                <div className="items-menu">
                    <h2>Cadastrar Produtos</h2>
                    <a href="/produto">Listar Produtos</a>
                    <a href="/cad_prod">Cadastrar Produtos</a>
                    <a href="/edit_prod">Editar Produtos</a>
                    <a href="/apagar_prod/:id">Apagar Produtos</a>
                    <h2>Gestão de Usuários</h2>
                    <a href="#/">Editar Usuário</a>
                    <a href="#/">Cadastrar Usuário</a>
                    <a href="/dashboard">Voltar ao DashBoard</a>

                </div>
            </div>
            <div className="header">
                <div className="center">
                    <div className="menu-btn">
                        <AiOutlineMenu />
                    </div>

                    <div className="loggout">
                        <button className="bts" type="button" onClick={handleLogout}>Sair</button>
                    </div>

                </div>
                <div className="clear"></div>
            </div>

            <div className="content">

                <div className="box-content left w100">
                    <p><i><FaHome /></i>Painel de Controle</p>

                </div>

                {/*<div className="box-content left w100">

                </div>

                <div className="box-content left w50">

                </div>

               <div className="box-content right w50">

                <div className="clear"></div>
                </div>*/}

            </div>
            <div className="clear"></div>

        </div>

    );
}

export default Dashboard;