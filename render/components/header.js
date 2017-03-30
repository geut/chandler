
import React from 'react';
import { StyleSheet, css } from 'aphrodite';

import Button from './widgets/button';

const Header = (props) => {
  const { project, onCloseProject } = props;
  const { toolbar, lighter, title, actions, action } = styles;

  const { name, path, version } = project;

  return (
    <div className={css(toolbar)}>
      <div className={css(title)}>
        <i className="fa fa-folder-open-o"/> {name} <span className={css(lighter)}> v{version}</span>
      </div>
      <div className={css(actions)}>
        <Button onClick={onCloseProject}>Close</Button>
      </div>
    </div>
  );
};

export default Header;

const styles = StyleSheet.create({
  lighter: {
    fontWeight: 100
  },
  toolbar: {
    borderTop: '2px solid orange',
    borderBottom: '1px solid #ccc',
    boxShadow: '0 0 4px #ccc',
    minHeight: 60,
    position: 'relative',
    background: '#f9f9f9',

    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',

    flex: 'none'

  },
  title: {
    flex: '4 0 0',

    fontSize: 22,
    color: '#333',
    fontWeight: 600,
    padding: 15
  },
  actions: {
    flex: '1 0 0',
    textAlign: 'right',
    padding: '0 20px'
  }
});
