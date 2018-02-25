import React, { Component } from 'react';
import { Row, Col, Button, Icon } from 'react-materialize';
import DeleteModal from './DeleteModal';
import { Link } from 'react-router-dom';
import FormPost from './FormPost';
import PostModal from './PostModal';
import { connect } from 'react-redux';

class PostCard extends Component {
    render() {
        const { post, votePost, categories } = this.props;

        return (
            <div>
                <div class="card-content white-text">
                    <span class="card-title">{post.title}</span>
                </div>
                <Row>
                    <label className="white-text label-big">
                        {post.voteScore} Votes
                    </label>
                    <Button className="white-text blue"
                        onClick={() => { votePost(post, "upVote") }}>
                        <i class="material-icons">&#xE5CE;</i>
                    </Button>
                    <Button className="white-text blue"
                        onClick={() => { votePost(post, "downVote") }}>
                        <i class="material-icons">&#xE5CF;</i>
                    </Button>
                    <Link className="white-text blue" to={'/comments/' + post.id}>
                        {post.commentCount} Comments
                    </Link>
                    <PostModal post={post} categories={categories} />
                </Row>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    categories: state.reducer.categories
});

export default connect(
    mapStateToProps
)(PostCard)