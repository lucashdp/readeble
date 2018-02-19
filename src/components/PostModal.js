import React, { Component } from 'react';
import { Button, Modal } from 'react-materialize';
import FormPost from './FormPost'

export default function PostModal({ post }) {
    return (
        <div>
            <Modal
                header='Novo Post'
                id="modalPost"
                actions={<Button className="blue" modal="close">Fechar</Button>}
                trigger={<Button floating large className='blue right-absolute' waves='light' icon='+' />}>
                <FormPost post={post}/>
            </Modal>
        </div>
    );
}