import React, { Component } from 'react';
import Post from './Post';
import PostModal from './PostModal';
import Loading from './Loading';
import { connect } from 'react-redux';
import * as ReadebleAPI from '../utils/ReadebleAPI';
import { bindActionCreators } from "redux";
import { Navbar, NavItem } from 'react-materialize';
import {
    getAll, getCategories, getAllByCategory
} from "../reducers";

class HomePage extends Component {
    componentDidMount() {
        if (!this.props.byCategory)
            this.props.getAll();
        else
            this.props.getAllByCategory(this.props.path);
        this.props.getCategories();
    }

    render() {
        const { loading, posts, categories, showingNewModal } = this.props;

        return (
            <div>
                {!loading ? (
                    <div>
                        <Post posts={posts} />
                        <PostModal categories={categories} showingNewModal={showingNewModal} />
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
    categories: state.reducer.categories,
    path: state.router.location.pathname.substring(1),
    showingNewModal: state.reducer.showingNewModal
});

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        getAll,
        getCategories,
        getAllByCategory
    }, dispatch)
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(HomePage)