import React from 'react';
import 'antd/dist/antd.css';
import CustomLayout from './containers/Layout';
import NelayanList from './containers/NelayanListView';

function App() {
  return (
    <div className="App">
        <CustomLayout>
          <NelayanList>
          
          </NelayanList>
        </CustomLayout>
    </div>
  );
}

export default App;
