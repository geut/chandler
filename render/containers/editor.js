
import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, css } from 'aphrodite';

import ChangelogMD from '../components/changelog-md';
import { markEditing } from '../actions';

const Editor = ({ mdast, markEditing, editing }) => {
  const { container, content, actions, action } = styles;

  return (
    <div className={css(container)}>

      <div className={css(content)}>
        <ChangelogMD mdast={mdast} markEditing={markEditing} editing={editing}/>
      </div>

      <div className={css(actions)}>
        <button type="button" className={css(action)}> <i className="fa fa-folder-open-o"/>Changes</button>
        <button type="button" className={css(action)}> <i className="fa fa-folder-open-o"/>Release</button>
      </div>
  </div>
  );
}

const mapStateToProps = ({ editor }) => ({
  editing: editor.editing
});

export default connect(mapStateToProps, { markEditing })(Editor);


const styles = StyleSheet.create({
    container: {
      display: 'flex',
      alignItems: 'stretch',
      flexDirection: 'row',
      justifyContent: 'center',
      flex: '1',

      background: '#f0f0f0'
    },
    content: {
      flex: '1 0 0',

      background: '#fefefe',
      overflowY: 'scroll',
      marginLeft: '20px',
      padding: '20px'
    },
    actions: {
      display: 'flex',
      alignItems: 'stretch',
      flexDirection: 'column',
      justifyContent: 'flex-start',
      flex: '0 0',
      padding: '10px'
    },
    action: {
      margin: '2px 5px'
    }
});
