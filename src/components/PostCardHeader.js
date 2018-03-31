import React from 'react';
import moment from 'moment';
import { Row, Input, Icon } from 'react-materialize';

export default function PostCardHeader({ post }) {

    var formattedDate = moment.unix(post.timestamp).format("MM/DD/YYYY");

    return (
        <div>
            <Row>
                {formattedDate}
            </Row>
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