import React from 'react';
import classNames from 'classnames';
import { formatTWDateString } from '../utilities/date';
import { getAssetsPath } from '../utilities/assets';
import { getProgress } from '../utilities/order';
import * as ASSET_TYPE from '../constants/assetType';
import * as ORDER from '../constants/order';

import './OrderItem.scss';

const OrderItem = props => {
  const { item } = props;

  const isInProgress = getProgress(item.status) === ORDER.INPROGRESS;
  const logo = isInProgress ? 'treemall' : 'treemall_dark';

  return (
    <div className="order-item">
      <img className="logo" src={getAssetsPath(ASSET_TYPE.IMAGE, logo)} alt="logo" />
      <div className="content">
        <div className="description">
          <div className={classNames('status', isInProgress ? 'inprogress' : 'done')}>{item.status}</div>
          {isInProgress && <div className="date">預計出貨：{formatTWDateString(item.date)}</div>}
        </div>
        <div className="name">{item.name}</div>
      </div>
      <i className="fa fa-chevron-right icon" />
    </div>
  );
}

export default OrderItem;

