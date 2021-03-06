import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import { Navbar, NavItem, Button } from 'react-materialize';
import {
    getCategories, orderByVotes, orderByDate
} from "../reducers";

class Header extends Component {
    componentDidMount() {
        this.props.getCategories();
    }

    render() {
        const { loading, categories, orderByVotes, orderByDate, orderAscending, orderAscendingDate, path } = this.props;

        return (
            <div>
                {!loading ? (
                    <div>
                        <Navbar className="blue" left>
                            <NavItem href='/' key='/'><i className="material-icons">&#xE88A;</i></NavItem>
                            {(categories !== undefined && categories.length > 0) ?
                                categories.map((category) => (
                                    <NavItem href={'/' + category.path} key={'/' + category.path}>{category.name}</NavItem>
                                )) : ""}
                        </Navbar>
                        <div className="p-1" hidden={path !== ""}>
                            <Button className="white-text blue p-0" onClick={() => { orderByVotes(!orderAscending) }}>
                                <i className={orderAscending ? 'material-icons rotate-180' : 'material-icons'}>&#xE164;</i>Order By Votes
                            </Button>
                        </div>
                        <div className="p-1" hidden={path !== ""}>
                            <Button className="white-text blue p-0" onClick={() => { orderByDate(!orderAscendingDate) }}>
                                <i className={orderAscendingDate ? 'material-icons rotate-180' : 'material-icons'}>&#xE164;</i>Order By Date
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
    path: state.router.location.pathname.substring(1),
    orderAscending: state.reducer.orderAscending,
    orderAscendingDate: state.reducer.orderAscendingDate
});

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        getCategories,
        orderByVotes,
        orderByDate
    }, dispatch)
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Header)