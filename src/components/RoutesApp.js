import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import HomePage from './HomePage';
import Header from './Header';
import CommentPage from './CommentPage';
import { ConnectedRouter } from "react-router-redux";
import {
    getAllByCategory, getCategories
} from "../reducers";

class RoutesApp extends Component {
    render() {
        return (
            <ConnectedRouter history={this.props.browserHistory} >
                <div>
                    <Header />
                    <Route exact path="/" render={() => (
                        <HomePage byCategory={false} />
                    )} />
                    <Route exact path="/comments/:postId" component={CommentPage} />
                    <Route exact path="/:category" render={() => (
                        <HomePage byCategory={true} />
                    )} />
                </div>
            </ConnectedRouter>
        );
    }
}

export default RoutesApp
