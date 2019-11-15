import React, { Component } from 'react';
import 'antd/dist/antd.css';

import CustomLayout from './containers/Layout';
import NelayanList from './containers/NelayanListView';
import ProdukList from './containers/ProdukListView';


class App extends Component {
  render() {
    return (
        <div className="App">
            <CustomLayout>
                <ProdukList></ProdukList>
            </CustomLayout>
        </div> 
    );
  }
}

export default App;
