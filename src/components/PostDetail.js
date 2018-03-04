import React, { Component } from 'react';
import { Row, Col, Button, Icon, Input } from 'react-materialize';
import DeleteModal from './DeleteModal';
import { Link } from 'react-router-dom';
import Post from './Post';
import Loading from './Loading';
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import {
    getPostDetail
} from "../reducers";

class PostDetailCard extends Component {

    componentDidMount() {
        this.props.getPostDetail(this.props.match.params.postDetailId, this.props.match.params.category);
    }

    render() {
        const { postDetail, loading } = this.props;

        return (
            <div>
                {!loading && postDetail ? (
                    <ul className='p-2'>
                        <Post postDetail={postDetail} />
                    </ul>
                ) : ""}
                {loading ? (
                    <Loading />
                ) : ""}
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    loading: state.reducer.loading,
    postDetail: state.reducer.postDetail
});

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        getPostDetail
    }, dispatch)
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PostDetailCard)