import React, { Component } from 'react';
import { Button, Row, Input, Icon } from 'react-materialize';
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import {
    sendPost
} from "../reducers";

class FormPost extends Component {
    render() {
        const { post, categories } = this.props;

        return (
            <div>
                <Row>
                    <Input s={12} label="Author" validate name="author"><Icon>account_circle</Icon></Input>
                </Row>
                <Row>
                    <Input s={12} type='select' label="Category" defaultValue='1' name="category">
                        {(categories != undefined && categories.length > 0) ?
                            categories.map((category) => (
                                <option key={category.path}>{category.name}</option>
                            )) : ""}
                    </Input>
                </Row>
                <Row>
                    <Input s={12} label="Title" validate name="title"><Icon>title</Icon></Input>
                </Row>
                <Row>
                    <Input s={12} label="Post" validate name="body"><Icon>tos</Icon></Input>
                </Row>
            </div>
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