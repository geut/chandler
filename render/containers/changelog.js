
import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getChangelog, initChangelog } from '../actions'
import Editor from './editor';
import ChangelogNotFound from '../components/changelog-not-found';

class Changelog extends Component {

    componentDidMount() {
      const { path, getChangelog } = this.props;

      getChangelog(path);
    }

    render() {
      const { loaded, loading, initChangelog, path, mdast } = this.props;

      return (
        loaded ?
          <Editor mdast={mdast} />
        :
          !loading && <ChangelogNotFound onInitChangelog={initChangelog} path={path}/>
      );
    }
};


const mapStateToProps = ({ project, changelog }) => ({
  loaded: changelog.loaded,
  loading: changelog.loading,
  path: project.path,
  source: changelog.source,
  mdast: changelog.mdast
});

export default connect(mapStateToProps, { getChangelog, initChangelog })(Changelog);
