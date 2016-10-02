
import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite'; 

export default class Header extends Component {
  
  render() {
    const { project } = this.props;
    const { lighter } = styles;    
    const { name } = project;
  
    const title = ( name ? 
      <span className={css(lighter)}> {name}</span> : <em>No Project</em>
    ) 

    return (
      <header>
        <h1>Chandler {title}            
        </h1>
      </header>
    );
  }
};

const styles = StyleSheet.create({
  lighter: {
    fontWeight: 100
  }
});