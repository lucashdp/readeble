import React from 'react';
import { Row, Col } from 'react-materialize';
import Card from './Card'

export default function Post({ posts, postDetail, orderAscending, categories, path }) {

    if (posts !== undefined && posts.length > 0) {

        if (orderAscending)
            posts = posts.sort((a, b) => {
                return a.voteScore - b.voteScore;
            })
        else
            posts = posts.sort((a, b) => {
                return b.voteScore - a.voteScore;
            })

        const paths = categories.map((category) => {
            return category.path
        });
        if (paths.includes(path)) {
            posts = posts.filter((pt) => pt.category === path)
        }
    }

    return (
        <div>
            <ul className='p-2'>
                {(posts !== undefined && posts.length > 0) ?
                    posts.map((post) => (
                        <li key={post.id}>
                            <Row>
                                <Col s={2}></Col>
                                <Col s={8}>
                                    <Card post={post} />
                                </Col>
                                <Col s={2}></Col>
                            </Row>
                        </li>
                    )) : (postDetail !== undefined && postDetail.id) ?
                        <li key={postDetail.id}>
                            <Row>
                                <Col s={2}></Col>
                                <Col s={8}>
                                    <Card postDetail={postDetail} />
                                </Col>
                                <Col s={2}></Col>
                            </Row>
                        </li>
                        : <p className="center"> 0 results.</p>}
            </ul>
        </div>
    );
}