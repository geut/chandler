
import React from 'react';
import toHAST from 'mdast-util-to-hast';
import wrapper from 'hast-to-hyperscript';

const UnReleasedHeader = ({ value, children }) => {
  return (<div className="UnReleasedHeader">{children}</div>);
}

const ChangeHeader = ({ value, children }) => {
  return (<div className="ChangeHeader">{children}</div>);
}

const ChangeList = ({ value, children }) => {
  return (<div className="ChangeList">{children}</div>);
}

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

    if (type === 'heading') {

      if (identifier === 'unreleased') {
        ret.push(hastNodeUnrelased(node));

        unrelease = true;
        depth = node.depth;
        continue;

      }

      if (unrelease) {
        if (depth === node.depth) {
          unrelease = false;
        } else {
          ret.push(hastNodeChangeHeader(node));
          continue;
        }
      }
    }

    if (unrelease && type === 'list') {
      ret.push(hastNodeChangeList(node));
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
