import React, { Component } from 'react';
import { Button } from 'react-materialize';
import DeletePostModal from './DeletePostModal';
import { bindActionCreators } from "redux";
import { connect } from 'react-redux';
import {
    votePost
} from "../reducers";

class Card extends Component {
    render() {
        const { post } = this.props;
        return (
            <div>
                <div class="card blue darken-1">
                    <div class="card-content white-text">
                        <span class="card-title">{post.title}</span>
                        <p>{post.body}</p>
                    </div>
                    <div class="card-action">
                        <Button className="white-text blue" onClick={() => { this.props.votePost(post, "upVote") }}>
                            Votar ({post.voteScore})
                        </Button>
                        <a className="white-text" href="#">Comentar ({post.commentCount})</a>
                        <DeletePostModal postId={post.id} />
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
        votePost
    }, dispatch)
};


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Card);