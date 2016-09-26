
import React, { Component } from 'react';

import Header from './header';

export default class Main extends Component {
  render() {
    return (
      <section>
        <Header project="test"/>
        <form>
          <select value="added">
            <option value="added" >added</option>
            <option value="fixed">fixed</option>
            <option value="removed">removed</option>
          </select>
          <input type="text"></input>
        </form>
      </section>
    );
  }
}
