import React, { Component } from 'react';
import { Button, Modal, Icon } from 'react-materialize';
import FormPost from './FormPost';

export default function PostModal({ post, categories }) {
    return (
        <div>
            {(post !== undefined && post.id !== undefined) ?
                <Modal
                    header='Edit Post'
                    id="modalEditPost"
                    actions=
                    {<div>
                        <Button className="blue" type="submit" form="modalForm" modal="close">Send
                            <Icon left>send</Icon>
                        </Button>
                        <Button modal="close">Close</Button>
                    </div>}
                    trigger={<Button className='blue right' id={post.id}>
                        <i class="material-icons">mode_edit</i>
                    </Button>}>
                    <FormPost post={post} categories={categories} />
                </Modal>
                :
                <Modal
                    header='New Post'
                    id="modalPost"
                    actions=
                    {<div>
                        <Button className="blue" type="submit" form="modalForm" modal="close">Send
                            <Icon left>send</Icon>
                        </Button>
                        <Button modal="close">Close</Button>
                    </div>}
                    trigger={<Button floating large className='blue right-absolute' waves='light' icon='+' />}>
                    <FormPost categories={categories} />
                </Modal>
            }
        </div>
    );
}