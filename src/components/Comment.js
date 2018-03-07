import React, { Component } from 'react';
import { Row, Col } from 'react-materialize';
import CommentCard from './CommentCard'

export default function Comment({ comments, voteComment }) {
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
                                    <CommentCard comment={comment} voteComment={voteComment} />
                                </Col>
                                <Col s={2}></Col>
                            </Row>
                        </li>
                        ))}
                </div>)
                    : <p className="center white-text"> 0 comments.</p>}
            </ul>
        </div>
    );
}