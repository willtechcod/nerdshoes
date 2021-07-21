import React, { useState } from 'react';
import '../components/Menu.css';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Container
} from 'reactstrap';

//import { FaSearch } from "react-icons/fa";
import {FaCartPlus} from 'react-icons/fa';
import {FaShopify} from 'react-icons/fa';
import {GiShop} from 'react-icons/gi';
import {MdContactPhone} from 'react-icons/md';
import {AiOutlineDashboard} from 'react-icons/ai';

export const Menu = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        
        <div className="menu-menu">
            <Navbar color="dark" dark expand="md">
                <Container>
                <NavbarBrand href="/"><h1><span>Nerd</span>Shoes</h1></NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="mr-auto" navbar>
                        <NavItem>
                            <NavLink href="/meu-carrinho"><FaCartPlus color="#FFF"/> Carrinho</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/pedido/"><FaShopify color="#FFF"/> Pedido</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/visualizar-produto"><GiShop color="#FFF"/> Produtos</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/contato"><MdContactPhone color="#FFF"/> Contato</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/admin-login"><AiOutlineDashboard color="#FFF"/> Dashbord</NavLink>
                        </NavItem>
                        {/*<FaSearch className="ico"/><input className="search" type="text" placeholder="Faça sua Pequisa" />*/}
                        <NavLink className="entrar" href="/login-cli">Entrar | ou Faça seu cadastro</NavLink>
                    </Nav>
                </Collapse>
                </Container>
            </Navbar>
        </div>
    );
};