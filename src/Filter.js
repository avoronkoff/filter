import React, { Component } from 'react';
import { Form, FormGroup, Input, Col, Button } from 'reactstrap';
import PropTypes from 'prop-types';

//import styles
import './style.css';

export default class Filter extends Component {
    render() {
        let date = new Date();
        const { searchHandle } = this.props;
        return (
            <Form inline>
                <FormGroup>
                    <Col md={4}>
                        <Input name="search" type="text" onChange={searchHandle} placeholder="поиск по типу" />
                    </Col>
                </FormGroup>
                <FormGroup>
                    <Col md={4}>
                        <Button name="higher" value="50" color="primary" onClick={searchHandle}>Сумма больше 50</Button>
                    </Col>
                </FormGroup>
                <FormGroup>
                    <Col md={4}>
                        <Button name="month" value={date.getMonth()} color="success" onClick={searchHandle}>За последний месяц</Button>
                    </Col>
                </FormGroup>
            </Form>
        );
    }
}

Filter.propTypes = {
    searchHandle: PropTypes.func.isRequired
};