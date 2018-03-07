import React, { Component } from 'react';
import { Row, Col } from 'react-materialize';
import { Button, Input, Icon } from 'react-materialize';
import DeleteCommentModal from './DeleteCommentModal';
import CommentVotesActions from './CommentVotesActions';

export default function CommentCard({ comment, voteComment }) {
    return (
        <div className="card green darken-1">
            <div className="card-action">
                <div className="card-content white-text">
                    <Row>
                        <Input s={12} label="Author" disabled className="white-text" value={comment.author}>
                            <Icon>account_circle</Icon>
                        </Input>
                    </Row>
                    <p>{comment.body}</p>
                </div>
                <CommentVotesActions comment={comment} voteComment={voteComment} />
            </div>
        </div>
    );
}