
import React from 'react';
import Markdown from 'react-remarkable';
import { StyleSheet, css } from 'aphrodite';

const InitChangelog = ({  }) => {
  const { content, title, actions } = styles;

  return ( 
      <div className={css(content)}>
        <div className={css(title)}>No Changelog found for this project</div>
        <div className={css(actions)}>
          <button type="button">Initialize</button> 
        </div>
      </div>
    );
};

export default InitChangelog;

const styles = StyleSheet.create({
  content: {
    height: '100vh',

    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center'
  },
 title: {
    flex: '1 0 0',

    display: 'flex',
    alignItems: 'flex-end',

    fontSize: 22,
    color: '#333',
    fontWeight: 600,
    padding: 15
  },
  actions: {
    flex: '2 0 0',

    textAlign: 'right',
    padding: 15
  }});
 
