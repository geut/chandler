
import React from  'react';

const ChangeHeader = ({ onAdd, children }) => {
  return (<div className="ChangeHeader">{children}<button type="button" onClick={onAdd}>+</button></div>);
}

export default ChangeHeader;
