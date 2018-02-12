import React, { Component } from 'react';
import { Button, Modal } from 'react-materialize';

export default function PostModal({ posts }) {
    return (
        <div>
            <Modal
                header='Novo Post'
                id="modalPost"
                actions={<Button modal="close">Fechar</Button>}
                trigger={<Button floating large className='red right' waves='light' icon='+' />}>
                <p>TEste</p>
            </Modal>
        </div>
    );
}