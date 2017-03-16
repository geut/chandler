
import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getChangelog, initChangelog, addChange } from '../actions'

import Changelog from '../components/changelog';
import ChangelogNotFound from '../components/changelog-not-found';

class Editor extends Component {

    componentDidMount() {
      const { path, getChangelog } = this.props;

      getChangelog(path);
    }

    render() {
      const { loaded, loading, path, mdast, initChangelog, addChange } = this.props;

      return (
        loaded ?
          <Changelog mdast={mdast} onAddChange={addChange} path={path}/>
        :
          !loading && <ChangelogNotFound onInitChangelog={initChangelog} path={path}/>
      );
    }
};


const mapStateToProps = ({ project, changelog }) => ({
  loaded: changelog.loaded,
  loading: changelog.loading,
  path: project.path,
  mdast: changelog.mdast
});

export default connect(mapStateToProps, { getChangelog, initChangelog, addChange })(Editor);
