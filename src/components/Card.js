import React, { Component } from 'react';
import { Button } from 'react-materialize';
import PostCard from './PostCard';
import CommentCard from './CommentCard';
import { bindActionCreators } from "redux";
import { connect } from 'react-redux';
import {
    votePost,
    voteComment
} from "../reducers";

class Card extends Component {
    render() {
        const { post, comment } = this.props;

        return (
            <div>
                <h5>Author: {post ? post.author : comment.author}</h5>
                <div class="card blue darken-1">
                    <div class="card-action">
                        {post ? (
                            <PostCard post={post} votePost={this.props.votePost}/>
                        ) :
                            <CommentCard comment={comment}/>
                        }
                    </div>
                </div>
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
        votePost,
        voteComment
    }, dispatch)
};


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Card);