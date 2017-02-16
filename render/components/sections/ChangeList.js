
import React from 'react';
import { StyleSheet, css } from 'aphrodite';

const ChangeList = ({ kind, editing, children }) => {

  const { changeList, actions } = styles;

  return (
    <div className={css(changeList)}>
      <div hidden={editing !== kind }>
        <input type="text"  />
        <div className={css(actions)}>
          <button type="button">Add</button>
          <button type="button">Cancel</button>
        </div>
      </div>
      {children}
    </div>
  );
}

export default ChangeList;

const styles = StyleSheet.create({
  changeList: {

  },
  actions: {

  }
})
