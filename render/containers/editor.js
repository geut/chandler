
import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, css } from 'aphrodite';

import ChangelogMD from '../components/changelog-md';
import { addChange } from '../actions';

const Editor = ({ mdast, path, addChange }) => {
  const { container, content } = styles;

  return (
    <div className={css(container)}>

      <div className={css(content)}>
        <ChangelogMD mdast={mdast} onAddChange={addChange} path={path}/>
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
      background: '#f9f9f9'
    },
    content: {
      flex: '1 0 0',
      overflowY: 'scroll',
      padding: '10px 20px 20px'
    }
});
