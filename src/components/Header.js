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
        const { loading, categories, orderByVotes, orderAscending } = this.props;

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
                        </Navbar>
                        <div className="p-1">
                            <Button className="white-text blue p-0" onClick={() => { orderByVotes(!orderAscending) }}>
                                <i className={orderAscending ? 'material-icons rotate-180' : 'material-icons'}>&#xE164;</i>Order By Votes
                            </Button>
                        </div>
                    </div>
                ) : ""}
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    categories: state.reducer.categories,
    orderAscending: state.reducer.orderAscending
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