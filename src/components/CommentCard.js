import React, { Component } from 'react';
import { Row, Col } from 'react-materialize';
import { Button } from 'react-materialize';
import DeleteModal from './DeleteModal';

export default function CommentCard({ comment, voteComment }) {
    return (
        <div>
            <div class="card-content white-text">
                <span class="card-title">{comment.title}</span>
                <p>{comment.body}</p>
            </div>
            <Row>
                <label className="white-text label-big">
                    {comment.voteScore} Votes
                </label>
                <Button className="white-text blue"
                    onClick={() => { voteComment(comment, "upVote") }}>
                    <i class="material-icons">&#xE5CE;</i>
                </Button>
                <Button className="white-text blue"
                    onClick={() => { voteComment(comment, "downVote") }}>
                    <i class="material-icons">&#xE5CF;</i>
                </Button>
            </Row>
            {/* <DeleteModal commentId={comment.id} /> */}
        </div>
    );
}