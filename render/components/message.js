
import React from 'react';
import { StyleSheet, css } from 'aphrodite';

const Message = ({ message, type = 'error'}) => {

  const { container, animation } = styles;
  const kind = styles[`${type}Msg`];

  return (
    message &&
    <div className={css(kind, container, animation)}>
      {message}
    </div>
  );
}

export default Message;

const fadeIn = {
  from: { opacity: 0 },
  to: {opacity: 1}
}

const fadeOut = {
  from: { opacity: 1 },
  to: {opacity: 0}
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 10,
    right: 10,
    padding: 25,
    color: '#404040',
    fontWeight: 300,
    borderStyle: `solid`,
    borderWidth: '1px 1px 1px 10px'
  },
  errorMsg: {
    borderColor: 'red'
  },
  animation: {
    animationName: [fadeIn,fadeOut],
    animationDuration: '2s, 3s',
    animationDelay: '0s, 5s',
    animationFillMode: 'forwards'
  }
});
