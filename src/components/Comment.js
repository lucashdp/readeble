import React, { Component } from 'react';
import { Row, Col } from 'react-materialize';
import Card from './Card'

export default function Comment({ comments }) {
    if (comments && comments.length === 0) {
        return <p className="center"> 0 results.</p>
    }

    return (
        <div>
            <ul className='p-2'>
                {comments.map((comment) => (
                    <li key={comment.id}>
                        <Row>
                            <Col s={2}></Col>
                            <Col s={8}>
                                <Card comment={comment}/>
                            </Col>
                            <Col s={2}></Col>
                        </Row>
                    </li>
                ))}
            </ul>
        </div>
    );
}