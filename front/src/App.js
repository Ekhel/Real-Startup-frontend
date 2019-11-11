import React, { Component } from 'react';
import 'antd/dist/antd.css';

import CustomLayout from './containers/Layout';
import NelayanList from './containers/NelayanListView';

class App extends Component {
  render() {
    return (
        <div className="App">
            <CustomLayout>
                <NelayanList />
            </CustomLayout>
        </div> 
    );
  }
}

export default App;
