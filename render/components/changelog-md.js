
import React from 'react';
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

const hastNodeChangeHeader = (node) => {
  return {
    type: 'element',
    tagName: 'ChangeHeader',
    properties: { onAdd: ()=>console.log('ye') },
    children: [toHAST(node)]
  }
}

const hastNodeChangeList = (node) => {
  return {
    type: 'element',
    tagName: 'ChangeList',
    children: [toHAST(node)]
  }
}

const toHastNodes = (root) => {
  let depth;
  let unrelease = false;
  const children = [];

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
          children.push(hastNodeChangeHeader(node)); //add change headers
          continue;
        }
      }
    }

    if (unrelease && type === 'list') {
      children.push(hastNodeChangeList(node)); // changes list
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

const ChangelogMD = ({ mdast }) => {
  return hastToReact(h, toHastNodes(mdast));
}

export default ChangelogMD;
