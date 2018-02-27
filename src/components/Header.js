import React, { Component } from 'react';
import Post from './Post';
import PostModal from './PostModal';
import Loading from './Loading';
import { connect } from 'react-redux';
import * as ReadebleAPI from '../utils/ReadebleAPI';
import { bindActionCreators } from "redux";
import { Navbar, NavItem, Dropdown, Button } from 'react-materialize';
import {
    getCategories, orderByVotes
} from "../reducers";

class Header extends Component {
    componentDidMount() {
        this.props.getCategories();
    }

    render() {
        const { loading, categories, orderByVotes } = this.props;

        return (
            <div>
                {!loading ? (
                    <div>
                        <Navbar className="blue" left>
                            <NavItem href='/'><i className="material-icons">&#xE88A;</i></NavItem>
                            {(categories != undefined && categories.length > 0) ?
                                categories.map((category) => (
                                    <NavItem href={'/' + category.path}>{category.name}</NavItem>
                                )) : ""}
                            <Button className="white-text blue right" onClick={() => { orderByVotes() }}>
                                <i className="material-icons right">&#xE152;</i>Order By Votes
                            </Button>
                        </Navbar>
                    </div>
                ) : ""}
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    categories: state.reducer.categories
});

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        getCategories,
        orderByVotes
    }, dispatch)
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Header)