
import React from  'react';
import { StyleSheet, css } from 'aphrodite';


const ChangeHeader = ({ kind, onEdit, editing, children }) => {
  const handler = onEdit(kind);
  const { changeHeader, action } = styles;

  return (
    <h3 className={css(changeHeader)}>
      {children}
      {
        editing !== kind &&
        <button className={css(action)} type="button" onClick={handler}>+</button>
      }
    </h3>
  );
}

export default ChangeHeader;

const styles = StyleSheet.create({
  changeHeader: {
    display: 'flex',
    alignItems: 'center'
  },
  action: {
    margin: '0 10px',
    fontSize: 14
  }
})
