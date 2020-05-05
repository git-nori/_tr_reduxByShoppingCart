import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import CommonHeader from '../components/CommonHeader'
import ItemListPage from '../features/itemList/ItemListPage'
import CartPage from '../features/cart/CartPage'

function App () {
  return (
    <div className="App">
      <Router>
        <CommonHeader />
        <Switch>
          <Route exact path="/" component={ItemListPage} />
          <Route exact path="/cart" component={CartPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
