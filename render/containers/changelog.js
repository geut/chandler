
import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getChangelog } from '../actions'
import InitChangelog from '../components/init-changelog';

class Changelog extends Component {

    componentWillMount() {
      const { path, hasChangelog, getChangelog } = this.props;
      if (hasChangelog) {
        getChangelog(path);
      }
      
    }

    render() {
      const { source, hasChangelog } = this.props;
      return (
        hasChangelog ?
          <div>{source}</div>
        :
          <InitChangelog />
      );
    }
};


const mapStateToProps = ({ project, changelog }) => ({ 
  hasChangelog: project.hasChangelog,
  path: project.path,
  source: changelog.source
});

export default connect(mapStateToProps, { getChangelog })(Changelog);
