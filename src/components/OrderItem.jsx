import React from 'react';

const OrderItem = props => {
  const { item } = props;
  return (
    <div>OrderItem: {item.name}</div>
  );
}

export default OrderItem;
