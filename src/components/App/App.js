import React, { Component } from "react";
import Search from '../Search/Search';
import DataTable from '../DataTable/DataTable';
import { Navbar, NavbarBrand } from 'reactstrap';
import { Container, Grid } from 'semantic-ui-react'
import axios from 'axios';

var fuzzy = require("fuzzy");

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      poi_data: [],
      searchWord: "",
      searchMatches: []
    };

    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    axios({
        method: 'get',      
        url: 'http://ec2-18-218-112-222.us-east-2.compute.amazonaws.com:3000/poi',
        headers: {'usertoken': new Date().getTime()} //add a unique token to bypass api rate limiting
      })
      .then(response => {
          this.setState({
            poi_data: response.data
          });
      })
      .catch(error => console.log(error));
  }
  

  handleChange(event) {
    this.setState({ searchWord: event.target.value });
  }

  render() {
    
    const { searchWord } = this.state;
    var list = this.state.poi_data;
    var options = {
      pre: "<b>",
      post: "</b>",
      extract: function(el) {
        return el.name + "|~`~`|" + el.lat + "|~`~`|" + el.lon;
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
        <Container>
          <Grid>
            <Grid.Row>
              <Grid.Column>
                <Search handleChange={this.handleChange} searchWord={searchWord} />
              </Grid.Column>
            </Grid.Row>
            <br />
            <Grid.Row>
              <Grid.Column>
                <DataTable searchMatches={mResults} />
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      </div>
    );
  }
}

export default App;
