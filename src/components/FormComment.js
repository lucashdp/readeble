import React, { Component } from 'react';
import { Button, Row, Input, Icon } from 'react-materialize';
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import uuid from 'uuid';
import {
    sendComment,
    updateComment
} from "../reducers";

class FormComment extends Component {
    constructor(props) {
        super(props);
        this.state =
            {
                comment: props.comment,
                author: props.comment ? props.comment.author : '',
                body: props.comment ? props.comment.body : '',
                voteScore: props.comment ? props.comment.voteScore : 1,
                parentId: props.parentId ? props.parentId : ''
            };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        if (event.target.name === "author")
            this.setState({ author: event.target.value });
        if (event.target.name === "body")
            this.setState({ body: event.target.value });
    }

    handleSubmit() {

        const { comment, author, body, parentId } = this.state;
        if (comment !== undefined && comment.id !== undefined) {

            const commentEdit = {
                id: comment.id,
                author,
                body,
                parentId,
                timestamp: Date.now()
            }

            this.props.updateComment(commentEdit);
        } else {

            const newComment = {
                id: uuid(),
                author,
                body,
                parentId,
                timestamp: Date.now()
            }

            this.props.sendComment(newComment);
        }
    }

    render() {
        const { comment } = this.props;

        return (
            <form onSubmit={this.handleSubmit} id={comment !== undefined ? 'formCommentEdit'+comment.id : 'formCommentNew'}>
                <Row>
                    <Input s={12} label="Author" required name="author" value={this.state.author}
                        onChange={this.handleChange}>
                        <Icon>account_circle</Icon>
                    </Input>
                </Row>
                <Row>
                    <label for="body"><Icon>tos</Icon>Comment</label>
                    <textarea id="body" class="materialize-textarea" s={12} required name="body" value={this.state.body}
                        onChange={this.handleChange}></textarea>
                </Row>
            </form>
        );
    }
}



const mapStateToProps = (state) => ({
    categories: state.reducer.categories
});

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        sendComment,
        updateComment
    }, dispatch)
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(FormComment)