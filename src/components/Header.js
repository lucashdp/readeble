import React, { Component } from 'react';
import Post from './Post';
import PostModal from './PostModal';
import Loading from './Loading';
import { connect } from 'react-redux';
import * as ReadebleAPI from '../utils/ReadebleAPI';
import { bindActionCreators } from "redux";
import { Navbar, NavItem } from 'react-materialize';
import {
    getCategories
} from "../reducers";

class Header extends Component {
    componentDidMount() {
        this.props.getCategories();
    }

    render() {
        const { loading, categories } = this.props;

        return (
            <div>
                {!loading ? (
                    <Navbar className="blue" left>
                        <NavItem href='/'><i class="material-icons">&#xE88A;</i></NavItem>
                        {(categories != undefined && categories.length > 0) ?
                            categories.map((category) => (
                                <NavItem href={'/' + category.path}>{category.name}</NavItem>
                            )) : ""}
                    </Navbar>
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
        getCategories
    }, dispatch)
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Header)