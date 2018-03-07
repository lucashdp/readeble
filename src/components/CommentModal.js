import React, { Component } from 'react';
import { Button, Icon } from 'react-materialize';
import FormComment from './FormComment';
import Modal from 'react-modal';
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import {
    modalComment
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

class CommentModal extends Component {
    render() {
        const { comment, showingNewCommentModal, modalComment } = this.props;
        return (
            <div>
                {(comment !== undefined && comment.id !== undefined) ?
                    <div>
                        <Button className='blue right' id={comment.id} onClick={() => {
                            modalComment(comment, true);
                        }}>
                            <i class="material-icons">mode_edit</i>
                        </Button>
                        <Modal
                            style={style}
                            contentLabel='Edit Comment'
                            id={'modalEditComment' + comment.id}
                            ariaHideApp={false}
                            isOpen={comment.showingEditCommentModal}>
                            <FormComment comment={comment} />
                            <Button className="blue" type="submit" form={'formCommentEdit' + comment.id}>Send
                                <Icon left>send</Icon>
                            </Button>
                            <Button onClick={() => {
                                modalComment(comment, false);
                            }}>Close</Button>
                        </Modal>
                    </div>
                    :
                    <div>
                        <Button floating large className='blue right-absolute' waves='light' icon='add'
                            onClick={() => {
                                modalComment(undefined, true);
                            }} />
                        <Modal
                            style={style}
                            contentLabel='New Comment'
                            id="modalComment"
                            isOpen={showingNewCommentModal}
                            ariaHideApp={false}>
                            <FormComment />
                            <Button className="blue" type="submit" form="formCommentNew" modal="close">Send
                                <Icon left>send</Icon>
                            </Button>
                            <Button onClick={() => {
                                modalComment(undefined, false);
                            }} >Close</Button>
                        </Modal>
                    </div>
                }
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    categories: state.reducer.categories,
    showingNewModal: state.reducer.showingNewModal,
    showingAnyCommentToEdit: state.reducer.showingAnyCommentToEdit
});

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        modalComment
    }, dispatch)
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CommentModal)