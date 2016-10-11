
import React from 'react';
import Markdown from 'react-remarkable';
import { StyleSheet, css } from 'aphrodite';

const Changelog = ({ changelog }) => {
  const { content, no_changelog } = styles;

  return ( 
    changelog ? 
      <div className={css(content)}>
        <Markdown source={changelog} />
      </div>
    :
      <div className={css(no_changelog)}>No Changelog found for this project</div>
    );
};

export default Changelog;

const styles = StyleSheet.create({
  content: {
    padding: '0 100px'
  },
  no_changelog: {
    margin: 100
  }
});
 
