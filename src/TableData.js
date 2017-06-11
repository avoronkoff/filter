import React, { Component } from 'react';
import { Table, Container, Row, Col  } from 'reactstrap';
import {Map} from 'immutable';

//import view
import Filter from './Filter';

export default class TableData extends Component {
    constructor(props) {
        super(props);
        this.state = ({
            searchObj: Map({
                'search': '',
                'higher': '',
                'month': ''
            }),
            originList: [...this.props.list],
            list: this.props.list
        });
    }

    searchHandle = (e) => {
        e.preventDefault();

        this.setState({
            searchObj: this.state.searchObj.set(e.target.name, e.target.value)
        }, () => this.filterTable(this.state.searchObj.toJS()));
    };


    //в случае работы с редаксом, вынес бы ее в reducers
    filterTable = (searchReqObj) => {
        const searchObj = searchReqObj;
        let filterList = this.state.originList;

        for (const key in searchReqObj) {
            if(searchObj[key] !== '') {
                filterList = filterList.filter(item => {
                    switch(key) {
                        case 'search': {
                            return item.type.toLowerCase().substring(0,searchReqObj.search.length) === searchReqObj.search.toLowerCase();
                        }
                        case 'higher': {
                            return item.value > 50;
                        }
                        case 'month': {
                            return item.date.split("-")[1] === searchReqObj.month;
                        }
                        default:
                            return []
                    }
                });
            }
        }

        this.setState({
            list: filterList
        });
    };

    render() {
        return (
            <Container>
                <Row>
                    <Col md={12}>
                        <Filter searchHandle={this.searchHandle} />
                        <Table striped>
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th className="text-center">Сумма</th>
                                    <th className="text-center">Тип</th>
                                    <th className="text-center">Дата</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.list.map(item => {
                                        return <tr key={item.id}>
                                            <th scope="row">{item.id}</th>
                                            <td>{item.value}</td>
                                            <td>{item.type}</td>
                                            <td>{item.date}</td>
                                        </tr>
                                    })
                                }
                            </tbody>
                        </Table>
                    </Col>
                </Row>
            </Container>
        );
    }
}