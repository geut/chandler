
import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite'; 

export default class Header extends Component {
  
  render() {
    const { project } = this.props;
    const { toolbar, lighter, folder } = styles;

    const { name, path, version } = project;
  
    return (
      <header className={css(toolbar)}>
      { 
        name ?
        <h1>
          {name} <span className={css(lighter)}> v{version}</span>            
        </h1>
        :
        <em>No Project Selected</em> 
      }
      { 
        path ?
        <p className={css(folder)}>
          <i className="fa fa-folder-open-o"/>{path}
        </p> 
        : 
        <span /> 
      }
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
    minHeight: 60,
    position: 'relative'
  },
  folder: {
    fontSize: 12,
    position: 'absolute',
    top: -25,
    left: 5,
    color: '#333',
    fontWeight: 200    
  }
  
});