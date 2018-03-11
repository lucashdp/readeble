import React, { Component } from 'react';
import { Row } from 'react-materialize';
import { Link } from 'react-router-dom';
import PostVotesActions from './PostVotesActions';
import PostCardHeader from './PostCardHeader';
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
                <PostCardHeader post={post} />
                <PostVotesActions post={post} categories={categories} votePost={votePost} />
                <Row>
                    <h6 className="white-text center">{post.commentCount} Comments</h6>
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