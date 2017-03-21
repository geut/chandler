

import React from 'react';
import { StyleSheet, css } from 'aphrodite';

const Dragbar = ({ title }) => (
  <div className={css(dragbar)} >
    {
      title &&
      title
    }
  </div>
)

export default Dragbar;

const { dragbar } = StyleSheet.create({
  dragbar: {
    height: '36px',
    lineHeight: '36px',
    fontSize: '14px',
    fontWeight: 300,
    backgroundColor: '#fff',
    textAlign: 'center',
    '-webkit-app-region': 'drag'
  }
})
