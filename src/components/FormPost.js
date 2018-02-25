import React, { Component } from 'react';
import { Button, Row, Input, Icon } from 'react-materialize';
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import uuid from 'uuid';
import {
    sendPost
} from "../reducers";

class FormPost extends Component {
    constructor(props) {
        super(props);
        this.state =
            {
                author: props.post ? props.post.author : '',
                category: props.post ? props.post.category : 'react',
                title: props.post ? props.post.title : '',
                body: props.post ? props.post.body : '',
                voteScore: props.post ? props.post.voteScore : 1,
                commentCount: props.post ? props.post.commentCount : 0
            };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        if (event.target.name === "author")
            this.setState({ author: event.target.value });
        if (event.target.name === "category")
            this.setState({ category: event.target.value });
        if (event.target.name === "title")
            this.setState({ title: event.target.value });
        if (event.target.name === "body")
            this.setState({ body: event.target.value });
    }

    handleSubmit() {

        const { author, body, category, title, voteScore, commentCount } = this.state;

        const post = {
            id: uuid(),
            author,
            body,
            category,
            title,
            timestamp: Date.now(),
            voteScore,
            commentCount
        }

        this.props.sendPost(post);
    }

    render() {
        const { post, categories } = this.props;

        return (
            <form onSubmit={this.handleSubmit} id="modalForm">
                <Row>
                    <Input s={12} label="Author" validate name="author" value={this.state.author}
                        onChange={this.handleChange}>
                        <Icon>account_circle</Icon>
                    </Input>
                </Row>
                <Row>
                    <Input s={12} type='select' label="Category" defaultValue='1' name="category"
                        onChange={this.handleChange}>
                        {(categories != undefined && categories.length > 0) ?
                            categories.map((category) => (
                                <option key={category.path}>{category.name}</option>
                            )) : ""}
                    </Input>
                </Row>
                <Row>
                    <Input s={12} label="Title" validate name="title" onChange={this.handleChange}>
                        <Icon>title</Icon>
                    </Input>
                </Row>
                <Row>
                    <Input s={12} label="Post" validate name="body" onChange={this.handleChange}>
                        <Icon>tos</Icon>
                    </Input>
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
        sendPost
    }, dispatch)
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(FormPost)