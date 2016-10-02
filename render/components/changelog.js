
import React from 'react';
import Markdown from 'react-remarkable';

const Changelog = ({ changelog }) => {

  return ( changelog ? 
    <Markdown source={changelog} /> :
    <em>No Changelog for this project</em>
  );
};

export default Changelog;