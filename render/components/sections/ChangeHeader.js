
import React from  'react';
import { StyleSheet, css } from 'aphrodite';


const ChangeHeader = ({ kind, markEditing, children }) => {

  // const handler = (e) => (markEditing(e, kind)); //wrap action creator to bind kind parameter
  const handler = markEditing(kind);
  const { changeHeader, action } = styles;

  return (
    <div className={css(changeHeader)}>
      {children}
      <button className={css(action)} type="button" onClick={handler}>+</button>
    </div>
  );
}

export default ChangeHeader;

const styles = StyleSheet.create({
  'changeHeader': {
    display: 'flex',
    alignItems: 'center'
  },
  action: {
    marginLeft: 10
  }
})
