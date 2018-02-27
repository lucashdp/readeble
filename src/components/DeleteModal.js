import React, { Component } from 'react';
import { Button, Row } from 'react-materialize';
import $ from 'jquery';
import { bindActionCreators } from "redux";
import { connect } from 'react-redux';
import Modal from 'react-modal';
import {
    removePost, modalDeletePost
} from "../reducers";

const style = {
    content: {
        border: '0',
        borderRadius: '4px',
        bottom: 'auto',
        left: '30%',
        padding: '2rem',
        position: 'fixed',
        right: 'auto',
        top: '30%',
        width: '25%',
        maxWidth: '40rem'
    }
};

class DeleteModal extends Component {
    render() {
        const { post, modalDeletePost, removePost } = this.props;
        return (
            <div>
                <Button className='red right' onClick={() => {
                    modalDeletePost(post, true);
                }}>
                    <i class="material-icons">delete</i>
                </Button>
                <Modal
                    style={style}
                    contentLabel='Delete Post'
                    id={'modalDelete' + post.id}
                    ariaHideApp={false}
                    isOpen={post.showingDeleteModal}>
                    <Row>
                        <p>Do you really want to delete this post ?</p>
                    </Row>
                    <Button className='red' onClick={() => { removePost(post) }}>
                        DELETE
                    </Button>
                    <Button onClick={() => {
                        modalDeletePost(post, false);
                    }}>Close</Button>
                </Modal>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    showingAnyPostToDelete: state.reducer.showingAnyPostToDelete
});

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        removePost,
        modalDeletePost
    }, dispatch)
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(DeleteModal)