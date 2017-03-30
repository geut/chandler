
import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';
import ReactRemark from 'react-remark';

import Button from '../widgets/button';
import Tab, { TabItem } from '../widgets/tab';

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


  wrapPreview = (text) => {
    return text
      .split('\n')
      .map((line, idx)=> ((idx === 0) ? `- ${line}` : `  ${line}`) )
      .join('\n');
  }

  render() {
    const { editing, kind } = this.props;
    const { text, selectedKind } = this.state;
    const { modal, container, positionAny, input, field, options } = styles;
    const isOpen = (editing === kind);

    return (
      isOpen &&
      <div>
        <div className={css(modal)} onClick={this.handleCancel}></div>
        <div className={css(container, kind === 'any' && positionAny)} >
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
          <Tab>
            <TabItem title="Edit" className={css(input)}>
              <textarea
                autoFocus
                type="text"
                className={css(field)}
                onChange={this.handleChange}
                value={text}
              />
            </TabItem>
            <TabItem title="Preview" className={css(input)} disabled={!text}>
              <ReactRemark source={this.wrapPreview(text)} className="markdown-body preview"/>
            </TabItem>
          </Tab>
          <div>
            <Button ui="action" onClick={this.handleSave} disabled={!text}>Add</Button>
            <Button onClick={this.handleCancel}>Cancel</Button>
          </div>
        </div>
      </div>
    )
  }
}

const styles = StyleSheet.create({
  modal: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0
  },
  positionAny: {
    margin: '-20px -20px 5px -20px'
  },
  container: {
    position: 'relative',

    margin: '-10px -20px 10px -52px',

    background: '#f9f9f9',
    padding: '20px 20px',
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
    height: 150,
    overflow: 'auto'
  },
  field: {
    ':focus':{
      background: '#fefefe',
    },
    background: '#f0f0f0',
    width: '100%',
    height: '95%',
    border: '1px solid #e3e3e3',
    fontSize: '14px'
  },
  options: {
    width: '100%',
    fontSize: '16px',
    marginBottom: '10px'
  }
});
