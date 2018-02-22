import React, { Component } from 'react';
import { Button, Modal } from 'react-materialize';
import $ from 'jquery';

export default function DeleteModal({ postId, commentId }) {
    return (
        <div>
            <Modal
                header='Deletar Post'
                trigger={
                        <Button className="white-text red right" modal="close">EXCLUIR</Button>
                }
                actions={
                    <div>
                        <Button className="red" modal="close">Deletar</Button>
                        <Button className="blue" modal="close">Fechar</Button>
                    </div>
                }>
                <p>Deseja realmente deletar esse post ?</p>
            </Modal>
        </div>
    );
}