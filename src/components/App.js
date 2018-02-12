import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { Button } from 'react-materialize';
import { addPost, removePost } from '../actions';
import Post from './Post';
import PostModal from './PostModal';
//import ReadebleFooter from './ReadebleFooter';
import * as ReadebleAPI from '../utils/ReadebleAPI';
import Loading from './Loading';

class App extends Component {

  state = {
    posts: [],
    categories: [],
    loading: true
  }

  componentDidMount() {
    const getCategories = () => {
      ReadebleAPI.getCategories()
        .then(
        (data) => { this.setState({ categories: data.categories, loading: false }) }
        );
    }

    ReadebleAPI.getAll()
      .then(
      (posts) => { (posts != undefined ? this.setState({ posts }) : ''); getCategories() }
      );
  }

  render() {
    const { doPost, removePost } = this.props
    const { posts, loading } = this.state

    return (
      <div>
        {!loading ? (
          <div>
            <Post posts={posts} />
            <PostModal />
          </div>
        ) : ""}
        {loading ? (
          <Loading />
        ) : ""}
      </div>
    );
  }
}

function mapStateToProps({ post }) {
  return {
    post
  }
}

function mapDispatchToProps(dispatch) {
  return {
    doPost: (data) => dispatch(ReadebleAPI.doPost(data)),
    removePost: (data) => dispatch(ReadebleAPI.removePost(data))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)