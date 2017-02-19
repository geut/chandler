
import React from 'react';
import { StyleSheet, css } from 'aphrodite';

const UnReleasedHeader = ({ editing, onEdit, children }) => {
  const kind = 'any';
  const handler = onEdit(kind);

  const { unreleaseHeader, action, selected } = styles;

  return (
    <div className={css(unreleaseHeader)}>
      {children}
      {
        editing !== kind &&
        <button className={css(action)} type="button" onClick={handler}>+</button>
      }
    </div>
  );
}

export default UnReleasedHeader;

const styles = StyleSheet.create({
  unreleaseHeader: {
    display: 'flex',
    alignItems: 'center'
  },
  action: {
    margin: '5px 0 0 10px',
    fontSize: 16
  }
});

