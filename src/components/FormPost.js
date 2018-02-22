import React, { Component } from 'react';
import { Button, Row, Input, Icon } from 'react-materialize';

export default function FormPost({ post, categories }) {
    return (
        <div>
            <Row>
                <Input s={12} label="Author" validate><Icon>account_circle</Icon></Input>
            </Row>
            <Row>
                <Input s={12} type='select' label="Category" defaultValue='1'>
                    {/* {categories != undefined && categories.length > 0 ? (
                        categories.map((category) => (
                            <option value={category.id}>{category}</option>
                        ))) : ""} */}
                </Input>
            </Row>
        </div>
    );
}