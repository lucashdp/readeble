import React from 'react';
import { Row, Col } from 'react-materialize';
import CommentCard from './CommentCard'
import CommentModal from './CommentModal';

export default function Comment({ comments, voteComment, showingNewCommentModal, parentId }) {

    if (comments !== undefined && comments.length > 0)
        comments = comments.sort((a, b) => {
            return b.voteScore - a.voteScore;
        })

    return (
        <div>
            <ul className='p-1'>
                {(comments !== undefined && comments.length > 0) ? (
                    <div>
                        <p className="center white-text"> {comments.length} comments.</p>
                        {comments.map((comment) => (
                            <li key={comment.id}>
                                <Row>
                                    <Col s={2}></Col>
                                    <Col s={8}>
                                        <CommentCard comment={comment} voteComment={voteComment} parentId={parentId} />
                                    </Col>
                                    <Col s={2}></Col>
                                </Row>
                            </li>
                        ))}
                    </div>)
                    : <p className="center white-text"> 0 comments.</p>}
            </ul>
            <CommentModal showingNewCommentModal={showingNewCommentModal} parentId={parentId} />
        </div>
    );
}