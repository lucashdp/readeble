import React, { Component } from 'react';
import Post from './Post';
import PostModal from './PostModal';
import Loading from './Loading';
import { connect } from 'react-redux';
import * as ReadebleAPI from '../utils/ReadebleAPI';

class HomePage extends Component {
    render() {
        const { loading, posts } = this.props;

        return (
            <div>
                {/* {!loading ? (
                    <div>
                        <Post posts={posts} />
                        <PostModal />
                    </div>
                ) : ""}
                {loading ? (
                    <Loading />
                ) : ""} */}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        posts: state.posts,
        loading: state.loading,
        categories: state.categories
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getAll: () => dispatch(ReadebleAPI.getAll()),
        getCategories: () => dispatch(ReadebleAPI.getCategories())
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(HomePage)