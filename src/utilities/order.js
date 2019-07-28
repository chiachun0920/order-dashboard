import * as ORDER from '../constants/order';

export const getProgress = status => {
  switch (status) {
    default:
      throw new Error('error/invalid-status');
    case ORDER.CANCELED:
    case ORDER.DELIVERED:
      return ORDER.DONE;
    case ORDER.ESTABLISHED:
    case ORDER.PROCESSING:
    case ORDER.SHIPPED:
      return ORDER.INPROGRESS;
  }
}
