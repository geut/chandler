
import React from  'react';

const ChangeHeader = ({ kind, markEditing, children }) => {
  const className = `change-header change-header-${kind}`;
  const handler = (e) => (markEditing(e, kind)); //wrap action creator to bind kind parameter

  return (
    <div className={className}>
      {children}
      <button type="button" onClick={handler}>+</button>
    </div>
  );
}

export default ChangeHeader;
