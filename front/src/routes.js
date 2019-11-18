import React from 'react';
import { Route } from 'react-router-dom';

import Produks from './components/Produk';
import login from './components/Login';
import sigup from './components/Sigup';

const BaseRouter = () => (
    <div>
        <Route exact path='/' component={Produks} />
        <Route exact path='/login/' component={login} />
        <Route exact path='/sigup/' component={sigup} />
    </div>
)

export default BaseRouter;
