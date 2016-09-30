
import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite'; 

export default class Header extends Component {
  
  render() {
    const { project } = this.props;
    const { lighter } = styles;
    
    const { name, hasChagelog } = project;
  
    return (
      <header>
        <h1>Chandler <span className={css(lighter)}> {name}</span></h1>
      </header>
    );
  }
};

const styles = StyleSheet.create({
  lighter: {
    fontWeight: 100
  }
});