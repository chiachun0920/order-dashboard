import React from 'react';
import classNames from 'classnames';
import moment from 'moment';
import { getAssetsPath } from '../utilities/assets';
import * as ASSET_TYPE from '../constants/assetType';
import * as ORDER_STATUS from '../constants/orderStatus';

import './OrderItem.scss';

const getProgress = status => {
  switch (status) {
    default:
      throw new Error('error/invalid-status');
    case ORDER_STATUS.CANCELED:
    case ORDER_STATUS.DELIVERED:
      return 'done';
    case ORDER_STATUS.ESTABLISHED:
    case ORDER_STATUS.PROCESSING:
    case ORDER_STATUS.SHIPPED:
      return 'inprogress';
  }
}

const OrderItem = props => {
  const { item } = props;
  const isInProgress = getProgress(item.status) === 'inprogress';
  const logo = isInProgress ? 'treemall' : 'treemall_dark';

  return (
    <div className="order-item">
      <img className="logo" src={getAssetsPath(ASSET_TYPE.IMAGE, logo)} alt="logo" />
      <div className="content">
        <div className="description">
          <div className={classNames('status', isInProgress ? 'inprogress' : 'done')}>{item.status}</div>
          {isInProgress && <div className="date">預計出貨：{moment(item.date).format('YYYY-MM-DD')}</div>}
        </div>
        <div className="name">{item.name}</div>
      </div>
      <i className="fa fa-chevron-right icon" />
    </div>
  );
}

export default OrderItem;

