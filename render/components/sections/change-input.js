
import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';

const kinds = [
  { text: 'Added', value: 'added' },
  { text: 'Changed', value: 'changed' },
  { text: 'Fixed', value: 'fixed' }
]

export default class ChangeInput extends Component {

  state = {
    text: '',
    selectedKind: 'added'
  }

  handleSave = (e) => {
    const { onSave, kind } = this.props;
    const { text, selectedKind } = this.state;
    onSave(kind !== 'any' ?  kind : selectedKind, text);
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

  handleKindChange = (e) => {
    this.setState({selectedKind: e.target.value});
  }

  render() {
    const { editing, kind } = this.props;
    const { text, selectedKind } = this.state;

    const { input, actions, inputText, options } = styles;
    const isOpen = editing === kind;
    return (
      <div>
      {
        isOpen &&
        <div className={css(input)} >
          <input
            type="text"
            className={css(inputText)}
            onChange={this.handleChange}
            value={text}
          />
          {
            kind === 'any' &&
            <select
              className={css(inputText, options)}
              value={selectedKind}
              onChange={this.handleKindChange}>
              { kinds.map(({text, value})=> <option key={value} value={value}>{text}</option>) }
            </select>
          }
          <div className={css(actions)}>
            <button type="button" onClick={this.handleSave}>Add</button>
            <button type="button" onClick={this.handleCancel}>Cancel</button>
          </div>
        </div>
      }
      </div>
    )
  }
}

const styles = StyleSheet.create({
  actions: {

  },
  input: {
    position: 'relative',
    background: '#fefefe',
    display: 'inline-block',
    border: '1px solid #ddd',
    boxShadow: '1px 1px 3px black',
    padding: '10px 20px',
    borderRadius: 5
  },
  options: {
    marginLeft: 5
  },
  inputText: {
    fontSize: 16,
    border: 'none',
    borderBottom: '1px solid #e0e0e0'
  }
})
