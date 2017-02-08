
import React from 'react';
import { StyleSheet, css } from 'aphrodite'; 

const Header = (props) => {
  const { project, onCloseProject } = props;
  const { toolbar, lighter, title, actions } = styles;

  const { name, path, version } = project;

  return (
    <div className={css(toolbar)}>
      <div className={css(title)}>
        <i className="fa fa-folder-open-o"/> {name} <span className={css(lighter)}> v{version}</span>            
      </div>
      <div className={css(actions)}>
        <button type="button" onClick={onCloseProject}>Close</button>
      </div>
    </div>
  );
}

export default Header;

const styles = StyleSheet.create({
  lighter: {
    fontWeight: 100
  },
  toolbar: {
    borderBottom: '1px solid #ccc',
    minHeight: 60,
    position: 'relative',
    background: '#f0f0f0',

    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center'

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
    padding: 15
  }
  
});