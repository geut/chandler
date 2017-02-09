
import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getChangelog } from '../actions'

class Changelog extends Component {

    componentWillMount() {
      const { path, getChangelog } = this.props;
      getChangelog(path);
    }

    render() {
      const { source } = this.props;
console.log(source)      
      return (
        source ?
          <div>Yep {source}</div>
        :
          <div>Nope</div>
      );
    }
};


const mapStateToProps = ({ project, changelog }) => ({ 
  path: project.path,
  source: changelog.source
});

export default connect(mapStateToProps, { getChangelog })(Changelog);
