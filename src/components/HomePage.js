import React, { Component } from 'react';
import Post from './Post';
import PostModal from './PostModal';
import Loading from './Loading';
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
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
        const { loading, posts, categories, showingNewModal, orderAscending, orderAscendingDate, path } = this.props;

        return (
            <div>
                {!loading ? (
                    <div>
                        <Post posts={posts} orderAscending={orderAscending} orderAscendingDate={orderAscendingDate} categories={categories} path={path} />
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
    showingNewModal: state.reducer.showingNewModal,
    orderAscending: state.reducer.orderAscending,
    orderAscendingDate: state.reducer.orderAscendingDate
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