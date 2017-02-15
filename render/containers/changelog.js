
import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getChangelog, initChangelog } from '../actions'
import Editor from '../components/editor';
import ChangelogNotFound from '../components/changelog-not-found';

class Changelog extends Component {

    componentDidMount() {
      const { path, getChangelog } = this.props;

      getChangelog(path);
    }

    render() {
      const { loaded, initChangelog, path, mdast } = this.props;
      return (
        loaded ?
          <Editor mdast={mdast} />
        :
          <ChangelogNotFound onInitChangelog={initChangelog} path={path}/>
      );
    }
};


const mapStateToProps = ({ project, changelog }) => ({
  loaded: changelog.loaded,
  path: project.path,
  source: changelog.source,
  mdast: changelog.mdast
});

export default connect(mapStateToProps, { getChangelog, initChangelog })(Changelog);
