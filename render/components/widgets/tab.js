import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';

export default class Tab extends Component {

  constructor() {
    super();
    this.state = {
      active: 0
    }
  }

  activateTab = (idx) => {
    this.setState({active: idx});
  }

  isActive = (idx) => {
    const { active } = this.state;
    return idx === active;
  }

  renderTabBarItem = (item, idx) => {
    const { title, disabled } = item.props;
    const { tab, tabactive } = style;
    const { isActive, activateTab } = this;

    return (
      <button
        className={css(tab, isActive(idx) && tabactive)}
        key={idx}
        onClick={() => activateTab(idx)}
        disabled={disabled}
      >
          {title}
      </button>
    );
  }

  render() {
    const { children } = this.props;
    const { renderTabBarItem, isActive } = this;
    const { tabbar } = style;

    const activeTab = children.filter((child, idx) => isActive(idx) );

    return (
      <div>
        <div className={css(tabbar)}>
          {
            children.map(renderTabBarItem)
          }
        </div>
        {activeTab}
      </div>
    )
  }
};


export class TabItem extends Component {
  render() {
    const { children, ...props } = this.props;
    return <div {...props}>{ children }</div>
  }
}

const style = StyleSheet.create({
  tabbar: {
    margin: '10px -20px',
    padding: '0 20px',
    borderBottom: '1px solid silver'
  },
  tab: {
    minWidth: 100,
    background: '#f9f9f9',
    padding: 9,
    borderBottom: 'none',
    borderTop: '1px solid silver'
  },
  tabactive: {
    marginBottom: -1,
    padding: 10,
    borderTop: '2px solid #ff7200'
  }
});
