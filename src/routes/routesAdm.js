import React, { useContext } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Login } from '../pages/Login';
import Dashboard from '../pages/Dashboard';

import { Context } from '../Context/AuthContext'

import { VisualizarProd } from '../pages/Produto/VisualizarProd';
import { ApagarProd } from '../pages/Produto/ApagarProd';
import { EditarProd } from '../pages/Produto/EditarProd';
import { CadProd } from '../pages/Produto/CadProd';

export default function RoutesAdm() {

    function CustomRoute({isPrivate, ...rest}){
        const { authenticated } = useContext(Context);
        if(isPrivate && !authenticated){
            return <Redirect to="/admin-login" />
        }
        return <Route {...rest}/>
    }

    return (
        <Switch>
            <CustomRoute path="/admin-login" component={Login} />
            <CustomRoute isPrivate path="/dashboard" component={Dashboard} />
            <CustomRoute isPrivate path="/produto" component={VisualizarProd} />
            <CustomRoute isPrivate path="/cad_prod" component={CadProd} />
            <CustomRoute isPrivate path="/edit_prod" component={EditarProd} />
            <CustomRoute isPrivate path="/apagar_prod/:id" component={ApagarProd} />
        </Switch>
    )
}