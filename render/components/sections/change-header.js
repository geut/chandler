
import React from  'react';
import { StyleSheet, css } from 'aphrodite';


const ChangeHeader = ({ kind, onEdit, editing, children }) => {
  const handler = onEdit(kind);
  const { changeHeader, action } = styles;

  return (
    <div className={css(changeHeader)}>
      {children}
      {
        editing !== kind &&
        <button className={css(action)} type="button" onClick={handler}>+</button>
      }
    </div>
  );
}

export default ChangeHeader;

const styles = StyleSheet.create({
  changeHeader: {
    display: 'flex',
    alignItems: 'center'
  },
  action: {
    margin: '5px 0 0 10px',
    fontSize: 16
  }
})
