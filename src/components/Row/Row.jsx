import React from 'react';
import ReactHtmlParser from 'react-html-parser';
const uuidv4 = require("uuid/v4");

function Row(props) {
    return (
        <tr>
            <td key={uuidv4()} value={props.action}>
            
            <div>{ ReactHtmlParser(props.action) }</div>
            
            </td>
            <td key={uuidv4()} value={props.keyword}>
            <div>{ ReactHtmlParser(props.keyword) }</div>
            </td>
        </tr>
    );
}

export default Row;