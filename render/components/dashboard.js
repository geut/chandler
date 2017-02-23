
import React from 'react';
import { StyleSheet, css } from 'aphrodite';


const Dashboard = ({onOpenProject}) => {
  const { container, header, title, headline, actions, button } = styles;
  return (
    <div className={css(container)}>
      <div className={css(header)}>
        <div className={css(title)}>Chandler</div>
        <div className={css(headline)}>Changelog Handler &amp; Helper</div>
      </div>
      <div className={css(actions)}>
        <button className={css(button)} type="button" onClick={onOpenProject}>Open Project</button>
      </div>
    </div>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  container: {
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center'
  },
  header: {
    flex: '2 0 0',
    textAlign: 'right',
    background: 'gray',
    padding: 15
  },
  title: {
    fontSize: '72px',
    color: '#e3e3e3'
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
    fontSize: 14
  }
});
