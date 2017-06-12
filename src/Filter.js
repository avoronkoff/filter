import React, { Component } from 'react';
import { Form, FormGroup, Col, Button } from 'reactstrap';
import PropTypes from 'prop-types';

//import styles
import './style.css';

export default class Filter extends Component {
    render() {
        const { searchHandle, disabledButton } = this.props;
        return (
            <Form inline>
                <FormGroup>
                    <Col md={4}>
                        <Button name="moreThousand"  color="primary" onClick={searchHandle}>больше 1000</Button>
                    </Col>
                </FormGroup>
                <FormGroup>
                    <Col md={4}>
                        <Button name="income"  color="primary" onClick={searchHandle} disabled={disabledButton.expense}>доход</Button>
                    </Col>
                </FormGroup>
                <FormGroup>
                    <Col md={4}>
                        <Button name="expense"  color="primary" onClick={searchHandle} disabled={disabledButton.income}>расход</Button>
                    </Col>
                </FormGroup>
                <FormGroup>
                    <Col md={4}>
                        <Button name="month"  color="success" onClick={searchHandle}>За последний месяц</Button>
                    </Col>
                </FormGroup>
            </Form>
        );
    }
}

Filter.propTypes = {
    searchHandle: PropTypes.func.isRequired
};