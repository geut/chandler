
import React from 'react';
import toHAST from 'mdast-util-to-hast';
import wrapper from 'hast-to-hyperscript';

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
    properties: {value: 'UNRELEASED'},
    children: [toHAST(node)]
  }
}

const hastNodeChangeHeader = (node) => {
  return {
    type: 'element',
    tagName: 'ChangeHeader',
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

const toHastNodes = (children) => {
  let depth;
  let unrelease = false;
  const ret = [];

  for (const node of children) {
    const { type } = node;
    const { identifier } = node.children[0];

    if (type === 'heading') { // headers

      if (identifier === 'unreleased') { // if unreleased header, mark it to add subsections
        ret.push(hastNodeUnrelased(node));

        unrelease = true;
        depth = node.depth;
        continue;

      }

      if (unrelease) {
        if (depth === node.depth) { // if got a same level header then close unrelease section
          unrelease = false;
        } else {
          ret.push(hastNodeChangeHeader(node)); //add change headers
          continue;
        }
      }
    }

    if (unrelease && type === 'list') {
      ret.push(hastNodeChangeList(node)); // changes list
    } else {
      ret.push(toHAST(node));
    }
  }

  return ret;

}

const ChangelogMD = ({ root }) => {
  const hast = {
    type: 'element',
    tagName: 'div',
    properties: {className: 'markdown-md'},
    children: toHastNodes(root.children)
  };

  return wrapper(h, hast);
}

export default ChangelogMD;
