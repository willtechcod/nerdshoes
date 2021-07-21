import React from 'react';
import '../components/Rodape.css';

import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";


export const Rodape = () => {
    return (
        <div className="rodape">
            <div className="social">
                <a href="/#"><FaFacebook /></a>
                <a href="/#"><FaInstagram style={{ marginLeft: 10 }} /></a>
                <a href="/#"><FaTwitter style={{ marginLeft: 10 }} /></a>
                </div>
                <div className="copy"><strong>© copyright2021-Todos direitos reservados</strong>
                </div>
                </div>
    );
};