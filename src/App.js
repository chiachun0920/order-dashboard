import React from 'react';
import { Panel, OrderList } from './components';
import * as ORDER from './constants/order';
import { getProgress } from './utilities/order';
import { useOrders } from './hooks/useOrders';

function App() {
  const { orders, isLoading } = useOrders();
  const inProgressOrders = orders.filter(item => getProgress(item.status) === ORDER.INPROGRESS);
  const doneOrders = orders.filter(item => getProgress(item.status) === ORDER.DONE);
  return (
    <div className="App">
      {isLoading ? 'loading...' : (
        <React.Fragment>
          <Panel title={ORDER.INPROGRESS}>
            <OrderList list={inProgressOrders} />
          </Panel>
          <Panel title={ORDER.DONE}>
            <OrderList list={doneOrders} />
          </Panel>
        </React.Fragment>
      )}
    </div>
  );
}

export default App;
