
import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getChangelog, initChangelog } from '../actions'
import InitChangelog from '../components/init-changelog';

class Changelog extends Component {

    componentDidMount() {
      const { path, getChangelog } = this.props;

      getChangelog(path);
    }

    render() {
      const { source, loaded, initChangelog, path } = this.props;
      return (
        loaded ?
          <div>{source}</div>
        :
          <InitChangelog onInitChangelog={initChangelog} path={path}/>
      );
    }
};


const mapStateToProps = ({ project, changelog }) => ({ 
  loaded: changelog.loaded,
  path: project.path,
  source: changelog.source
});

export default connect(mapStateToProps, { getChangelog, initChangelog })(Changelog);
