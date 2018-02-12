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
    loadingPosts: true
  }

  componentDidMount() {
    ReadebleAPI.getAll()
      .then(
      (posts) => { posts != undefined ? this.setState({ posts, loadingPosts: false }) : '' }
    );
    ReadebleAPI.getCategories()
    .then(
    (data) => { this.setState({ categories: data.categories }) }
    );
  }

  render() {    
    const { doPost, remove } = this.props
    const { posts, loadingPosts } = this.state

    return (
      <div>
        {!loadingPosts ? (
          <div>
            <Post posts={posts}/> 
            <PostModal/>
          </div>
        ) : ""}
        {loadingPosts ? (
          <Loading/>
        ) : ""}
      </div>
    );
  }
}

function mapStateToProps ({ post }) {
  return {
    post
  }
}

function mapDispatchToProps (dispatch) {
  return {
    doPost: (data) => dispatch(addPost(data)),
    remove: (data) => dispatch(removePost(data))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)