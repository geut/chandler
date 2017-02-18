
import React from 'react';
import { StyleSheet, css } from 'aphrodite';

const UnReleasedHeader = ({ children, onEdit }) => {
  const handler = onEdit('any');

  const { unreleaseHeader, action } = styles;

  return (
    <div className={css(unreleaseHeader)}>
      {children}
      <button className={css(action)} type="button" onClick={handler}>+</button>
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

