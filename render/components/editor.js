
import React from 'react';
import Markdown from 'react-remarkable';
import { StyleSheet, css } from 'aphrodite'; 


const Editor = ({ source }) => {
  const { container, content, actions, action } = styles;

  return (
    <div className={css(container)}>
      <div className={css(content)}>
        <Markdown source={source} />
      </div>
      <div className={css(actions)}>
        <button type="button" className={css(action)}> <i className="fa fa-folder-open-o"/>Changes</button>
        <button type="button" className={css(action)}> <i className="fa fa-folder-open-o"/>Release</button>        
      </div>
  </div>
  );
}

export default Editor;

const styles = StyleSheet.create({
    container: {
      display: 'flex',
      alignItems: 'flex-start',
      flexDirection: 'row',
      justifyContent: 'center',
      flex: '1'
    },
    content: {      
      flex: '1 0 0',
      alignSelf: 'stretch',

      overflowY: 'scroll',

      padding: 10
    },
    actions: {
      display: 'flex',
      alignItems: 'stretch',
      flexDirection: 'column',
      justifyContent: 'space-around',
      flex: '0 0'     
    },
    action: {
      margin: '2px 5px'
    }
});