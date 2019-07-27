import React, { useState, useEffect } from 'react';
import { Panel, OrderList } from './components';
import mockOrders from './mocks/orders.json';

function App() {
  const [ orders, setOrders ] = useState([]);

  useEffect(() => {
    setOrders(mockOrders.orders);
  }, []);

  return (
    <div className="App">
      <Panel>
        <OrderList list={orders} />
      </Panel>
    </div>
  );
}

export default App;
