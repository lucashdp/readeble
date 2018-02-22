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
        const { post } = this.props;
        let element;

        if (post)
            element = post;
        else
            element = this.props.comment;

        return (
            <div>
                <div class="card blue darken-1">
                    <div class="card-content white-text">
                        <span class="card-title">{element.title}</span>
                        <p>{element.body}</p>
                    </div>
                    <div class="card-action">
                        <Button className="white-text blue" onClick={() => { doVote(post, element) }}>
                            Votar ({element.voteScore})
                        </Button>
                        {post ? (
                            <div>
                                <Link className="white-text blue" to={'/comments/' + post.id}>
                                    Comentar ({post.commentCount})
                                </Link>
                                <DeleteModal postId={post.id} />
                            </div>
                        ) :
                            <DeleteModal commentId={element.id} />
                        }
                    </div>
                </div>
            </div>
        );
    }
}

const doVote = (post, element) => {
    if (post)
        return (this.props.votePost(post, "upVote"));
    else
        return (this.props.voteComment(element, "upVote"));
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