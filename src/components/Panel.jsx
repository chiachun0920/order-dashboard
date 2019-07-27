import React from 'react';

const Panel = props => {
  const { children } = props;
  return (
    <div className="container">
     <div className="header">header</div>
     <div className="body">{children}</div>
    </div>
  );
}

export default Panel;
