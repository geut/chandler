
import React from 'react';

import ChangeInput from './change-input';

const ChangeList = ({ kind, editing, onSave, onCancel, children }) => {
  return (
    <ul>
      <ChangeInput onCancel={onCancel} onSave={onSave} kind={kind} editing={editing} />
      {children}
    </ul>
  );

};

export default ChangeList;
