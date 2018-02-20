import React, { Component } from 'react';
import Post from './Post';
import PostModal from './PostModal';
import Loading from './Loading';
import { connect } from 'react-redux';
import * as ReadebleAPI from '../utils/ReadebleAPI';
import { bindActionCreators } from "redux";
import {
    getAll, getCategories
} from "../reducers";

class HomePage extends Component {

    componentDidMount() {
        this.props.getAll();
        this.props.getCategories();
    }

    render() {
        const { loading, posts } = this.props;

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

const mapStateToProps = (state) => ({
    posts: state.reducer.posts,
    loading: state.reducer.loading,
    categories: state.reducer.categories
});

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        getAll,
        getCategories
    }, dispatch)
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(HomePage)