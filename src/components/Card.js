import React, { Component } from 'react';
import { Button } from 'react-materialize';
import DeleteModal from './DeleteModal';
import { bindActionCreators } from "redux";
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {
    votePost,
    voteComment
} from "../reducers";

class Card extends Component {
    render() {
        const { post, comment } = this.props;

        return (
            <div>
                <div class="card blue darken-1">
                    <div class="card-action">
                        {post ? (
                            <div>
                                <div class="card-content white-text">
                                    <span class="card-title">{post.title}</span>
                                    <p>{post.body}</p>
                                </div>
                                <Button className="white-text blue"
                                    onClick={() => { this.props.votePost(post, "upVote") }}>
                                    <i class="material-icons">&#xE5CE;</i>
                                </Button>
                                <Button className="white-text blue"
                                    onClick={() => { this.props.votePost(post, "downVote") }}>
                                    <i class="material-icons">&#xE5CF;</i>
                                </Button>
                                <h5 className="white-text">
                                    Votar ({post.voteScore})
                                </h5>
                                <Link className="white-text blue" to={'/comments/' + post.id}>
                                    Comentar ({post.commentCount})
                                </Link>
                                <DeleteModal postId={post.id} />
                            </div>
                        ) :
                            <div>
                                <div class="card-content white-text">
                                    <span class="card-title">{comment.title}</span>
                                    <p>{comment.body}</p>
                                </div>
                                <Button className="white-text blue"
                                    onClick={() => { this.props.voteComment(comment, "upVote") }}>
                                    <i class="material-icons">&#xE5CE;</i>
                                </Button>
                                <Button className="white-text blue"
                                    onClick={() => { this.props.voteComment(comment, "downVote") }}>
                                    <i class="material-icons">&#xE5CF;</i>
                                </Button>
                                <h5 className="white-text">
                                    Vote ({comment.voteScore})
                            </h5>
                                <DeleteModal commentId={comment.id} />
                            </div>
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