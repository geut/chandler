
import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite'; 

export default class Header extends Component {
  
  render() {
    const { project } = this.props;
    const { lighter, toolbar } = styles;

    const { name, path, version } = project;
  
    return (
      <header className={css(toolbar)}>
      { 
        name ?
        <h1>
          {name} <span className={css(lighter)}> v{version}</span>            
        </h1>
        : <em>No Project Selected</em> 
       }
       { path ? <p><i className="fa fa-folder-open-o"/>{path}</p> : <span /> }
      </header>
    );
  }
};

const styles = StyleSheet.create({
  lighter: {
    fontWeight: 100
  },
  toolbar: {
    borderBottom: '1px solid #ccc',
    minHeight: 70
  }
  
});