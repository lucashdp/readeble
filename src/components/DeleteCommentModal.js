import React, { Component } from 'react';
import { Button, Row } from 'react-materialize';
import $ from 'jquery';
import { bindActionCreators } from "redux";
import { connect } from 'react-redux';
import Modal from 'react-modal';
import {
    removeComment, modalDeleteComment
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

class DeleteCommentModal extends Component {
    render() {
        const { comment, modalDeleteComment, removeComment } = this.props;
        return (
            <div>
                <Button className='red right' onClick={() => {
                    modalDeleteComment(comment, true);
                }}>
                    <i className="material-icons">delete</i>
                </Button>
                <Modal
                    style={style}
                    contentLabel='Delete Comment'
                    id={'modalCommentDelete' + comment.id}
                    ariaHideApp={false}
                    isOpen={comment.showingDeleteCommentModal}>
                    <Row>
                        <p>Do you really want to delete this comment ?</p>
                    </Row>
                    <Button className='red' onClick={() => { removeComment(comment) }}>
                        DELETE
                    </Button>
                    <Button onClick={() => {
                        modalDeleteComment(comment, false);
                    }}>Close</Button>
                </Modal>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    showingAnyCommentToDelete: state.reducer.showingAnyCommentToDelete
});

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        removeComment,
        modalDeleteComment
    }, dispatch)
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(DeleteCommentModal)