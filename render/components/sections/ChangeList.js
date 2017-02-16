
import React from 'react';

const ChangeList = ({ kind, editing, children }) => {
  const className = `change-list changelist-${kind}`;
  return (
    <div className={className}>
      <input type="text" hidden={editing !== kind } />
      {children}
    </div>
  );
}

export default ChangeList;
