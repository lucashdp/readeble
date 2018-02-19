import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import HomePage from './HomePage';
import { ConnectedRouter } from "react-router-redux";

class RoutesApp extends Component {
    render() {
        return (
            <ConnectedRouter history={this.props.browserHistory} >
                <div>
                    <Route exact path="/" component={HomePage} />
                </div>
            </ConnectedRouter>
        );
    }
}

export default RoutesApp;
