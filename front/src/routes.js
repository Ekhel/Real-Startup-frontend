import React from 'react';
import { Route } from 'react-router-dom';

import ProdukList from './containers/ProdukListView';

const BaseRouter = () => (
    <div>
        <Route exact path='/' component={ProdukList} />
    </div>
)

export default BaseRouter;
