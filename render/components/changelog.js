
import React from 'react';
import Markdown from 'react-remarkable';
import { StyleSheet, css } from 'aphrodite';

const Changelog = ({ changelog }) => {
  const { container } = styles;

  return ( 
    changelog ? 
      <div className={css(container)}>
        <Markdown source={changelog} /> 
      </div>
    :
      <em>No Changelog found for this project</em>
    );
};

export default Changelog;

const styles = StyleSheet.create({
  container: {
    margin: '0 100px'
  }
});
 
