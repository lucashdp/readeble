import React from 'react';
import { Row } from 'react-materialize';
import { Input, Icon } from 'react-materialize';
import CommentVotesActions from './CommentVotesActions';

export default function CommentCard({ comment, voteComment, parentId }) {
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
                <CommentVotesActions comment={comment} voteComment={voteComment} parentId={parentId} />
            </div>
        </div>
    );
}