import React, { Component } from "react";
//import "./App.css";
import keywords from "../../keywords.json";
import Search from '../Search/Search.jsx';
import WordTable from '../WordTable/WordTable.jsx';
import { Navbar, NavbarBrand, Container, Row, Col } from 'reactstrap';

var fuzzy = require("fuzzy");


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchWord: "",
      searchMatches: []
    };

    this.handleChange = this.handleChange.bind(this);
  }
  

  handleChange(event) {
    this.setState({ searchWord: event.target.value });
  }

  render() {
    
    const { searchWord } = this.state;
    var list = keywords.keywords;
    var options = {
      pre: "<b>",
      post: "</b>",
      extract: function(el) {
        return el.action + "|~`~`|" + el.keyword;
      }
    };

    var results = fuzzy.filter(searchWord, list, options);
    var mResults = results.map(e => e.string);

    return (
      <div>
        <Navbar color="dark" dark expand="md">
          <NavbarBrand href="/">eqworks fuzzy search</NavbarBrand>
        </Navbar>
        <br/>
        <Container className="themed-container" fluid="lg">
          <Row>
            <Col>
              <Search handleChange={this.handleChange} searchWord={searchWord} />
            </Col>
          </Row>
          <hr/>
          <Row>
            <Col>
              <WordTable searchMatches={mResults} />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
