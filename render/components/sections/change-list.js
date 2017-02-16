
import React from 'react';
import { StyleSheet, css } from 'aphrodite';

import ChangeInput from './change-input';

const ChangeList = ({ kind, editing, onSave, onCancel, children }) => {
  const { changeList, actions } = styles;

  return (
    <div className={css(changeList)}>
      <ChangeInput onCancel={onCancel} onSave={onSave} kind={kind} editing={editing} />
      {children}
    </div>
  );

};

export default ChangeList;

const styles = StyleSheet.create({
  changeList: {

  }
});
