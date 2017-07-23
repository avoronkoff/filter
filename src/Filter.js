import React, { Component } from 'react';
import { Form, FormGroup, Col, Button } from 'reactstrap';
import PropTypes from 'prop-types';

//import styles
import './style.css';

export default class Filter extends Component {
    render() {
        const { searchHandle, settingButton } = this.props;
        return (
            <Form inline>
                <FormGroup>
                    <Col md={4}>
                        <Button name="moreThousand"  color={settingButton.moreThousand ? "warning" : "primary"}
                                onClick={searchHandle}>больше 1000</Button>
                    </Col>
                </FormGroup>
                <FormGroup>
                    <Col md={4}>
                        <Button name="income" color={settingButton.income ? "warning" : "primary"}
                                onClick={searchHandle} disabled={settingButton.expense}>доход</Button>
                    </Col>
                </FormGroup>
                <FormGroup>
                    <Col md={4}>
                        <Button name="expense" color={settingButton.expense ? "warning" : "primary"}
                                onClick={searchHandle} disabled={settingButton.income}>расход</Button>
                    </Col>
                </FormGroup>
                <FormGroup>
                    <Col md={4}>
                        <Button name="month"  color={settingButton.month ? "warning" : "primary"}
                                onClick={searchHandle}>За последний месяц</Button>
                    </Col>
                </FormGroup>
            </Form>
        );
    }
}

Filter.propTypes = {
    searchHandle: PropTypes.func.isRequired,
    settingButton: PropTypes.object.isRequired
};