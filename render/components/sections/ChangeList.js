
import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';

export default class ChangeList extends Component {

  state = {
    text: ''
  }

  handleSave = (e) => {
    const { onSave } = this.props;
    const { text } = this.state;
    const { kind } = this.props;
    onSave(kind, text);
    this.setState({ text: '' });
  }

  handleCancel = (e) => {
    const { onCancel } = this.props;
    onCancel();
    this.setState({ text: '' });
  }

  handleChange = (e) => {
    this.setState({text: e.target.value})
  }

  render() {
    const { kind, editing, children } = this.props;
    const { text } = this.state;
    const { changeList, actions } = styles;

    return (
      <div className={css(changeList)}>
        <div hidden={editing !== kind }>
          <input type="text"
            onChange={this.handleChange}
            value={text}
          />
          <div className={css(actions)}>
            <button type="button" onClick={this.handleSave}>Add</button>
            <button type="button" onClick={this.handleCancel}>Cancel</button>
          </div>
        </div>
        {children}
      </div>
    );

  }
}

const styles = StyleSheet.create({
  changeList: {

  },
  actions: {

  }
})
