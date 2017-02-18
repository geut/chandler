
import React, { Component } from 'react';
import toHAST from 'mdast-util-to-hast';
import { StyleSheet, css } from 'aphrodite';

import hastToReact from '../utils/hast-to-react';
import UnReleasedHeader from './sections/unreleased-header';
import ChangeHeader from './sections/change-header';
import ChangeList from './sections/change-list';
import ChangeInput from './sections/change-input';

const components = {
  UnReleasedHeader,
  ChangeHeader,
  ChangeList,
  ChangeInput
}

const h = (name, props, children) => {
  return React.createElement(components[name] || name, props, children);
}

const hastNodeUnrelased = (node, props) => {
  return {
    type: 'element',
    tagName: 'UnReleasedHeader',
    properties: {...props},
    children: [toHAST(node)]
  }
}

const hastNodeChangeHeader = (node, props) => {
  return {
    type: 'element',
    tagName: 'ChangeHeader',
    properties: { ...props },
    children: [toHAST(node)]
  }
}

const hastNodeChangeList = (node, props) => {
  return {
    type: 'element',
    tagName: 'ChangeList',
    properties: {...props},
    children: [toHAST(node)]
  }
}

const toHastNodes = (root, { onEdit, editing, onSaveChange, onCancelChange }) => {
  let depth;
  let unrelease = false;
  const children = [];
  const { markdownMD, mask, hidden } = styles;
  let kind;

  for (const node of root.children) {
    const { type } = node;
    const { identifier } = node.children[0];

    if (type === 'heading') { // headers

      if (identifier === 'unreleased') { // if unreleased header, mark it to add subsections
        children.push(hastNodeUnrelased(node, { onEdit }))
        children.push(
          {
            type: 'element',
            tagName: 'ChangeInput',
            properties: { kind: 'any', editing, onSave: onSaveChange, onCancel: onCancelChange  }
          }
        );

        unrelease = true;
        depth = node.depth;
        continue;
      }

      if (unrelease) {
        if (depth === node.depth) { // if got a same level header then close unrelease section
          unrelease = false;
        } else {
          kind = node.children[0].value.toLowerCase();
          children.push(hastNodeChangeHeader(node, { kind, onEdit  })); //add change headers
          continue;
        }
      }
    }

    if (unrelease && type === 'list') {
      children.push(hastNodeChangeList(node, { editing, kind, onSave: onSaveChange, onCancel: onCancelChange })); // changes list
    } else {
      children.push(toHAST(node));
    }
  }

  return  {
    type: 'element',
    tagName: 'div',
    properties: {className: [css(markdownMD), 'markdown-body'] },
    children: [
      {
        type: 'element',
        tagName: 'div',
        properties: {className: css(editing ? mask : hidden) }
      },
      ...children
    ]
  };
}


export default class ChangelogMD extends Component {

  state = {
    editing: null
  }

  onEdit = (kind) => {
    return (e) => this.setState({editing: kind});
  }

  onSaveChange = (kind, text) => {
    const { onAddChange, path } = this.props;
    onAddChange(kind, text, path);
    this.setState({ editing: null });
  }

  onCancelChange = () => {
      this.setState({ editing: null });
  }

  render() {
    const { onEdit, onSaveChange, onCancelChange } = this;
    const { mdast } = this.props;
    const { editing } = this.state;

    return hastToReact(h, toHastNodes(mdast, { onEdit, onSaveChange, onCancelChange, editing }));
  }
}


const styles = StyleSheet.create({
  mask: {
    position: 'absolute',
    background: '#181818',
    opacity: .4,
    top: 0,
    bottom: 0,
    left: 0,
    right: 0
  },
  hidden: {
    display: 'none'
  },
  markdownMD: {
    position: 'relative',
    padding: '0 20px',
    background: 'white',
    border: '1px solid #f0f0f0'
  }
})
