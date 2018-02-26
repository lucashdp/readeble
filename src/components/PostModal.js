import React, { Component } from 'react';
import { Button, Icon } from 'react-materialize';
import FormPost from './FormPost';
import Modal from 'react-modal';
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import {
    modal
} from "../reducers";


class PostModal extends Component {
    render() {
        const { post, categories, showingNewModal, modal } = this.props;
        return (
            <div>
                {(post !== undefined && post.id !== undefined) ?
                    <div>
                        <Button className='blue right' id={post.id} onClick={() => {
                            modal(post, true);
                        }}>
                            <i class="material-icons">mode_edit</i>
                        </Button>
                        <Modal
                            contentLabel='Edit Post'
                            id={'modalEdit' + post.id}
                            ariaHideApp={false}
                            isOpen={post.showingEditModal}>
                            <FormPost post={post} categories={categories} />
                            <Button className="blue" type="submit" form={'formEdit' + post.id}>Send
                                <Icon left>send</Icon>
                            </Button>
                            <Button onClick={() => {
                                modal(post, false);
                            }}>Close</Button>
                        </Modal>
                    </div>
                    :
                    <div>
                        <Button floating large className='blue right-absolute' waves='light' icon='add'
                            onClick={() => {
                                modal(undefined, true);
                            }} />
                        <Modal
                            contentLabel='New Post'
                            id="modalPost"
                            isOpen={showingNewModal}
                            ariaHideApp={false}>
                            <FormPost categories={categories} />
                            <Button className="blue" type="submit" form="formNew" modal="close">Send
                                <Icon left>send</Icon>
                            </Button>
                            <Button onClick={() => {
                                modal(undefined, false);
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
    showingAnyPostToEdit: state.reducer.showingAnyPostToEdit
});

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        modal
    }, dispatch)
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PostModal)