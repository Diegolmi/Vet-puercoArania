import React from 'react';
import { Route, Redirect} from 'react-router-dom';
import isAuthenticate from '../components/util/isAuthenticate';


const RestrictedRoute = ({ component: Component, ...rest }) => (
    <Route 
        {...rest}
        render={(props)=> !isAuthenticate() ? <Component {...props}/> : <Redirect to="/" />}
    />
)
 
export default RestrictedRoute;