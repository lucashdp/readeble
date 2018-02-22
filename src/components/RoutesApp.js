import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import HomePage from './HomePage';
import CommentPage from './CommentPage';
import { ConnectedRouter } from "react-router-redux";

class RoutesApp extends Component {
    render() {
        return (
            <ConnectedRouter history={this.props.browserHistory} >
                <div>
                    <Route exact path="/" component={HomePage} />
                    <Route exact path="/comments/:postId" component={CommentPage} />
                </div>
            </ConnectedRouter>
        );
    }
}

export default RoutesApp;
