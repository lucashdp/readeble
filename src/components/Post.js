import React, { Component } from 'react';
import { Row, Col } from 'react-materialize';
import Card from './Card'

export default function Post({ posts }) {
    if (posts && posts.length === 0) {
        return <p className="center"> 0 results.</p>
    }

    return (
        <div>
            <ul className='p-2'>
                {posts.map((post) => (
                    <li key={post.id}>
                        <Row>
                            <Col s={2}></Col>
                            <Col s={8}>
                                <Card post={post}/>
                            </Col>
                            <Col s={2}></Col>
                        </Row>
                    </li>
                ))}
            </ul>
        </div>
    );
}