import React, { Component } from 'react';
import { Row, Input, Icon } from 'react-materialize';
import PostModal from './PostModal';

export default function PostCardHeader({ post }) {
    return (
        <div>
            <Row>
                <Input s={12} label="Author" disabled className="white-text" value={post.author}>
                    <Icon>account_circle</Icon>
                </Input>
            </Row>
            <Row>
                <Input s={12} label="Title" disabled className="white-text" value={post.title}>
                    <Icon>title</Icon>
                </Input>
            </Row>
        </div>
    );
}