import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';
import cx from 'classnames';

import {
    Button, Alert,
    Card, CardBody, CardTitle
} from 'reactstrap';

import {
    faBatteryThreeQuarters,

} from '@fortawesome/free-solid-svg-icons';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

class DocItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let {
            compTitle,
            compDocUrl,
            compDesc,
            demoExample,
            stylePath

        } = this.props;
        return (
            <Fragment>
                <Card className="card-border mb-3">
                    <CardBody>
                        <div className="card-title mb-1">
                            <h6 className="mb-0">{compTitle}</h6>
                        </div>
                        <p className="opacity-6">
                            {compDesc}
                        </p>
                        <div className="divider"/>
                        <Alert color="warning">
                            The source code for examples shown in demo for <b>{compTitle}</b> can be found at the following location:
                            <div>
                                <code>{demoExample}</code>
                            </div>
                            {stylePath &&
                            <div>
                                <div className="divider"/>
                                The stylesheet associated with the <b>{compTitle}</b> Component can be found in the following location:
                                <div>
                                    <code>{stylePath}</code>
                                </div>
                            </div>
                            }
                        </Alert>
                        <div className="divider"/>
                        <div className="text-center">
                            <a className="btn btn-warning btn-shadow btn-pill btn-wide" href={compDocUrl} target="_blank">
                                {compTitle} Documentation
                            </a>
                        </div>
                    </CardBody>
                </Card>
            </Fragment>
        )
            ;
    }
}

export default DocItem;