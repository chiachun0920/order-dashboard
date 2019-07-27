import React from 'react';
import './Panel.scss'

const Panel = props => {
  const { children, title } = props;
  return (
    <div className="panel">
     <div className="header">
       <div className="title">{title}</div>
     </div>
     <div className="body">{children}</div>
    </div>
  );
}

export default Panel;
