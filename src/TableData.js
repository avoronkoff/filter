import React, { Component } from 'react';
import { Table, Container, Row, Col  } from 'reactstrap';

//import view
import Filter from './Filter';

export default class TableData extends Component {
    constructor(props) {
        super(props);
        this.state = ({
            searchObj: {
                'moreThousand': false,
                'expense': false,
                'income': false,
                'month': false
            },
            originList: [...this.props.list],
            list: this.props.list
        });
    }

    searchHandle = (e) => {
        e.preventDefault();

        const search = this.state.searchObj;
        search[e.target.name] = !search[e.target.name];

        this.setState({
            ...this.state.searchObj,
            [e.target.name] : search[e.target.name]
        }, () => this.filterTable(this.state.searchObj));

    };


    //в случае работы с редаксом, вынес бы ее в reducers
    filterTable = (searchReqObj) => {
        const searchObj = searchReqObj, date = new Date();
        const month = (date.getMonth() + 1).toString();
        let filterList = this.state.originList;

        for (const key in searchReqObj) {
            if(searchObj[key]) {
                filterList = filterList.filter(item => {
                    switch(key) {
                        case 'moreThousand': {
                            return item.value > 1000;
                        }
                        case 'income': {
                            return item.type === "доход";
                        }
                        case 'expense': {
                            return item.type === "расход";
                        }
                        case 'month': {
                            return item.date.split("-")[1] === month;
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
        const { searchObj} = this.state;
        return (
            <Container>
                <Row>
                    <Col md={12}>
                        <Filter searchHandle={this.searchHandle} disabledButton={searchObj} />
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