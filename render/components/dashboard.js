
import React from 'react';
import { StyleSheet, css } from 'aphrodite';

import OpenRecent from './open-recent';

const Dashboard = ({ onOpenProject, onOpenRecent, recent }) => {
  const {
    container,
    main, footer,
    header, title, headline, actions, button
  } = styles;

  const showRecent = !!(recent && recent.length);

  return (
    <div className={css(container)}>
      <div className={css(main)}>
        <div className={css(header)}>
          <div className={css(title)}>Chandler</div>
          <div className={css(headline)}>Changelog Handler &amp; Helper</div>
        </div>
        <div className={css(actions)}>
          <button className={css(button)} type="button" onClick={onOpenProject}>Open Project</button>
        </div>
      </div>
      <div className={css(footer)}>
      {
        showRecent &&
        <OpenRecent recent={recent} onOpenRecent={onOpenRecent} />
      }
      </div>
    </div>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  container: {
    height: '100vh',
    display: 'flex',
    alignItems: 'stretch',
    flexDirection: 'column'
  },
  main: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    flex: 3,
    paddingTop: '5vh'
  },
  footer: {
    alignItems: 'center',
    flex: 1,
    background: '#f0f0f0'
  },
  header: {
    flex: '2 0 0',
    textAlign: 'right',
    background: 'orange',
    padding: 15
  },
  title: {
    fontSize: '72px',
    color: '#f3f3f3'
  },
  headline: {
    fontSize: '32px',
    fontWeight: 200,
    color: '#212121'
  },
  actions: {
    flex: '1 0 0',
    textAlign: 'center'
  },
  button: {
    minWidth: '90%',
    minHeight: 50,
    fontSize: 14,
    background: '#e4e4e4'
  }
});
