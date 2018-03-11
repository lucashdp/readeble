import React from 'react';
import { Row, Col, Button } from 'react-materialize';
import DeletePostModal from './DeletePostModal';
import PostModal from './PostModal';

export default function PostVotesActions({ post, categories, votePost }) {
    return (
        <Row>
            <Col s={6}>
                <label className="white-text label-big pl-4" htmlFor="votesButtons">
                    {post.voteScore} Votes
                                    </label>
                <div name="votesButtons">
                    <Button className="white-text blue"
                        onClick={() => { votePost(post, "upVote") }}>
                        <i className="material-icons">&#xE0B2;</i>
                    </Button>
                    <Button className="white-text blue"
                        onClick={() => { votePost(post, "downVote") }}>
                        <i className="material-icons">&#xE0B5;</i>
                    </Button>
                </div>
            </Col>
            <Col s={6}>
                <label className="white-text label-big pl-68" htmlFor="actions">
                    Actions
                                    </label>
                <div name="actions">
                    <PostModal post={post} categories={categories} />
                    <DeletePostModal post={post} />
                </div>
            </Col>
        </Row>
    );
}