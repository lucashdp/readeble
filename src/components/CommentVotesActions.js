import React, { Component } from 'react';
import { Row, Col, Button } from 'react-materialize';
import DeleteCommentModal from './DeleteCommentModal';
import CommentModal from './CommentModal';

export default function CommentVotesActions({ comment, categories, voteComment }) {
    return (
        <Row>
            <Col s={6}>
                <label className="white-text label-big pl-4" for="votesButtons">
                    {comment.voteScore} Votes
                                    </label>
                <div name="votesButtons">
                    <Button className="white-text blue"
                        onClick={() => { voteComment(comment, "upVote") }}>
                        <i className="material-icons">&#xE0B2;</i>
                    </Button>
                    <Button className="white-text blue"
                        onClick={() => { voteComment(comment, "downVote") }}>
                        <i className="material-icons">&#xE0B5;</i>
                    </Button>
                </div>
            </Col>
            <Col s={6}>
                <label className="white-text label-big pl-68" for="actions">
                    Actions
                                    </label>
                <div name="actions">
                    <CommentModal comment={comment} categories={categories} />
                    <DeleteCommentModal comment={comment} />
                </div>
            </Col>
        </Row>
    );
}