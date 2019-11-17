import React from 'react';
import { Route } from 'react-router-dom';

import Produks from './components/Produk';
import login from './components/Login';

const BaseRouter = () => (
    <div>
        <Route exact path='/' component={Produks} />
        <Route exact path='/login/' component={login} />
        
    </div>
)

export default BaseRouter;
