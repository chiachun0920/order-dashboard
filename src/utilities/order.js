import * as ORDER_STATUS from '../constants/orderStatus';

export const getProgress = status => {
  switch (status) {
    default:
      throw new Error('error/invalid-status');
    case ORDER_STATUS.CANCELED:
    case ORDER_STATUS.DELIVERED:
      return ORDER_STATUS.DONE;
    case ORDER_STATUS.ESTABLISHED:
    case ORDER_STATUS.PROCESSING:
    case ORDER_STATUS.SHIPPED:
      return ORDER_STATUS.INPROGRESS;
  }
}
