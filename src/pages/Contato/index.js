import React from 'react';
import { Button } from 'reactstrap';
import './Contato.css';

export const Contato = (props) => {
    return (
        <form className="formulario">
            <fieldset className="fieldset">
                <h1>Entre em contato</h1>
                <div>
                    <label className="label" >Nome </label><br/>
                    <input className="input" type="text"  id="nome" />
                </div>
                <div>
                    <label className="label" >Telefone </label><br/>
                    <input className="input" type="text" id="telefone" />
                </div>
                <div>
                    <label className="label" >E-mail </label><br/>
                    <input className="input" type="email" id="email" />
                </div>
                <div>
                    <label className="label">Digite sua menssagem:</label><br/>
                    <textarea className="textarea"/>
                </div>
                <Button className="btn" color="secondary" type="submit" >Enviar</Button>
            </fieldset>
        </form>
    );
};