import React, {Fragment, Component} from "react";
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import PageTitleAlt from '../../../Layout/AppMain/PageTitleAlt';

import Sticky from 'react-stickynode';

import cx from 'classnames';
import Hamburger from 'react-hamburgers';

import {
    TabContent, TabPane, DropdownItem,
    Table, CardBody, CardTitle,
    Card, Col, Row,
    Button
} from 'reactstrap';

import {Light as SyntaxHighlighter} from "react-syntax-highlighter";
import {monokai} from 'react-syntax-highlighter/dist/cjs/styles/hljs';

import scss from 'react-syntax-highlighter/dist/cjs/languages/hljs/scss';
import js from 'react-syntax-highlighter/dist/cjs/languages/hljs/javascript';

import classnames from 'classnames';

import DocItem from './DocItem';

import ColorSwatches from '../../Elements/Utilities/Examples/ColorStates/ColorSolids';
import ColorGradients from '../../Elements/Utilities/Examples/ColorStates/ColorGradients';

import bg1 from '../../../assets/architect/utils/images/sidebar/abstract1.jpg';
import bg2 from '../../../assets/architect/utils/images/sidebar/abstract2.jpg';
import bg3 from '../../../assets/architect/utils/images/sidebar/abstract3.jpg';
import bg4 from '../../../assets/architect/utils/images/sidebar/abstract4.jpg';
import bg5 from '../../../assets/architect/utils/images/sidebar/abstract5.jpg';
import bg6 from '../../../assets/architect/utils/images/sidebar/abstract6.jpg';
import bg7 from '../../../assets/architect/utils/images/sidebar/abstract7.jpg';
import bg8 from '../../../assets/architect/utils/images/sidebar/abstract8.jpg';
import bg9 from '../../../assets/architect/utils/images/sidebar/abstract9.jpg';
import bg10 from '../../../assets/architect/utils/images/sidebar/abstract10.jpg';
import bg11 from '../../../assets/architect/utils/images/sidebar/city1.jpg';
import bg12 from '../../../assets/architect/utils/images/sidebar/city2.jpg';
import bg13 from '../../../assets/architect/utils/images/sidebar/city3.jpg';
import bg14 from '../../../assets/architect/utils/images/sidebar/city4.jpg';
import bg15 from '../../../assets/architect/utils/images/sidebar/city5.jpg';

SyntaxHighlighter.registerLanguage('scss', scss);
SyntaxHighlighter.registerLanguage('javascript', js);


const navCompExample = `


import React, {Fragment} from 'react';
import {Route} from 'react-router-dom';

// Demo Sections

import Components from '../../DemoPages/Components/';
import Elements from '../../DemoPages/Elements/';
import Widgets from '../../DemoPages/Widgets/';


const AppMain = () => {

    return (
        <Fragment>
            <Route path="/components" component={Components}/>
            <Route path="/elements" component={Elements}/>
            <Route path="/widgets" component={Widgets}/>

        </Fragment>
    )
};

export default AppMain;


`;


const verticalNavWrapperCode = `
import React, {Component, Fragment} from 'react';
import {withRouter} from 'react-router-dom';

import MetisMenu from 'react-metismenu';

import {MainNav, ComponentsNav, FormsNav, WidgetsNav, ChartsNav} from './NavItems';

class Nav extends Component {

    state = {};

    render() {
        return (
            <Fragment>
                <h5 className="app-sidebar__heading">Menu</h5>
                <MetisMenu content={MainNav} activeLinkFromLocation className="vertical-nav-menu" iconNamePrefix="" classNameStateIcon="pe-7s-angle-down"/>
                <h5 className="app-sidebar__heading">UI Components</h5>
                <MetisMenu content={ComponentsNav} activeLinkFromLocation className="vertical-nav-menu" iconNamePrefix="" classNameStateIcon="pe-7s-angle-down"/>
                <h5 className="app-sidebar__heading">Dashboard Widgets</h5>
                <MetisMenu content={WidgetsNav} activeLinkFromLocation className="vertical-nav-menu" iconNamePrefix="" classNameStateIcon="pe-7s-angle-down"/>
                <h5 className="app-sidebar__heading">Forms</h5>
                <MetisMenu content={FormsNav} activeLinkFromLocation className="vertical-nav-menu" iconNamePrefix="" classNameStateIcon="pe-7s-angle-down"/>
                <h5 className="app-sidebar__heading">Charts</h5>
                <MetisMenu content={ChartsNav} activeLinkFromLocation className="vertical-nav-menu" iconNamePrefix="" classNameStateIcon="pe-7s-angle-down"/>
            </Fragment>
        );
    }

    isPathActive(path) {
        return this.props.location.pathname.startsWith(path);
    }
}

export default withRouter(Nav);

`;

const baseNavMenuArray = `

export const MainNav = [{
    icon: 'pe-7s-rocket',
    label: 'Dashboards',
    content: [
        {
            label: 'Commerce',
            to: '#/dashboards/commerce',
        },
        {
            label: 'Analytics',
            to: '#/dashboards/analytics',
        },
        {
            label: 'Sales',
            to: '#/dashboards/sales',
        },
        {
            label: 'CRM',
            to: '#/dashboards/crm',
        }
    ],
},
    {
        icon: 'pe-7s-browser',
        label: 'Pages',
        content: [
            {
                label: 'Login',
                to: '#/pages-login',
            },
            {
                label: 'Login Boxed',
                to: '#/pages-login-boxed',
            },
            {
                label: 'Register',
                to: '#/pages-register',
            },
            {
                label: 'Register Boxed',
                to: '#/pages-register-boxed',
            },
            {
                label: 'Forgot Password',
                to: '#/pages-forgot-password',
            },
            {
                label: 'Forgot Password Boxed',
                to: '#/pages-forgot-password-boxed',
            },
        ],
    },
    {
        icon: 'pe-7s-plugin',
        label: 'Applications',
        content: [
            {
                label: 'Mailbox',
                to: '#/apps/mailbox',
            },
            {
                label: 'Chat',
                to: '#/apps/chat',
            },
            {
                label: 'Split Layout',
                to: '#/apps/split-layout',
            },
            {
                label: 'FAQ Section',
                to: '#/apps/faq-section',
            },
        ],
    },
];
export const FormsNav = [
    {
        icon: 'pe-7s-light',
        label: 'Elements',
        content: [
            {
                label: 'Controls',
                to: '#/components/forms-controls',
            },
            {
                label: 'Layouts',
                to: '#/components/forms-layouts',
            },
            {
                label: 'Validation',
                to: '#/components/forms-validation',
            },
            {
                label: 'Wizard',
                to: '#/components/forms-wizard',
            },
            {
                label: 'Sticky Form Headers',
                to: '#/components/forms-sticky-headers',
            },
        ],
    },
    {
        icon: 'pe-7s-joy',
        label: 'Widgets',
        content: [
            {
                label: 'Datepicker',
                to: '#/components/forms-datepicker',
            },
            {
                label: 'Range Slider',
                to: '#/components/forms-range-slider',
            },
            {
                label: 'Input Selects',
                to: '#/components/forms-input-selects',
            },
            {
                label: 'Toggle Switch',
                to: '#/components/forms-toggle-switch',
            },
            {
                label: 'Dropdowns',
                to: '#/components/forms-dropdown',
            },
            {
                label: 'WYSIWYG Editor',
                to: '#/components/forms-wysiwyg-editor',
            },
            {
                label: 'Input Mask',
                to: '#/components/forms-input-mask',
            },
            {
                label: 'Typeahead',
                to: '#/components/forms-typeahead',
            },
            {
                label: 'Clipboard',
                to: '#/components/forms-clipboard',
            },
            {
                label: 'Textarea Autosize',
                to: '#/components/forms-textarea-autosize',
            },
            {
                label: 'Number Spinners',
                to: '#/components/forms-numberspinners',
            },
            {
                label: 'Color Picker',
                to: '#/components/forms-color-picker',
            },
            {
                label: 'Dropzone',
                to: '#/components/forms-dropzone',
            },
        ],
    },

];
export const WidgetsNav = [
    {
        icon: 'pe-7s-graph2',
        label: 'Chart Boxes',
        content: [
            {
                label: 'Variation 1',
                to: '#/widgets/chart-boxes',
            },
            {
                label: 'Variation 2',
                to: '#/widgets/chart-boxes-2',
            },
            {
                label: 'Variation 3',
                to: '#/widgets/chart-boxes-3',
            },
        ]
    },
    {
        icon: 'pe-7s-id',
        label: 'Profile Boxes',
        to: '#/widgets/profile-boxes',
    },
    {
        icon: 'pe-7s-display1',
        label: 'Content Boxes',
        to: '#/widgets/content-boxes',
    },
];

`;

const baseStyleSheet = `
// Calendar
@import "architect/components/calendar/calendar";

// Splitters
@import "architect/components/splitters/splitters";

// Tree View
// @import "architect/components/tree-view/tree-view";

// Tables
@import "architect/components/tables/tables";

// Icons
@import "architect/components/icons/linearicons";
@import "architect/components/icons/p7icons";

// FORMS

@import "architect/components/forms/datepicker/datepicker";
@import "architect/components/forms/rangeslider/rangeslider";
@import "architect/components/forms/multiselect/multiselect";
@import "architect/components/forms/wysiwyg/wysiwyg";
@import "architect/components/forms/toggle-switch/switch";
@import "architect/components/forms/dropzone/dropzone";
@import "architect/components/forms/typeahead/typeahead";
`;

const variablesStylesheet = `

// Colors

$white: #fff;
$gray-100: #f8f9fa;
$gray-200: #e9ecef;
$gray-300: #dee2e6;
$gray-400: #ced4da;
$gray-500: #adb5bd;
$gray-600: #6c757d;
$gray-700: #495057;
$gray-800: #343a40;
$gray-900: #212529;
$black: #000;

$grays: ();

$grays: map-merge(
    (
            "100": $gray-100,
            "200": $gray-200,
            "300": $gray-300,
            "400": $gray-400,
            "500": $gray-500,
            "600": $gray-600,
            "700": $gray-700,
            "800": $gray-800,
            "900": $gray-900
    ),
    $grays
);

//--#{$color}
$brand: #3f6ad8;
$blue: #78C3FB;
$indigo: #444054;
$purple: #794c8a;
$pink: #f65ca2;
$red: #d92550;
$orange: #fd7e14;
$yellow: #f7b924;
$green: #3ac47d;
$teal: #16E0BD;
$cyan: #28b0cd;
$blue-light: #eeeeee;

$primary: $brand;
$secondary: $gray-600;
$success: $green;
$info: $cyan;
$warning: $yellow;
$danger: $red;
$light: $blue-light;
$dark: $gray-800;
$focus: $indigo;
$alt: $purple;

$theme-colors: ();

$theme-colors: map-merge(
      (
              "primary": $primary,
              "secondary": $secondary,
              "success": $success,
              "info": $info,
              "warning": $warning,
              "danger": $danger,
              "light": $light,
              "dark": $dark,
              "focus": $focus,
              "alternate": $alt
      ),
      $theme-colors
);

    `;

export default class MainDocumentation extends Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            activeTab: '1',
            active: false
        };

    }

    toggle(tab) {
        if (this.state.activeTab !== tab) {
            this.setState({
                activeTab: tab
            });
        }
    }

    render() {
        return (
            <Fragment>
                <ReactCSSTransitionGroup
                    className={cx("app-inner-layout chat-layout", {
                        'open-mobile-menu': this.state.active,
                    })}
                    component="div"
                    transitionName="TabsAnimation"
                    transitionAppear={true}
                    transitionAppearTimeout={0}
                    transitionEnter={false}
                    transitionLeave={false}>
                    <Sticky enabled={!this.state.active} top='.app-header' innerZ="12" activeClass="sticky-active-class">
                        <div className="app-inner-layout__header text-white bg-premium-dark">
                            <PageTitleAlt
                                heading="Documentation"
                                subheading="If you have questions, don't hesitate to email us at contact@architectui.com"
                                icon="pe-7s-umbrella text-white"
                            />
                        </div>
                    </Sticky>
                    <div className="app-inner-layout__wrapper row-fluid no-gutters">
                        <Card className="app-inner-layout__sidebar bg-transparent">
                            <Sticky enabled={!this.state.active} top={180} innerZ="15">
                                <div className="p-3">
                                    <div className="dropdown-menu p-0 dropdown-menu-inline dropdown-menu-rounded dropdown-menu-hover-primary">
                                        <DropdownItem header className="pt-0">
                                            Fixed Menu
                                        </DropdownItem>
                                        <DropdownItem
                                            className={classnames("mb-1", {active: this.state.activeTab === '1'})}
                                            onClick={() => {
                                                this.toggle('1');
                                            }}>
                                            Introduction
                                        </DropdownItem>
                                        <DropdownItem
                                            className={classnames("mb-1", {active: this.state.activeTab === '3'})}
                                            onClick={() => {
                                                this.toggle('3');
                                            }}>
                                            File Structure
                                        </DropdownItem>
                                        <DropdownItem
                                            className={classnames("mb-1", {active: this.state.activeTab === '4'})}
                                            onClick={() => {
                                                this.toggle('4');
                                            }}>
                                            Stylesheets
                                        </DropdownItem>
                                        <DropdownItem
                                            className={classnames("mb-1", {active: this.state.activeTab === '5'})}
                                            onClick={() => {
                                                this.toggle('5');
                                            }}>
                                            Theming & Colors
                                        </DropdownItem>
                                        <DropdownItem
                                            className={classnames("mb-1", {active: this.state.activeTab === '6'})}
                                            onClick={() => {
                                                this.toggle('6');
                                            }}>
                                            React Components
                                        </DropdownItem>
                                        <DropdownItem
                                            className={classnames("mb-1", {active: this.state.activeTab === '7'})}
                                            onClick={() => {
                                                this.toggle('7');
                                            }}>
                                            Layout Modifiers
                                        </DropdownItem>
                                        <DropdownItem
                                            className={classnames("mb-1", {active: this.state.activeTab === '9'})}
                                            onClick={() => {
                                                this.toggle('9');
                                            }}>
                                            Routing & Navigation
                                        </DropdownItem>
                                        <DropdownItem
                                            className={classnames("mb-1", {active: this.state.activeTab === '8'})}
                                            onClick={() => {
                                                this.toggle('8');
                                            }}>
                                            Technical Support
                                        </DropdownItem>
                                    </div>
                                </div>
                            </Sticky>
                        </Card>
                        <Card className="app-inner-layout__content">
                            <div className="pb-5 pl-5 pr-5 pt-3">
                                <div className="mobile-app-menu-btn mb-3">
                                    <Hamburger
                                        active={this.state.active}
                                        type="elastic"
                                        onClick={() => this.setState({active: !this.state.active})}
                                    />
                                </div>
                                <TabContent activeTab={this.state.activeTab}>
                                    <TabPane tabId="1">
                                        <h4>Introduction</h4>
                                        <div className="divider"/>
                                        <p>The ArchitectUI React Framework is built on top of
                                            <code>create-react-app</code> and utilizes the latest versions of the React
                                            plugins included in the package.</p>
                                        <p>Thanks to <code>create-react-app</code>. The ArchitectUI comes bundled and
                                            pre-configured with Webpack and Babel so you don't have to lose time setting
                                            those up.</p>
                                        <p>For stylesheets it uses SASS which allowed us to build a better, more modal
                                            and scalable styles architecture. The modular SCSS files are compiled,
                                            minified and bundled automatically using Webpack.</p>
                                        <p>
                                            All styles are standardised using <code>react-strap</code> which is a Bootstrap 4 port for ReactJS.
                                        </p>

                                        <div className="divider"/>

                                        <h4>Installation</h4>
                                        <ol>
                                            <li>
                                                <p>Download and uncompress the theme package archive in your desired
                                                    folder location.</p>
                                            </li>
                                            <li>
                                                <p>Download and install <b>Node.js</b> from <a
                                                    href="https://nodejs.org/en/download/" target="_blank">nodejs.org/en/download/</a>
                                                </p>
                                            </li>
                                            <li>
                                                <p>Install the latest version of <code>npm</code>. This will be useful
                                                    when running all the build commands. Run the following in a command
                                                    line, either your IDE's Terminal window or in a Windows Command
                                                    Prompt.</p>
                                                <SyntaxHighlighter style={monokai} language='javascript'>
                                                    npm install --global npm@latest
                                                </SyntaxHighlighter>
                                            </li>
                                            <li>
                                                <p>Install the app dependencies by running the following command in the
                                                    command line inside the
                                                    folder root where you have unzipped the theme package archive.</p>
                                                <SyntaxHighlighter style={monokai} language='javascript'>
                                                    npm install
                                                </SyntaxHighlighter>
                                            </li>
                                            <li>
                                                <p>After npm finishes installing the modules from
                                                    <code>package.json</code> you can go ahead and start the
                                                    application. To do so, run the command below.</p>
                                                <p>You can also use <code>yarn</code> to install dependencies instead of
                                                    <code>npm</code>. Find out more following the official
                                                    create-react-app documentation <a
                                                        href="https://github.com/facebook/create-react-app"
                                                        target="_blank">here</a>.</p>
                                                <SyntaxHighlighter style={monokai} language='javascript'>
                                                    npm run start
                                                </SyntaxHighlighter>
                                                <p>After the comand finished, you should see a <span
                                                    className="text-success">Compiled successfully!</span> message in your
                                                    terminal window. Also, a web server service will be started so you
                                                    can view your app in the browser: <code>http://localhost:3000</code>
                                                </p>

                                            </li>
                                            <li>
                                                <p>To create a production optimised build run the command below:</p>
                                                <SyntaxHighlighter style={monokai} language='javascript'>
                                                    npm run build
                                                </SyntaxHighlighter>
                                                <p>This created another folder in the root of your project named <code>build</code>.
                                                    You'll have an option to start a local web server to view your newly
                                                    created production build.</p>
                                            </li>
                                        </ol>
                                        <div className="mt-5"/>
                                        <div className="clearfix">
                                            <div className="text-center">
                                                <Button color="primary" size="lg"
                                                        className="btn-pill btn-wide btn-shadow" onClick={() => {
                                                    this.toggle('3');
                                                }}>
                                                    Next: <b>Files Structure</b>
                                                </Button>
                                            </div>
                                        </div>
                                    </TabPane>
                                    <TabPane tabId="3">
                                        <h4>File Structure</h4>
                                        <div className="divider"/>
                                        <Table bordered hover responsive>
                                            <thead>
                                            <tr>
                                                <th style={{width: '250px'}}>Folder Path</th>
                                                <th>Description</th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            <tr>
                                                <td>
                                                    <code>src</code>
                                                </td>
                                                <td>
                                                    Holds all the project source files
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    ├<code>assets</code>
                                                </td>
                                                <td>
                                                    <code>base.scss</code> is the main stylesheet that imports all other
                                                    stylesheets for components, elements, layouts and widgets.
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    ├─<code>architect</code>
                                                </td>
                                                <td>
                                                    Contains The ArchitectUI Framework source SCSS stylesheets files.
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    ├<code>DemoPages</code>
                                                </td>
                                                <td>
                                                    In this folder you can find all the examples from the demo. This is
                                                    useful if you want to copy paste snippets of code from the theme
                                                    demo.
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    ├─<code>Applications</code>
                                                </td>
                                                <td>
                                                    Applications examples, found in the Demo navigation under
                                                    "Applications" submenu.
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    ├─<code>Components</code>
                                                </td>
                                                <td>
                                                    Components examples, found in the Demo navigation under "Components"
                                                    submenu.
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    ├──<code>Form</code>
                                                </td>
                                                <td>
                                                    Forms elements and components examples, found in the Demo navigation
                                                    under "Forms"
                                                    section. They are splitted between the following sub-directories
                                                    <code>Components</code> and <code>Elements</code>.
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    ├──<code>Charts</code>
                                                </td>
                                                <td>
                                                    Charts elements and components examples, found in the Demo navigation
                                                    under "Charts"
                                                    section.
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    ├── <code>[...]</code>
                                                </td>
                                                <td>
                                                    Other components examples that don't have a parent folder. For example, Accordion, Calendar, Pagination, Progress Bar, etc
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    ├─<code>Dashboards</code>
                                                </td>
                                                <td>
                                                    Dashboards examples, found in the Demo navigation under "Dashboards"
                                                    submenu.
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    ├─<code>Elements</code>
                                                </td>
                                                <td>
                                                    Elements examples, found in the Demo navigation under "Elements"
                                                    submenu.
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    ├─<code>Documentation</code>
                                                </td>
                                                <td>
                                                    This documentation section.
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    ├─<code>Main</code>
                                                </td>
                                                <td>
                                                    This contains the main app component wrapper. All others pass
                                                    through this component. It also holds the <code>div</code> that
                                                    accepts layout modifiers like <code>fided-sidebar</code>, <code>fixed-footer</code>,
                                                    etc
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    ├─<code>UserPages</code>
                                                </td>
                                                <td>
                                                    Pages examples, found in the Demo navigation under "Pages"
                                                    submenu.
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    ├─<code>Widgets</code>
                                                </td>
                                                <td>
                                                    Widgets examples, found in the Demo navigation under "Dashboard
                                                    Widgets"
                                                    section.
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    ├<code>Layout</code>
                                                </td>
                                                <td>
                                                    This folder holds all the components that build the page layout wrapper.
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    ├<code>reducers</code>
                                                </td>
                                                <td>
                                                    This folder holds all the theme's demo configuration. This can be removed if you don't want to use the theme configurator accessible from the yellow right bottom cog button.
                                                </td>
                                            </tr>
                                            </tbody>
                                        </Table>

                                        <div className="mt-5"/>
                                        <div className="clearfix">
                                            <div className="text-center">
                                                <Button color="primary" size="lg"
                                                        className="btn-pill btn-wide btn-shadow" onClick={() => {
                                                    this.toggle('4');
                                                }}>
                                                    Next: <b>Stylesheets</b>
                                                </Button>
                                            </div>
                                        </div>
                                    </TabPane>
                                    <TabPane tabId="4">
                                        <h4>Stylesheets</h4>
                                        <div className="divider"/>
                                        <p>
                                            All ArchitectUI stylesheets can be found in <code>/src/assets/</code>.
                                        </p>
                                        <p>
                                            From <code>base.scss</code> you can choose for what elements, components,
                                            widgets stylesheets to include in your application.
                                        </p>
                                        <p>
                                            For Example, if you won't be using the <code>Sortable Tree</code> component, you can remove it's associated SCSS file by commenting out the import line like in the example below:
                                        </p>
                                        <div className="scroll-area-sm mb-3">
                                            <SyntaxHighlighter style={monokai} language='scss'>
                                                {baseStyleSheet}
                                            </SyntaxHighlighter>
                                        </div>
                                        <p>
                                            All components use the same variables for spacing or styling. We'll talk about style customization in the next section: <b>Theming & Colors</b>.
                                        </p>
                                        <p>
                                            The <b>React Components</b> section contains the paths of SCSS files associated with each React component that's included in ArchitectUI.
                                        </p>
                                        <p>
                                            Inside <code>/src/assets/architect/</code>, folders are structured in a logical manner based on the element or component type, so you can easily find or remove the respective element or component. For
                                            example, all Bootstrap 4 related stylesheets can be found under <code>/architect/components/bootstrap4/</code>.
                                        </p>
                                        <p>
                                            Also, inside <code>/src/assets/architect/</code> you'll find a folder called <code>demo-ui</code>. This contains theme demo specific SCSS and should be removed in a live application because some of the
                                            styles written there are appliable for demo purposes only.
                                        </p>

                                        <h5>Layout Stylesheets</h5>
                                        <p>
                                            Layout stylesheets are located under <code>/src/assets/architect/layout</code> folder. Inside you'll find folders logically split between the layout components: Layout Header, Sidebar, Main Content Area and
                                            so on.
                                        </p>
                                        <p>
                                            Let's take the Header section as an example. Inside <code>/layout/header/</code> folder you'll find two subfolders <code>/modifiers</code> and <code>/themes</code>.
                                        </p>
                                        <p>
                                            The <code>_header-base.scss</code> contains some generic styling for the layout header component and all the imports from those two sub-folders.
                                        </p>
                                        <ol>
                                            <li>
                                                <p><code>/modifiers/</code> - this folder contains all the modifiers for the header like <code>fixed-header</code> and also, the header components.</p>
                                            </li>
                                            <li>
                                                <p><code>/themes/</code> - based on the color choosen for the header component background, you can choose one of the two themes available:</p>
                                                <ul>
                                                    <li><code>_header-light.scss</code> - should be used with a darker background color, this way the texts and icons will have a light color contrast</li>
                                                    <li><code>_header-dark.scss</code> - should be used with a lighter background color, this way the texts and icons will have a dark color contrast</li>
                                                </ul>

                                            </li>
                                        </ol>
                                        <p>The <code>/themes/</code> folder can be found for the following layout components: <b>header</b>, <b>sidebar</b> and <b>main</b></p>

                                        <div className="mt-5"/>
                                        <div className="clearfix">
                                            <div className="text-center">
                                                <Button color="primary" size="lg"
                                                        className="btn-pill btn-wide btn-shadow" onClick={() => {
                                                    this.toggle('5');
                                                }}>
                                                    Next: <b>Theming & Colors</b>
                                                </Button>
                                            </div>
                                        </div>
                                    </TabPane>
                                    <TabPane tabId="5">
                                        <h4>Theming & Colors</h4>
                                        <div className="divider"/>
                                        <p>
                                            ArchitectUI is built in a modalar and scalable manner. This means that you can easily modify theme variables and they will get propagated thorugh out the whole stylesheets architecture.
                                        </p>
                                        <p>
                                            ArchitectUI is build around the latest version of <code>Bootstrap 4</code> and respectively <code>reactstrap</code> (which is a React port of Bootstrap 4).
                                        </p>
                                        <p>
                                            All generic theme variables can be found in <code>/src/assets/architect/themes/_variables.scss</code>.
                                        </p>
                                        <p>
                                            To modify, for example, the generic colors scheme for common states like success, warning, primary, danger, info and so on, you'll have to modify the <code>_variables.scss</code> file as follows:
                                        </p>
                                        <div className="scroll-area-sm mb-3">
                                            <SyntaxHighlighter style={monokai} language='scss'>
                                                {variablesStylesheet}
                                            </SyntaxHighlighter>
                                        </div>

                                        <h4>
                                            Layout Components Styles
                                        </h4>
                                        <div className="divider"/>
                                        <h6 className="text-primary">Sidebar</h6>
                                        <p>You can modify the <b>Sidebar</b> component background style by adding one of the below CSS helpers to the <code>.app-sidebar</code> component. For example, if you want ot have a green style sidebar, you'll
                                            have to add <code>bg-success</code> as a CSS class to the div that has the <code>app-sidebar</code> CSS class.</p>

                                        <ol>
                                            <li>
                                                <p><code>src/assets/architect/layout/sidebar/themes/</code> - based on the color chosen for the sidebar component background, you can choose one of the two themes available:</p>
                                                <ul>
                                                    <li>
                                                        <code>_sidebar-light.scss</code> - should be used with a darker background color, this way the texts and icons will have a light color contrast
                                                        <p>The CSS class that needs to be applied to <code>.app-sidebar</code> is <code>text-sidebar-light</code>.</p>
                                                    </li>
                                                    <li>
                                                        <code>_sidebar-dark.scss</code> - should be used with a lighter background color, this way the texts and icons will have a dark color contrast
                                                        <p>The CSS class that needs to be applied to <code>.app-sidebar</code> is <code>text-sidebar-dark</code>.</p>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ol>
                                        <div className="divider"/>
                                        <h6 className="text-primary">Header</h6>
                                        <p>You can modify the <b>Header</b> component background style by adding one of the below CSS helpers to the <code>.app-header</code> component. For example, if you want ot have a warning state style header,
                                            you'll
                                            have to add <code>bg-warning</code> as a CSS class to the div that has the <code>app-header</code> CSS class.</p>

                                        <ol>
                                            <li>
                                                <p><code>src/assets/architect/layout/header/themes/</code> - based on the color chosen for the header component background, you can choose one of the two themes available:</p>
                                                <ul>
                                                    <li>
                                                        <code>_header-light.scss</code> - should be used with a darker background color, this way the texts and icons will have a light color contrast.
                                                        <p>The CSS class that needs to be applied to <code>.app-header</code> is <code>text-header-light</code>.</p>
                                                    </li>
                                                    <li>
                                                        <code>_header-dark.scss</code> - should be used with a lighter background color, this way the texts and icons will have a dark color contrast.
                                                        <p>The CSS class that needs to be applied to <code>.app-header</code> is <code>text-header-dark</code>.</p>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ol>
                                        <div className="divider"/>
                                        <h6 className="text-primary">Bootstrap 4 Variables</h6>
                                        <p>ArchitectUI comes with 9 different color schemes, located under <code>/assets/architect/themes/</code>.</p>
                                        <p>Stock, the default variables are loaded. To load a different color schemes for Bootstrap 4 variables, in <code>/assets/architect/themes/_layout-variables.scss</code>,
                                            comment out the default variables <code>@import "default/variables";</code> and uncomment a different variables scheme.</p>
                                        <div className="divider"/>
                                        <h6 className="text-primary">Colors Available</h6>
                                        <p>Hover over the color dots below to see what CSS class you need to apply for Header and Sidebar components for each style.</p>
                                        <p className="text-danger"><b>Remeber to use them in combination with _*-light.scss or _*-dark.scss</b></p>
                                        <Row>
                                            <Col md="6">
                                                <Card className="main-card mb-3">
                                                    <CardBody>
                                                        <CardTitle>Solid Colors</CardTitle>
                                                        <ColorSwatches/>
                                                    </CardBody>
                                                </Card>
                                            </Col>
                                            <Col md="6">
                                                <Card className="main-card mb-3">
                                                    <CardBody>
                                                        <CardTitle>Gradient Colors</CardTitle>
                                                        <ColorGradients/>
                                                    </CardBody>
                                                </Card>
                                            </Col>
                                        </Row>
                                        <div className="divider"/>
                                        <h4>Sidebar Background Images</h4>
                                        <p>You can define an image background that works together with the sidebar background colors to create beautiful app sidebar styles.</p>

                                        <p>Inside the Sidebar component with CSS class <code>app-sidebar</code> you'll find another element with CSS class <code>app-sidebar-bg</code>. You can define a background iamge for this element, which will
                                            integrate perfectly with any other sidebar styles you have deifned</p>

                                        <p>You can use one of the opacity CSS helpers integrated in ArchitectUI to create perfect effects. These opacity helpers can be found in <code>/src/assets/architect/utils/helpers/_opacity.scss</code>. Try using
                                            small opacity for best effects, like <code>opacity-05</code> for a 5% opacity.</p>

                                        <div className="divider"/>
                                        <h6 className="text-primary">Available SIdebar Images</h6>

                                        <div className="scroll-area-lg table-responsive scroll-area-x">
                                            <Row>
                                                <Col md="12">
                                                    <Card className="main-card mb-3">
                                                        <CardBody>
                                                            <Row>
                                                                <Col md="3">
                                                                    <div className="demo-image-bg"
                                                                         style={{
                                                                             backgroundImage: 'url(' + bg1 + ')'
                                                                         }}
                                                                    />
                                                                </Col>
                                                                <Col md="3">
                                                                    <div className="demo-image-bg"
                                                                         style={{
                                                                             backgroundImage: 'url(' + bg2 + ')'
                                                                         }}
                                                                    />
                                                                </Col>
                                                                <Col md="3">
                                                                    <div className="demo-image-bg"
                                                                         style={{
                                                                             backgroundImage: 'url(' + bg3 + ')'
                                                                         }}
                                                                    />
                                                                </Col>
                                                                <Col md="3">
                                                                    <div className="demo-image-bg"
                                                                         style={{
                                                                             backgroundImage: 'url(' + bg4 + ')'
                                                                         }}
                                                                    />
                                                                </Col>
                                                                <Col md="3">
                                                                    <div className="demo-image-bg"
                                                                         style={{
                                                                             backgroundImage: 'url(' + bg5 + ')'
                                                                         }}
                                                                    />
                                                                </Col>
                                                                <Col md="3">
                                                                    <div className="demo-image-bg"
                                                                         style={{
                                                                             backgroundImage: 'url(' + bg6 + ')'
                                                                         }}
                                                                    />
                                                                </Col>
                                                                <Col md="3">
                                                                    <div className="demo-image-bg"
                                                                         style={{
                                                                             backgroundImage: 'url(' + bg7 + ')'
                                                                         }}
                                                                    />
                                                                </Col>
                                                                <Col md="3">
                                                                    <div className="demo-image-bg"
                                                                         style={{
                                                                             backgroundImage: 'url(' + bg8 + ')'
                                                                         }}
                                                                    />
                                                                </Col>
                                                                <Col md="3">
                                                                    <div className="demo-image-bg"
                                                                         style={{
                                                                             backgroundImage: 'url(' + bg9 + ')'
                                                                         }}
                                                                    />
                                                                </Col>
                                                                <Col md="3">
                                                                    <div className="demo-image-bg"
                                                                         style={{
                                                                             backgroundImage: 'url(' + bg10 + ')'
                                                                         }}
                                                                    />
                                                                </Col>
                                                                <Col md="3">
                                                                    <div className="demo-image-bg"
                                                                         style={{
                                                                             backgroundImage: 'url(' + bg11 + ')'
                                                                         }}
                                                                    />
                                                                </Col>
                                                                <Col md="3">
                                                                    <div className="demo-image-bg"
                                                                         style={{
                                                                             backgroundImage: 'url(' + bg12 + ')'
                                                                         }}
                                                                    />
                                                                </Col>
                                                                <Col md="3">
                                                                    <div className="demo-image-bg"
                                                                         style={{
                                                                             backgroundImage: 'url(' + bg13 + ')'
                                                                         }}
                                                                    />
                                                                </Col>
                                                                <Col md="3">
                                                                    <div className="demo-image-bg"
                                                                         style={{
                                                                             backgroundImage: 'url(' + bg14 + ')'
                                                                         }}
                                                                    />
                                                                </Col>
                                                                <Col md="3">
                                                                    <div className="demo-image-bg"
                                                                         style={{
                                                                             backgroundImage: 'url(' + bg15 + ')'
                                                                         }}
                                                                    />
                                                                </Col>
                                                            </Row>


                                                        </CardBody>
                                                    </Card>
                                                </Col>
                                            </Row>
                                        </div>

                                        <div className="mt-5"/>
                                        <div className="clearfix">
                                            <div className="text-center">
                                                <Button color="primary" size="lg"
                                                        className="btn-pill btn-wide btn-shadow" onClick={() => {
                                                    this.toggle('6');
                                                }}>
                                                    Next: <b>React Components</b>
                                                </Button>
                                            </div>
                                        </div>
                                    </TabPane>
                                    <TabPane tabId="6">
                                        <h4>React Components</h4>
                                        <div className="divider"/>
                                        <p>All React Components from ArchitectUI are imported and maintained in <code>node_modules</code> from <code>package.json</code> located in the project root. </p>
                                        <p>For a better control, consistency, modularity and scalability, all style related resources are maintained and integrated from <code>/src/assets/architect/</code> folder.</p>
                                        <Row>
                                            <Col md="6">
                                                <DocItem
                                                    compTitle="ReactStrap"
                                                    compDocUrl="https://reactstrap.github.io/"
                                                    compDesc="Easy to use React Bootstrap 4 components"
                                                    demoExample="/src/DemoPages/Elements/"
                                                    stylePath="/src/assets/architect/components/bootstrap4"
                                                />

                                                <DocItem
                                                    compTitle="Block UI"
                                                    compDocUrl="https://availity.github.io/react-block-ui/"
                                                    compDesc="Easy way to block the user from interacting with your UI"
                                                    demoExample="/src/DemoPages/Components/BlockLoading/"
                                                    stylePath="/src/assets/architect/components/block-loading"
                                                />

                                                <DocItem
                                                    compTitle="Calendar"
                                                    compDocUrl="https://github.com/intljusticemission/react-big-calendar"
                                                    compDesc="An events calendar component built for React and made for modern browsers (read: IE10+) and uses flexbox over the classic tables-ception approach."
                                                    demoExample="/src/DemoPages/Components/Calendar/"
                                                    stylePath="/src/assets/architect/components/calendar"
                                                />

                                                <DocItem
                                                    compTitle="Slick Slider"
                                                    compDocUrl="https://github.com/akiran/react-slick"
                                                    compDesc="Carousel component built with React. It is a react port of Slick Carousel"
                                                    demoExample="/src/DemoPages/Components/Carousel/Slideshow/"
                                                    stylePath="/src/assets/architect/components/slick-carousel"
                                                />

                                                <DocItem
                                                    compTitle="CountUp"
                                                    compDocUrl="https://github.com/glennreyes/react-countup"
                                                    compDesc="A configurable React component wrapper around CountUp.js"
                                                    demoExample="/src/DemoPages/Components/CountUp/"
                                                    stylePath=""
                                                />

                                                <DocItem
                                                    compTitle="Sticky Headers"
                                                    compDocUrl="https://github.com/yahoo/react-stickynode"
                                                    compDesc="A performant and comprehensive React sticky component"
                                                    demoExample="/src/DemoPages/Components/Form/Elements/StickyHeaders/Examples/"
                                                    stylePath=""
                                                />

                                                <DocItem
                                                    compTitle="Layout Splitters"
                                                    compDocUrl="https://github.com/martinnov92/React-Splitters"
                                                    compDesc="React layout vertical and horizontal splitter component"
                                                    demoExample="/src/DemoPages/Applications/SplitLayout"
                                                    stylePath="/src/assets/architect/components/splitters"
                                                />

                                                <DocItem
                                                    compTitle="Sticky Elements"
                                                    compDocUrl="https://github.com/gm0t/react-sticky-el"
                                                    compDesc="Sticky library for React."
                                                    demoExample="/src/DemoPages/Components/StickyElements/Examples/"
                                                    stylePath="/src/assets/architect/components/sticky-elements"
                                                />

                                                <DocItem
                                                    compTitle="Guided Tours"
                                                    compDocUrl="https://github.com/elrumordelaluz/reactour"
                                                    compDesc="Tourist Guide into your React Components"
                                                    demoExample="/src/DemoPages/Components/GuidedTours/"
                                                    stylePath=""
                                                />

                                                <DocItem
                                                    compTitle="Image Cropper"
                                                    compDocUrl="https://github.com/DominicTobias/react-image-crop"
                                                    compDesc="A responsive image cropping tool for React"
                                                    demoExample="/src/DemoPages/Components/ImageCropper/"
                                                    stylePath=""
                                                />

                                                <DocItem
                                                    compTitle="Vector Maps"
                                                    compDocUrl="https://github.com/zcreativelabs/react-simple-maps"
                                                    compDesc="An svg map component built with and for React "
                                                    demoExample="/src/DemoPages/Components/Maps/Examples/VectorMaps"
                                                    stylePath=""
                                                />

                                                <DocItem
                                                    compTitle="Google Maps"
                                                    compDocUrl="https://github.com/google-map-react/google-map-react"
                                                    compDesc="Google map library for react that allows rendering components as markers"
                                                    demoExample="/src/DemoPages/Components/Maps/Examples/GoogleMaps"
                                                    stylePath=""
                                                />

                                                <DocItem
                                                    compTitle="Metis Menu"
                                                    compDocUrl="https://github.com/alpertuna/react-metismenu"
                                                    compDesc="A ready / simple to use, highly customizable, updateable, ajax supported, animated and material designed menu component for React"
                                                    demoExample="/src/Layout/AppNav"
                                                    stylePath="/src/assets/architect/layout/sidebar/modifiers/_navmenu-vertical.scss"
                                                />

                                                <DocItem
                                                    compTitle="Visibiliy Sensor"
                                                    compDocUrl="https://github.com/joshwnj/react-visibility-sensor"
                                                    compDesc="Sensor component for React that notifies you when it goes in or out of the window viewport."
                                                    demoExample="/src/DemoPages/Elements/ScreenVisibility"
                                                    stylePath=""
                                                />
                                            </Col>
                                            <Col md="6">
                                                <DocItem
                                                    compTitle="Rodal Modals"
                                                    compDocUrl="https://github.com/chenjiahan/rodal"
                                                    compDesc="A React modal with animations"
                                                    demoExample="/src/DemoPages/Components/Modal/Examples/"
                                                    stylePath="/src/assets/architect/components/modals"
                                                />

                                                <DocItem
                                                    compTitle="Sweet Alerts Notifications"
                                                    compDocUrl="https://github.com/chentsulin/sweetalert-react"
                                                    compDesc="Declarative SweetAlert in React"
                                                    demoExample="/src/DemoPages/Components/Notifications/Examples/SweetAlerts.js"
                                                    stylePath="/src/assets/architect/components/notifications/_sweetalerts.scss"
                                                />

                                                <DocItem
                                                    compTitle="Toastify Notifications"
                                                    compDocUrl="https://github.com/fkhadra/react-toastify"
                                                    compDesc="React notification made easy"
                                                    demoExample="/src/DemoPages/Components/Notifications/Examples/ToastifyAlerts.js"
                                                    stylePath="/src/assets/architect/components/notifications/_toastify.scss"
                                                />

                                                <DocItem
                                                    compTitle="Dynamic Pagination"
                                                    compDocUrl="https://github.com/cornflourblue/jw-react-pagination"
                                                    compDesc="React dynamic pagination component"
                                                    demoExample="/src/DemoPages/Components/Pagination/Examples/Dynamic.js"
                                                    stylePath="/src/assets/architect/elements/_pagination.scss"
                                                />

                                                <DocItem
                                                    compTitle="Advanced Progress Bars"
                                                    compDocUrl="https://github.com/zzarcon/react-circle"
                                                    compDesc="Renders a svg circle + progress, it just works"
                                                    demoExample="/src/DemoPages/Components/ProgressBar/Examples/Advanced/index.js"
                                                    stylePath="/src/assets/architect/components/progress-bar"
                                                />

                                                <DocItem
                                                    compTitle="Rating"
                                                    compDocUrl="https://github.com/dreyescat/react-rating"
                                                    compDesc="A rating react component with custom symbols."
                                                    demoExample="/src/DemoPages/Components/Ratings/Examples/"
                                                    stylePath=""
                                                />

                                                <DocItem
                                                    compTitle="Perfect Scrollbar"
                                                    compDocUrl="https://github.com/goldenyz/react-perfect-scrollbar"
                                                    compDesc="A react wrapper for perfect-scrollbar"
                                                    demoExample="/src/DemoPages/Components/ScrollableElements/Examples/"
                                                    stylePath="/src/assets/architect/components/perfect-scrollbar"
                                                />

                                                <DocItem
                                                    compTitle="Data Tables"
                                                    compDocUrl="https://react-table.js.org/#/story/readme"
                                                    compDesc="Lightweight, fast and extendable datagrid built for React"
                                                    demoExample="/src/DemoPages/Components/Tables/DataTables"
                                                    stylePath=""
                                                />

                                                <DocItem
                                                    compTitle="Filtrable Tables"
                                                    compDocUrl="https://github.com/react-bootstrap-table/react-bootstrap-table2"
                                                    compDesc="Next Generation of react-bootstrap-table"
                                                    demoExample="/src/DemoPages/Components/Tables/GridTables"
                                                    stylePath=""
                                                />

                                                <DocItem
                                                    compTitle="Responsive Tabs"
                                                    compDocUrl="https://github.com/maslianok/react-responsive-tabs"
                                                    compDesc="Responsive React tabs with beautiful animations"
                                                    demoExample="/src/DemoPages/Components/Tabs/Examples/AnimatedLines"
                                                    stylePath="/src/assets/architect/components/tables"
                                                />

                                                <DocItem
                                                    compTitle="Sortable Tree"
                                                    compDocUrl="https://github.com/frontend-collective/react-sortable-tree"
                                                    compDesc="Drag-and-drop sortable component for nested data and hierarchies"
                                                    demoExample="/src/DemoPages/Components/TreeView/"
                                                    stylePath="/src/assets/architect/components/tree-view"
                                                />

                                                <DocItem
                                                    compTitle="Hamburger Buttons"
                                                    compDocUrl="https://github.com/oscarferrandiz/react-hamburgers"
                                                    compDesc="React component for Jonathan Suh's hamburguers: https://jonsuh.com/hamburgers"
                                                    demoExample="/src/Layout/AppLogo"
                                                    stylePath="/src/assets/architect/components/hamburgers"
                                                />
                                                <DocItem
                                                    compTitle="Motion Drawer"
                                                    compDocUrl="https://github.com/stoeffel/react-motion-drawer"
                                                    compDesc="Navigation drawer built with the awesome react-motion"
                                                    demoExample="/src/Layout/AppHeader/Components/HeaderRightDrawer.js"
                                                    stylePath="/src/assets/architect/components/drawer"
                                                />

                                                <DocItem
                                                    compTitle="Timeline"
                                                    compDocUrl="https://github.com/stephane-monnot/react-vertical-timeline"
                                                    compDesc="Vertical timeline for React.js"
                                                    demoExample="/src/DemoPages/Elements/Timeline"
                                                    stylePath="/src/assets/architect/elements/_timeline.scss"
                                                />
                                            </Col>
                                        </Row>
                                        <h5>Icons</h5>
                                        <Row>
                                            <Col md="6">
                                                <DocItem
                                                    compTitle="Flag Icons"
                                                    compDocUrl="https://github.com/stephenway/react-flagkit"
                                                    compDesc="Beautiful flag icons for usage in React.js apps"
                                                    demoExample="/src/DemoPages/Elements/Icons/Examples/FlagIcons.js"
                                                    stylePath=""
                                                />

                                                <DocItem
                                                    compTitle="FontAwesome"
                                                    compDocUrl="https://github.com/FortAwesome/react-fontawesome"
                                                    compDesc="Font Awesome 5 React component"
                                                    demoExample="/src/DemoPages/Elements/Icons/Examples/FontAwesome.js"
                                                    stylePath=""
                                                />

                                            </Col>
                                            <Col md="6">
                                                <DocItem
                                                    compTitle="Ionicons"
                                                    compDocUrl="https://github.com/zamarrowski/react-ionicons"
                                                    compDesc="React Ionicon component"
                                                    demoExample="/src/DemoPages/Elements/Icons/Examples/IonIcons.js"
                                                    stylePath=""
                                                />
                                            </Col>
                                        </Row>
                                        <h6 className="text-primary">Charts</h6>
                                        <Row>
                                            <Col md="6">
                                                <DocItem
                                                    compTitle="ChartJS 2"
                                                    compDocUrl="https://github.com/jerairrest/react-chartjs-2"
                                                    compDesc="React wrapper for Chart.js"
                                                    demoExample="/src/DemoPages/Components/Charts/ChartJs"
                                                    stylePath=""
                                                />

                                                <DocItem
                                                    compTitle="justGage"
                                                    compDocUrl="https://github.com/Reggino/react-svg-gauge"
                                                    compDesc="Justgage inspired .svg gauge for React"
                                                    demoExample="/src/DemoPages/Components/Charts/Gauges/Examples/justGage.js"
                                                    stylePath=""
                                                />

                                                <DocItem
                                                    compTitle="Liquid Gauge"
                                                    compDocUrl="https://github.com/trendmicro-frontend/react-liquid-gauge"
                                                    compDesc="React Liquid Gauge component"
                                                    demoExample="/src/DemoPages/Components/Charts/Gauges/Examples/liquidGauge.js"
                                                    stylePath=""
                                                />
                                            </Col>
                                            <Col md="6">

                                                <DocItem
                                                    compTitle="Sparklines"
                                                    compDocUrl="https://github.com/borisyankov/react-sparklines"
                                                    compDesc="Beautiful and expressive Sparklines React component"
                                                    demoExample="/src/DemoPages/Components/Charts/Sparklines1"
                                                    stylePath=""
                                                />

                                                <DocItem
                                                    compTitle="Recharts"
                                                    compDocUrl="https://github.com/recharts/recharts"
                                                    compDesc="Redefined chart library built with React and D3"
                                                    demoExample="/src/DemoPages/Components/Charts/Sparklines2"
                                                    stylePath=""
                                                />
                                            </Col>
                                        </Row>
                                        <h6 className="text-primary">Forms</h6>

                                        <Row>
                                            <Col md="6">

                                                <DocItem
                                                    compTitle="Clipboard"
                                                    compDocUrl="https://github.com/nkbt/react-copy-to-clipboard"
                                                    compDesc="Copy-to-clipboard React component"
                                                    demoExample="/src/DemoPages/Components/Form/Components/Clipboard"
                                                    stylePath=""
                                                />

                                                <DocItem
                                                    compTitle="Colorpicker"
                                                    compDocUrl="https://github.com/casesandberg/react-color"
                                                    compDesc="Color Pickers from Sketch, Photoshop, Chrome, Github, Twitter & more"
                                                    demoExample="/src/DemoPages/Components/Form/Components/ColorPicker"
                                                    stylePath=""
                                                />

                                                <DocItem
                                                    compTitle="Datepicker"
                                                    compDocUrl="https://github.com/Hacker0x01/react-datepicker"
                                                    compDesc="A simple and reusable datepicker component for React"
                                                    demoExample="/src/DemoPages/Components/Form/Components/DatePicker"
                                                    stylePath="/src/assets/architect/components/forms/datepicker"
                                                />

                                                <DocItem
                                                    compTitle="React Widgets"
                                                    compDocUrl="https://github.com/jquense/react-widgets"
                                                    compDesc="Dropdown, Combobox, Select List, Multiselect, Dropdown Select, Numberpicker"
                                                    demoExample="/src/DemoPages/Components/Form/Components/"
                                                    stylePath="/src/assets/architect/components/react-widgets"
                                                />

                                                <DocItem
                                                    compTitle="Number Input"
                                                    compDocUrl="https://github.com/vlad-ignatov/react-numeric-input"
                                                    compDesc="Numeric input component for React"
                                                    demoExample="/src/DemoPages/Components/Form/Components/NumberPicker/Examples/NumericInput.js"
                                                    stylePath=""
                                                />

                                                <DocItem
                                                    compTitle="Range Slider"
                                                    compDocUrl="https://github.com/react-component/slider"
                                                    compDesc="Slider UI component for React"
                                                    demoExample="/src/DemoPages/Components/Form/Components/RangeSlider"
                                                    stylePath="/src/assets/architect/components/forms/rangeslider"
                                                />

                                                <DocItem
                                                    compTitle="Dropzone"
                                                    compDocUrl="https://github.com/react-dropzone/react-dropzone"
                                                    compDesc="Simple HTML5 drag-drop zone with React"
                                                    demoExample="/src/DemoPages/Components/Form/Components/DropZone"
                                                    stylePath="/src/assets/architect/components/forms/dropzone"
                                                />

                                                <DocItem
                                                    compTitle="React Select"
                                                    compDocUrl="https://github.com/JedWatson/react-select"
                                                    compDesc="The Select Component for React.js"
                                                    demoExample="/src/DemoPages/Components/Form/Components/MultiSelect/Examples/ReactSelect"
                                                    stylePath="/src/assets/architect/components/forms/multiselect"
                                                />
                                            </Col>
                                            <Col md="6">


                                                <DocItem
                                                    compTitle="Input Mask"
                                                    compDocUrl="https://github.com/sanniassin/react-input-mask"
                                                    compDesc="Input masking component for React. Made with attention to UX."
                                                    demoExample="/src/DemoPages/Components/Form/Components/InputMask"
                                                    stylePath=""
                                                />

                                                <DocItem
                                                    compTitle="Textarea Autosize"
                                                    compDocUrl="https://github.com/andreypopp/react-textarea-autosize"
                                                    compDesc="React component which automatically resizes textarea as content changes"
                                                    demoExample="/src/DemoPages/Components/Form/Components/TextareaAutosize"
                                                    stylePath=""
                                                />

                                                <DocItem
                                                    compTitle="Toggle Switch"
                                                    compDocUrl="https://github.com/markusenglund/react-switch"
                                                    compDesc="A draggable toggle-switch component for React"
                                                    demoExample="/src/DemoPages/Components/Form/Components/ToggleSwitch"
                                                    stylePath="/src/assets/architect/components/forms/toggle-switch"
                                                />

                                                <DocItem
                                                    compTitle="Typeahead"
                                                    compDocUrl="https://github.com/ericgio/react-bootstrap-typeahead"
                                                    compDesc="React typeahead with Bootstrap styling"
                                                    demoExample="/src/DemoPages/Components/Form/Components/Typeahead"
                                                    stylePath="/src/assets/architect/components/forms/typeahead"
                                                />

                                                <DocItem
                                                    compTitle="DraftJs"
                                                    compDocUrl="https://github.com/jpuri/react-draft-wysiwyg"
                                                    compDesc="A Wysiwyg editor build on top of ReactJS and DraftJS"
                                                    demoExample="/src/DemoPages/Components/Form/Components/WysiwygEditor/Examples/Draft.js"
                                                    stylePath="/src/assets/architect/components/forms/wysiwyg"
                                                />

                                                <DocItem
                                                    compTitle="ckEditor"
                                                    compDocUrl="https://github.com/codeslayer1/react-ckeditor"
                                                    compDesc="React component for CKEditor"
                                                    demoExample="/src/DemoPages/Components/Form/Components/WysiwygEditor/Examples/CkEditor.js"
                                                    stylePath="/src/assets/architect/components/forms/wysiwyg"
                                                />

                                                <DocItem
                                                    compTitle="Availity Forms Validations"
                                                    compDocUrl="https://github.com/Availity/availity-reactstrap-validation"
                                                    compDesc="Easy to use React validation components compatible for reactstrap."
                                                    demoExample="/src/DemoPages/Components/Form/Elements/Validation/Examples/FormValidation.js"
                                                    stylePath=""
                                                />

                                            </Col>
                                        </Row>

                                        <div className="mt-5"/>
                                        <div className="clearfix">
                                            <div className="text-center">
                                                <Button color="primary" size="lg"
                                                        className="btn-pill btn-wide btn-shadow" onClick={() => {
                                                    this.toggle('7');
                                                }}>
                                                    Next: <b>Layout Modifiers</b>
                                                </Button>
                                            </div>
                                        </div>
                                    </TabPane>
                                    <TabPane tabId="7">
                                        <h4>Layout Modifiers</h4>
                                        <div className="divider"/>

                                        <p>ArchitectUI has built-in CSS helper classes that modify the layout components positions.</p>
                                        <p>These CSS helper classes need to be added to the element that has the <code>app-container</code> CSS class.
                                            The path to the ArchitectUI App Container Component is: <code>/src/DemoPages/Main/index.js</code>.</p>
                                        <p>Check out the available modifiers list below:</p>
                                        <h6 className="text-primary">App Container Modifiers
                                            <small>( <code>.app-container</code> )</small>
                                        </h6>
                                        <Table bordered hover responsive>
                                            <thead>
                                            <tr>
                                                <th style={{width: '250px'}}>CSS Helper Class</th>
                                                <th style={{width: '250px'}}>Modified Component</th>
                                                <th>Description</th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            <tr>
                                                <td>
                                                    <code>fixed-header</code>
                                                </td>
                                                <td>
                                                    Header ( <code>.app-header</code> )
                                                </td>
                                                <td>
                                                    Makes the Header Component positioned top fixed/sticky.
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <code>fixed-sidebar</code>
                                                </td>
                                                <td>
                                                    Sidebar ( <code>.app-sidebar</code> )
                                                </td>
                                                <td>
                                                    Makes the Sidebar Component positioned top and left fixed/sticky.
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <code>closed-sidebar</code>
                                                </td>
                                                <td>
                                                    Sidebar ( <code>.app-sidebar</code> )
                                                </td>
                                                <td>
                                                    Makes the Sidebar Component initially closed, with only the icons available. If the <code>fixed-sidebar</code> is active the Sidebar will open as an overlay over the main content.
                                                    <p>If the Sidebar is static and not fixed, it will push the main content area to the right, on hover.</p>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <code>fixed-footer</code>
                                                </td>
                                                <td>
                                                    Footer ( <code>.app-footer</code> )
                                                </td>
                                                <td>
                                                    Makes the Footer Component positioned bottom fixed/sticky.
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <code>body-tabs-shadow-btn</code>
                                                </td>
                                                <td>
                                                    Page Section Navigation ( <code>.body-tabs-layout</code> )
                                                </td>
                                                <td>
                                                    When adding the <code>body-tabs-shadow-btn</code> CSS helper to the <code>app-container</code> element, the pages section sub-navigation menu will transform the tabs menu animated lines to animated
                                                    pills.
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <code>app-theme-*</code>
                                                </td>
                                                <td>
                                                    Main Section
                                                </td>
                                                <td>
                                                    There are two subtile color schemes available on top of all the color themes for sidebar/header components: <code>app-theme-white</code> or <code>app-theme-gray</code>. These modify the color scheme
                                                    for the main content area.
                                                    <p>
                                                        Their style can be modified from <code>/src/assets/architect/layout/main/themes</code>.
                                                    </p>
                                                </td>
                                            </tr>
                                            </tbody>
                                        </Table>

                                        <h6 className="text-primary">
                                            Sidebar
                                            <small>( <code>.app-sidebar</code> )</small>
                                        </h6>
                                        <p>These CSS helper classes need to be added to the element that has the <code>app-sidebar</code> CSS class.
                                            The path to the ArchitectUI Sidebar Container Component is: <code>/src/Layout/AppSidebar/index.js</code>.</p>
                                        <p>Check out the available modifiers list below:</p>
                                        <Table bordered hover responsive>
                                            <thead>
                                            <tr>
                                                <th style={{width: '250px'}}>CSS Helper Class</th>
                                                <th style={{width: '250px'}}>Modified Component</th>
                                                <th>Description</th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            <tr>
                                                <td>
                                                    <code>sidebar-shadow</code>
                                                </td>
                                                <td>
                                                    Sidebar ( <code>.app-sidebar</code> )
                                                </td>
                                                <td>
                                                    Adds a drop shadow for the Sidebar Component.
                                                </td>
                                            </tr>
                                            </tbody>
                                        </Table>

                                        <h6 className="text-primary">
                                            Header
                                            <small>( <code>.app-header</code> )</small>
                                        </h6>
                                        <p>These CSS helper classes need to be added to the element that has the <code>app-header</code> CSS class.
                                            The path to the ArchitectUI Header Container Component is: <code>/src/Layout/AppHeader/index.js</code>.</p>
                                        <p>Check out the available modifiers list below:</p>
                                        <Table bordered hover responsive>
                                            <thead>
                                            <tr>
                                                <th style={{width: '250px'}}>CSS Helper Class</th>
                                                <th style={{width: '250px'}}>Modified Component</th>
                                                <th>Description</th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            <tr>
                                                <td>
                                                    <code>header-shadow</code>
                                                </td>
                                                <td>
                                                    Header ( <code>.app-header</code> )
                                                </td>
                                                <td>
                                                    Adds a drop shadow for the Header Component.
                                                </td>
                                            </tr>
                                            </tbody>
                                        </Table>

                                        <div className="mt-5"/>
                                        <div className="clearfix">
                                            <div className="text-center">
                                                <Button color="primary" size="lg"
                                                        className="btn-pill btn-wide btn-shadow" onClick={() => {
                                                    this.toggle('9');
                                                }}>
                                                    Next: <b>Routing & Navigation</b>
                                                </Button>
                                            </div>
                                        </div>
                                    </TabPane>
                                    <TabPane tabId="9">
                                        <h4>Routing & Navigation</h4>
                                        <div className="divider"/>

                                        <p>ArchitectUI uses the React router for navigation: <code>react-router-dom</code>. The Sidebar component main naigation uses the <code>react-metismenu</code> component.</p>
                                        <p>The Demo navigation arrays are defined under <code>/src/Layout/AppNav/NavItems.js</code></p>
                                        <div className="scroll-area-lg table-responsive scroll-area-x mb-3">
                                            <SyntaxHighlighter style={monokai} language='javascript'>
                                                {baseNavMenuArray}
                                            </SyntaxHighlighter>
                                        </div>

                                        <p>The navigation array constants are imported in <code>/src/Layout/AppNav/VerticalNavWrapper.js</code></p>
                                        <div className="scroll-area-lg table-responsive scroll-area-x mb-3">
                                            <SyntaxHighlighter style={monokai} language='javascript'>
                                                {verticalNavWrapperCode}
                                            </SyntaxHighlighter>
                                        </div>


                                        <p>We'll take as an example <code>AppMain</code> component, located in <code>/src/Layout/AppMain/index.js</code></p>
                                        <div className="scroll-area-lg table-responsive scroll-area-x mb-3">
                                            <SyntaxHighlighter style={monokai} language='javascript'>
                                                {navCompExample}
                                            </SyntaxHighlighter>
                                        </div>

                                        <div className="divider"/>
                                        <div className="mt-5"/>
                                        <div className="clearfix">
                                            <div className="text-center">
                                                <Button color="primary" size="lg"
                                                        className="btn-pill btn-wide btn-shadow" onClick={() => {
                                                    this.toggle('8');
                                                }}>
                                                    Next: <b>Technical Support</b>
                                                </Button>
                                            </div>
                                        </div>
                                    </TabPane>

                                    <TabPane tabId="8">
                                        <h4>Technical Support</h4>
                                        <div className="divider"/>
                                        <div className="no-results">
                                            <div className="sa-icon sa-success animate">
                                                <span className="sa-line sa-tip animateSuccessTip"/>
                                                <span className="sa-line sa-long animateSuccessLong"/>

                                                <div className="sa-placeholder"/>
                                                <div className="sa-fix"/>
                                            </div>
                                            <div className="results-subtitle mt-4">We're here to help!</div>
                                            <div className="results-title">If you need help setting up or navigation through the theme files, write to us at contact@architectui.com</div>
                                        </div>
                                        <div className="mt-5"/>
                                    </TabPane>
                                </TabContent>
                            </div>
                        </Card>
                    </div>
                </ReactCSSTransitionGroup>
            </
                Fragment>
        )
    }
}
