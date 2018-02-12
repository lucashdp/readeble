import React, { Component } from 'react';
import { Button, Card, Row, Col } from 'react-materialize';

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
                                <Card className='blue-grey darken-1'
                                    textClassName='white-text' 
                                    title={post.title} 
                                    actions={[<a href='#'>Votar</a>, <a href='#'>Comentar</a>]}>
                                    {post.body}
                                </Card>
                            </Col>
                            <Col s={2}></Col>
                        </Row>
                    </li>
                ))}
            </ul>
        </div>
    );
}