import React, { useState, useEffect } from 'react';
import { Panel, OrderList } from './components';
import * as ORDER from './constants/order';
import { getProgress } from './utilities/order';
import to from './utilities/to';
import { getOrders } from './streams/order';

function App() {
  const [ orders, setOrders ] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      let [ err, orders ] = await to(getOrders());
      if (err) {
        // do something error handle stuff
        return;
      }
      setOrders(orders.orders);
    };
    fetchData();
  }, []);
  const inProgressOrders = orders.filter(item => getProgress(item.status) === ORDER.INPROGRESS);
  const doneOrders = orders.filter(item => getProgress(item.status) === ORDER.DONE);
  return (
    <div className="App">
      <Panel title={ORDER.INPROGRESS}>
        <OrderList list={inProgressOrders} />
      </Panel>
      <Panel title={ORDER.DONE}>
        <OrderList list={doneOrders} />
      </Panel>
    </div>
  );
}

export default App;
