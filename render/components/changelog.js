
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
    ...node,
    tagName: 'UnReleasedHeader',
    properties: { ...props },

  }
}

const hastNodeChangeHeader = (node, props) => {
  return {
    ...node,
    tagName: 'ChangeHeader',
    properties: { ...props }
  }
}

const hastNodeChangeList = (node, props) => {
  return {
    ...node,
    tagName: 'ChangeList',
    properties: { ...props }
  }
}

const toHastNodes = (mdast, { onEdit, editing, onSaveChange, onCancelChange }) => {
  const root = toHAST(mdast);
  const children = [];
  const { markdown, mask, hidden } = styles;
  const markdownBodyCls = 'markdown-body';
  let unrelease = false;
  let unrelase_found  = false;
  let kind;

  for (const node of root.children) {
    const { tagName } = node;

    if (tagName === 'h2') { // release headers

      if (!unrelase_found) { // if unreleased header, mark it to add subsections

        children.push(
          hastNodeUnrelased(node, { editing, onEdit }),
          {
            type: 'element',
            tagName: 'ChangeInput',
            properties: { kind: 'any', editing, onSave: onSaveChange, onCancel: onCancelChange  }
          }
        );

        unrelease = unrelase_found = true;
        continue;
      }

      if (unrelease) {
          unrelease = false;
      }
    }

    if (unrelease) {
      switch(tagName) {
        case 'h3':
          kind = node.children[0].value.toLowerCase();
          children.push(hastNodeChangeHeader(node, { kind, editing, onEdit })); //add change headers
          break;
        case 'ul':
          children.push(hastNodeChangeList(node, { kind, editing, onSave: onSaveChange, onCancel: onCancelChange })); // changes list
          break;
        default:
          children.push(node);
      }
    } else {
      children.push(node);
    }
  }

  return  {
    type: 'element',
    tagName: 'div',
    properties: { className: `${css(markdown)} ${markdownBodyCls}` },
    children
  };
}


export default class Changelog extends Component {

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
    const { container, content } = styles;

    return (
      <div className={css(container)}>
        <div className={css(content)}>
        {
          hastToReact(h, toHastNodes(mdast, { onEdit, onSaveChange, onCancelChange, editing }))
        }
        </div>
      </div>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'stretch',
    flexDirection: 'row',
    justifyContent: 'center',
    flex: '1',
    background: '#f9f9f9'
  },
  content: {
    flex: '1 0 0',
    overflowY: 'scroll',
    padding: '10px 20px 20px'
  },
  markdown: {
    position: 'relative',
    padding: '20px 20px',
    background: 'white',
    border: '1px solid orange'
  }
})
