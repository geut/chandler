
import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite'; 

export default class Header extends Component {
  
  render() {
    const { project } = this.props;
    const { toolbar, lighter, title } = styles;

    const { name, path, version } = project;
  
    return (
      <div className={css(toolbar)}>
        <div className={css(title)}>
          <i className="fa fa-folder-open-o"/> {name} <span className={css(lighter)}> v{version}</span>            
        </div>
      </div>
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
    position: 'relative',
    background: '#f0f0f0'
  },
  title: {
    fontSize: 22,
    color: '#333',
    fontWeight: 600,
    padding: 15
  }
  
});