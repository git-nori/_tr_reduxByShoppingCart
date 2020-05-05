import React from 'react';

import CommonHeader from '../components/CommonHeader'
import ItemListPage from '../features/itemList/ItemListPage'

function App () {
  return (
    <div className="App">
      <CommonHeader />
      <ItemListPage />
    </div>
  );
}

export default App;
