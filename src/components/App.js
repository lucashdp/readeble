import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { Button } from 'react-materialize';
import { addPost, removePost } from '../actions';
import Post from './Post';
import PostModal from './PostModal';
//import ReadebleFooter from './ReadebleFooter';
import * as ReadebleAPI from '../utils/ReadebleAPI';

class App extends Component {

  state = {
    posts: [],
    categories: []
  }

  componentDidMount() {
    ReadebleAPI.getAll()
      .then(
      (posts) => { posts != undefined ? this.setState({ posts }) : '' }
    );
    ReadebleAPI.getCategories()
    .then(
    (data) => { this.setState({ categories: data.categories }) }
    );
  }

  render() {    
    const { doPost, remove } = this.props
    const { posts } = this.state

    return (
      <div>
        <Post posts={posts}/> 
        <PostModal/>   
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