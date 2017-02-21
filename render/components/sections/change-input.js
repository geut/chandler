
import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';

const kinds = [
  { text: 'Added', value: 'added' },
  { text: 'Changed', value: 'changed' },
  { text: 'Fixed', value: 'fixed' },
  { text: 'Removed', value: 'removed' },
  { text: 'Deprecated', value: 'deprecated' },
  { text: 'Security', value: 'security' }
]

export default class ChangeInput extends Component {

  initialState = {
    text: '',
    selectedKind: 'added'
  }

  state = {
    ...this.initialState
  }

  resetState = () => {
    const { initialState } = this;
    this.setState( initialState );
  }

  handleSave = (e) => {
    const { onSave, kind } = this.props;
    const { text, selectedKind } = this.state;
    onSave(kind !== 'any' ?  kind : selectedKind, text);
    this.resetState();
  }

  handleCancel = (e) => {
    const { onCancel } = this.props;
    onCancel();
    this.resetState();
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

    const { container, actions, input, options } = styles;
    const isOpen = (editing === kind);
    return (
      <div>
      {
        isOpen &&
        <div className={css(container)} >
          {
            kind === 'any' &&
          <div>
            <select
              className={css(options)}
              value={selectedKind}
              onChange={this.handleKindChange}>
              { kinds.map(({text, value})=> <option key={value} value={value}>{text}</option>) }
            </select>
          </div>
          }
          <div>
            <textarea
              type="text"
              className={css(input)}
              onChange={this.handleChange}
              rows="10"
              value={text}
            />
          </div>
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
  container: {
    position: 'relative',
    background: '#f9f9f9',
    padding: '20px 20px',
    margin: '-10px -20px 5px -20px',
    boxShadow: 'inset 0 0 2px silver',
    borderTop: '1px solid silver',
    ':after': {
      content: '" "',
      position: 'absolute',
      top: -2,
      borderRight: '10px solid transparent',
      borderLeft: '10px solid transparent',
      borderTop: '10px solid white'
    },
    ':before': {
      content: '" "',
      position: 'absolute',
      top: 0,
      borderRight: '10px solid transparent',
      borderLeft: '10px solid transparent',
      borderTop: '10px solid silver'
    }

  },
  input: {
    ':focus':{
      background: '#fefefe',
    },
    background: '#f0f0f0',
    width: '100%'
  },
  options: {
    width: '100%'
  }
});
