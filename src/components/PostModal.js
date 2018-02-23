import React, { Component } from 'react';
import { Button, Modal, Icon } from 'react-materialize';
import FormPost from './FormPost'

export default function PostModal({ post, categories }) {
    return (
        <div>
            <Modal
                header='New Post'
                id="modalPost"
                actions=
                {<div>
                    <Button className="blue" modal="close">Send<Icon left>send</Icon></Button>
                    <Button modal="close">Close</Button>
                </div>}
                trigger={<Button floating large className='blue right-absolute' waves='light' icon='+' />}>
                <FormPost post={post} />
            </Modal>
        </div>
    );
}