
import React, { Component } from 'react';
import toHAST from 'mdast-util-to-hast';
// import wrapper from 'hast-to-hyperscript';

import hastToReact from '../utils/hast-to-react';
import UnReleasedHeader from './sections/UnReleasedHeader';
import ChangeHeader from './sections/ChangeHeader';
import ChangeList from './sections/ChangeList';

const components = {
  UnReleasedHeader,
  ChangeHeader,
  ChangeList
}

const h = (name, props, children) => {
  return React.createElement(components[name] || name, props, children);
}

const hastNodeUnrelased = (node) => {
  return {
    type: 'element',
    tagName: 'UnReleasedHeader',
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
    properties: {...props},
    tagName: 'ChangeList',
    children: [toHAST(node)]
  }
}

const toHastNodes = (root, { markEditing, editing }) => {
  let depth;
  let unrelease = false;
  const children = [];
  let kind;

  for (const node of root.children) {
    const { type } = node;
    const { identifier } = node.children[0];

    if (type === 'heading') { // headers

      if (identifier === 'unreleased') { // if unreleased header, mark it to add subsections
        children.push(hastNodeUnrelased(node));

        unrelease = true;
        depth = node.depth;
        continue;
      }

      if (unrelease) {
        if (depth === node.depth) { // if got a same level header then close unrelease section
          unrelease = false;
        } else {
          kind = node.children[0].value.toLowerCase();
          children.push(hastNodeChangeHeader(node, { kind, markEditing })); //add change headers
          continue;
        }
      }
    }

    if (unrelease && type === 'list') {
      children.push(hastNodeChangeList(node, { editing, kind })); // changes list
    } else {
      children.push(toHAST(node));
    }
  }

  return  {
    type: 'element',
    tagName: 'div',
    properties: {className: 'markdown-md'},
    children
  };
}

// const ChangelogMD = ({ mdast, markEditing, editing }) => {
// console.log(mdast)
//   return hastToReact(h, toHastNodes(mdast, { markEditing, editing }));
// }



export default class ChangelogMD extends Component {

  constructor() {
    super();
    this.showEditingHandler = this.showEditingHandler.bind(this);
    this.state = {
      editing: null
    }
  }

  showEditingHandler (kind) {
    return (e) => this.setState({editing: kind});
  }

  render() {
    const { showEditingHandler } = this;
    const { mdast } = this.props;
    const { editing } = this.state;

    return hastToReact(h, toHastNodes(mdast, { markEditing: showEditingHandler, editing }));
  }
}
