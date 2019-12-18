import React from 'react';
import Row from '../Row/Row';
import { Table } from 'reactstrap';

const uuidv4 = require("uuid/v4");

function WordTable(props) {
    const { searchMatches } = props;
    return (
        
    <Table dark>
        <thead>
            <tr>
            <th>Action</th>
            <th>Keyword(s)</th>
            </tr>
        </thead>
        <tbody>
            {searchMatches.map(p => 
            {
                let temp = p.split("|~`~`|");
                return (
                <Row key={uuidv4()} action={temp[0]} keyword={temp[1]} />
                )
            }
            )
            }
        </tbody>
    </Table>
    );    
}

export default WordTable;