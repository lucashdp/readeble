import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import HomePage from './HomePage';
import Header from './Header';
import PostDetail from './PostDetail';
import { ConnectedRouter } from "react-router-redux";

class RoutesApp extends Component {
    render() {
        return (
            <ConnectedRouter history={this.props.browserHistory} >
                <div>
                    <Header />
                    <Route exact path="/" render={() => (
                        <HomePage byCategory={false} />
                    )} />
                    <Route exact path="/:category" render={() => (
                        <HomePage byCategory={true} />
                    )} />
                    <Route exact path="/:category/:postDetailId" component={PostDetail} />
                </div>
            </ConnectedRouter>
        );
    }
}

export default RoutesApp
