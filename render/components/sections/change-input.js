
import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';

export default class ChangeInput extends Component {

  state = {
    text: ''
  }

  handleSave = (e) => {
    const { onSave, kind } = this.props;
    const { text } = this.state;
    onSave(kind, text);
    this.setState({ text: '' });
  }

  handleCancel = (e) => {
    const { onCancel } = this.props;
    onCancel();
    this.setState({ text: '' });
  }

  handleChange = (e) => {
    this.setState({text: e.target.value});
  }

  render() {
    const { editing, kind } = this.props;
    const { text } = this.state;

    const { actions } = styles;

    return (
      <div hidden={editing !== kind}>
        <input type="text"
          onChange={this.handleChange}
          value={text}
        />
        <div className={css(actions)}>
          <button type="button" onClick={this.handleSave}>Add</button>
          <button type="button" onClick={this.handleCancel}>Cancel</button>
        </div>
      </div>
    )
  }
}

const styles = StyleSheet.create({
  actions: {}
})
