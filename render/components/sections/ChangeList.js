
import React from 'react';

const ChangeList = ({ value, isEditing, children }) => {
  return (
    <div className="ChangeList">
      <input type="text" hidden={!isEditing} />
      {children}
    </div>
  );
}

export default ChangeList;
