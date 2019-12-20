import React from 'react';
import { Table } from 'semantic-ui-react';
import ReactHtmlParser from 'react-html-parser';

const uuidv4 = require("uuid/v4");

function DataTable(props) {
    const { searchMatches } = props;
    return (
        <Table celled>
            <Table.Header>
                <Table.Row>
                    <Table.HeaderCell>Name</Table.HeaderCell>
                    <Table.HeaderCell>Latitude</Table.HeaderCell>
                    <Table.HeaderCell>Longitude</Table.HeaderCell>
                </Table.Row>
            </Table.Header>
            <Table.Body>
                {
                    searchMatches.map(row => {
                        let values = row.split("|~`~`|");
                        return (
                            <Table.Row key = {uuidv4()}>
                                <Table.Cell>{ReactHtmlParser(values[0])}</Table.Cell>
                                <Table.Cell>{ReactHtmlParser(values[1])}</Table.Cell>
                                <Table.Cell>{ReactHtmlParser(values[2])}</Table.Cell>
                            </Table.Row>
                        )
                        
                    })
                }
            </Table.Body>
        </Table>
    );    
}

export default DataTable;