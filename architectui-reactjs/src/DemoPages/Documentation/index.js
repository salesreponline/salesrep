import React, {Fragment} from 'react';
import {Route} from 'react-router-dom';

// APPLICATIONS

import MainDocumentation from './Content/Main';

// Layout

import AppHeader from '../../Layout/AppHeader/';
import AppSidebar from '../../Layout/AppSidebar/';
import AppFooter from '../../Layout/AppFooter/';

// Theme Options
import ThemeOptions from '../../Layout/ThemeOptions/';

const Documentation = ({match}) => (
    <Fragment>
        <ThemeOptions/>
        <AppHeader/>
        <div className="app-main">
            <AppSidebar/>
            <div className="app-main__outer">
                <div className="app-main__inner p-0">
                    <Route path={`${match.url}/main`} component={MainDocumentation}/>
                </div>
                <div className="app-wrapper-footer">
                    <AppFooter/>
                </div>
            </div>
        </div>
    </Fragment>
);

export default Documentation;