
import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, css } from 'aphrodite';

import ChangelogMD from '../components/changelog-md';
import { addChange } from '../actions';

const Editor = ({ mdast, path, addChange }) => {
  const { container, content, actions, action } = styles;

  return (
    <div className={css(container)}>

      <div className={css(content)}>
        <ChangelogMD mdast={mdast} onAddChange={addChange} path={path}/>
      </div>

      <div className={css(actions)}>
        <button type="button" className={css(action)}> <i className="fa fa-folder-open-o"/>Release</button>
      </div>
  </div>
  );
}

const mapStateToProps = ({ project }) => ({ path: project.path });

export default connect(mapStateToProps, { addChange })(Editor);


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
