import React from 'react';
import { Route, Redirect} from 'react-router-dom';
import isAuthenticate from '../components/util/isAuthenticate';


const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route 
        {...rest}
        render={(props)=> isAuthenticate() ? <Component {...props}/> : <Redirect to="/login" />}
    />
)
 
export default PrivateRoute;