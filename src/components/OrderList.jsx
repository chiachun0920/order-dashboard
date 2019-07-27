import React from 'react';
import OrderItem from './OrderItem.jsx';

const OrderList = props => {
  const { list } = props;
  return (
    <div className="list">
      {list.map((item, idx) => <OrderItem key={idx} item={item} />)}
    </div>
  );
}

export default OrderList;

