
import React from 'react';
import { StyleSheet, css } from 'aphrodite';

const OpenRecent = ({ recent, onOpenRecent, className }) => {

  const { container, title, list, item, path } = styles;

  return (
      <div className={className}>
        <div className={css(container)}>
          <div className={css(title)}>Open Recent...</div>
          <ul className={css(list)}>
          {
            recent.map((project, index) => {
              return (
                <li key={index} className={css(item)} onClick={(e) => onOpenRecent(project.path)}>
                  {project.name} <span className={css(path)}>{project.path}</span>
                </li>
              );
            }
            )
          }
          </ul>
        </div>
      </div>
  )
}

export default OpenRecent;

const styles = StyleSheet.create({
  container: {
    padding: 20
  },
  title: {
    fontWeight: 200,
    fontSize: '1.1em'
  },
  list: {
    paddingLeft: 20
  },
  item: {
    color: '#404040',
    listStyle: 'none',
    cursor: 'pointer'
  },
  path: {
    fontWeight: 100
  }
});
