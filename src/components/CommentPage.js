import React, { Component } from 'react';
import Post from './Post';
import PostModal from './PostModal';
import Comment from './Comment';
import Loading from './Loading';
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import {
    getComments
} from "../reducers";

class CommentPage extends Component {
    componentDidMount() {
        this.props.getComments(this.props.match.params.postId)
    }

    render() {
        const { comments, loading } = this.props;

        return (
            <div>
                {!loading ? (
                    <div>
                        <Comment comments={comments}/>
                        {/* <CommentModal /> */}
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
    comments: state.reducer.comments,
    loading: state.reducer.loading
});

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        getComments
    }, dispatch)
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CommentPage)