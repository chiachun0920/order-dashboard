import { useState, useEffect } from 'react';
import to from '../utilities/to';
import { getOrders } from '../streams/order';

export const useOrders = () => {
  const [ orders, setOrders ] = useState([]);
  const [ isLoading, setIsLoading ] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      let [ err, orders ] = await to(getOrders());
      setIsLoading(false);
      if (err) {
        // do something error handle stuff
        return;
      }
      orders.orders.sort((a, b) => a.date >= b.date ? -1 : 1);
      setOrders(orders.orders);
    };
    fetchData();
  }, []);
  return { orders, isLoading };
}
