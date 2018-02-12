import React, { Component } from 'react';
import { Button, Modal } from 'react-materialize';

export default function PostModal({ post }) {
    return (
        <div>
            <Modal
                header='Novo Post'
                id="modalPost"
                actions={<Button className="blue" modal="close">Fechar</Button>}
                trigger={<Button floating large className='blue right' waves='light' icon='+' />}>
                <p>TEste</p>
            </Modal>
        </div>
    );
}