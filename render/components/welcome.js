
import React from 'react';
import { StyleSheet, css } from 'aphrodite'; 

const Welcome = () => {  
  const { container, message, action } = styles;

  return (
    <div className={css(container)}>
      <h1 className={css(message)}>No project open.</h1>
      <h2 className={css(action)}>Please select a project...</h2>
    </div>    
  )
}

export default Welcome;

const styles = StyleSheet.create({
  container: {
    height: '100vh'    
  },
  message: {
    fontSize: 32
  },
  action: {
    fontSize: 18,
    fontWeight: 200,
    color: '#212121',    
  }
});