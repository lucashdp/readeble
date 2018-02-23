import React, { Component } from 'react';
import { Row, Col } from 'react-materialize';
import Card from './Card'

export default function Comment({ comments }) {
    return (
        <div>
            <ul className='p-2'>
                {(comments !== undefined && comments.length > 0) ?
                    comments.map((comment) => (
                        <li key={comment.id}>
                            <Row>
                                <Col s={2}></Col>
                                <Col s={8}>
                                    <Card comment={comment} />
                                </Col>
                                <Col s={2}></Col>
                            </Row>
                        </li>
                    )) : <p className="center"> 0 results.</p>}
            </ul>
        </div>
    );
}