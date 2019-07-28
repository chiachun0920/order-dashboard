import React from 'react';
import classNames from 'classnames';
import moment from 'moment';
import { getAssetsPath } from '../utilities/assets';
import { getProgress } from '../utilities/order';
import * as ASSET_TYPE from '../constants/assetType';
import * as ORDER_STATUS from '../constants/orderStatus';

import './OrderItem.scss';

const OrderItem = props => {
  const { item } = props;

  const isInProgress = getProgress(item.status) === ORDER_STATUS.INPROGRESS;
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

