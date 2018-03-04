import React, { Component } from 'react';
import { Row, Col, Button, Icon, Input } from 'react-materialize';
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
                <Row>
                    <Link className="white-text blue" to={'/' + post.category + '/' + post.id}>
                        Details Post
                    </Link>
                </Row>
                <Row>
                    <Input s={12} label="Author" disabled className="white-text" value={post.author}>
                        <Icon>account_circle</Icon>
                    </Input>
                </Row>
                <Row>
                    <Input s={12} label="Title" disabled className="white-text" value={post.title}>
                        <Icon>title</Icon>
                    </Input>
                </Row>
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
                    <PostModal post={post} categories={categories} />
                    <DeleteModal post={post} />
                </Row>
                <Row>
                    <h6 className="white-text">{post.commentCount} Comments</h6>
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