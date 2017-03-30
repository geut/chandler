
import React from 'react';
import { StyleSheet, css } from 'aphrodite';

const Button = ({ ui, className="", children, ...props }) => {
  const { button } = styles;
  const uiStyle = styles[ui];

  return (
    <button type="button" className={`${css(button, ui && uiStyle)} ${className}`} {...props} >
      {children}
    </button>
  );
}

export default Button;

const styles = StyleSheet.create({
  button: {
    margin: '5px 2px',
    padding: 8,
    minWidth: 100,
    background: '#eee',
    ':hover': {
        background: '#f1f1f1'
    },
    ':active': {
        background: '#ccc'
    },
    ':disabled': {
        background: '#e3e3e3',
        color: '#ccc'
    }
  },
  action: {
    background: '#3c3',
    color: 'white',
    borderColor: '#5c5',
    ':hover': {
        background: '#4e4'
    },
    ':active': {
        background: '#5c5'
    },
    ':disabled': {
        background: '#2b2',
        color: '#e3e3e3'
    }
  }

});
