/* eslint-disable no-use-before-define */
import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete, { createFilterOptions } from '@material-ui/lab/Autocomplete';
import { makeStyles } from '@material-ui/core/styles';
import GridItem from '../Grid/GridItem';
import GridContainer from "../Grid/GridContainer.js";
import SearchIcon from '@material-ui/icons/Search';
import Button from "../CustomButtons/Button";
import { store } from '../../store';
import city from '../../../src/assets/countryCity.json'


class Country extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allProvider: [],
      filterValue: [{ country: "", city: "", name: "", service: "", expertise: "", orgName: "" }],
      allServices: [],
      allExpertise: [],
      searchBox: [],
      searchValues: [],
      filterValueField: "",
      searchByName: false,
      searchByOrg: false,
      country: [],
      city: []
    }
  }

  componentDidMount() {
    this.setState({
      allProvider: this.props.getAllProvider,
      allServices: this.props.getAllService,
      allExpertise: this.props.getAllExpertise
    })
    let countryArr = Object.keys(city)
    this.setState({ country: countryArr })
  }

  filterData = (e) => {
    const { filterValue } = this.state
    if (e.target.id.substring(0, 2) == "co") {
      let country = e.target.innerHTML
      let cityArr = city[country]
      this.setState({ city: cityArr })
      this.setState({ filterValue: { ...filterValue, ["country"]: e.target.innerHTML } });
    }
    else if (e.target.id.substring(0, 2) == "ci") {
      this.setState({ filterValue: { ...filterValue, ["city"]: e.target.innerHTML } });
    }
    else {
      this.setState({ filterValue: { ...filterValue, [this.state.filterValueField]: e.target.innerHTML } });
    }
  }

  searchByFilter = (e) => {
    if (e.target.innerHTML == "Services") {
      this.setState({ searchBox: this.props.getAllService, searchByName: false, searchByOrg: false, filterValueField: "service" })
    }
    else if (e.target.innerHTML == "Expertise") {
      this.setState({ searchBox: this.props.getAllExpertise, searchByName: false, searchByOrg: false, filterValueField: "expertise" })
    }
    else if (e.target.innerHTML == "Name") {
      this.setState({ searchBox: this.props.getAllProvider, searchByName: true, searchByOrg: false, filterValueField: "name" })
    }
    else if (e.target.innerHTML == "Organization Name") {
      this.setState({ searchBox: this.props.getAllProvider, searchByOrg: true, searchByName: false, filterValueField: "orgName" })
    }
  }

  filterArray = () => {
    this.props.filterFunction(this.state.filterValue, this.state.filterValueField)
  }

  render() {

    return (
      <React.Fragment>
        <div className="d-flex justify-content-between">
          {/* <GridContainer> */}

            <div>
              <GridItem xs={6} sm={6} md={2}>
                <Autocomplete
                  onChange={this.filterData}
                  style={{ width: 200, background: "#fff", borderColor: "#fff", borderRadius: 10 }}
                  id="country"
                  options={this.state.country}
                  getOptionLabel={(option) => option}
                  renderInput={(params) =>
                    <TextField {...params} placeholder="Select Country" variant="outlined" />
                  }
                />
              </GridItem>
            </div>

            <div>
              <GridItem xs={6} sm={6} md={2}>
                <Autocomplete
                  onChange={this.filterData}
                  style={{ width: 200, background: "#fff", borderColor: "#fff", borderRadius: 10 }}
                  id="city"
                  options={this.state.city}
                  getOptionLabel={(option) => option}
                  renderInput={(params) =>
                    <TextField {...params} placeholder="Select City" variant="outlined" />
                  }
                />
              </GridItem>
            </div>

            <div>
              <GridItem xs={6} sm={6} md={2}>
                <Autocomplete
                  onChange={this.searchByFilter}
                  style={{ width: 200, background: "#fff", borderColor: "#fff", borderRadius: 10 }}
                  id="searchBy"
                  options={searchByValue}
                  getOptionLabel={(option) => option}
                  renderInput={(params) =>
                    <TextField {...params} placeholder="Search By" variant="outlined" />
                  }
                />
              </GridItem>
            </div>

            <div>
              <GridItem xs={12} sm={12} md={6}>
                <Autocomplete
                  onChange={this.filterData}
                  style={{ width: 200, background: "#fff", borderColor: "#fff", borderRadius: 10 }}
                  id="SearchByField"
                  options={this.state.searchBox}
                  getOptionLabel={(option) => this.state.searchByOrg ? option.OrganizationName : (this.state.searchByName ? option.fullName : option.name)}
                  renderInput={(params) =>
                    <TextField {...params} placeholder="Type to search" variant="outlined" />
                  }
                />
              </GridItem>
            </div>

            <div>
              <GridItem xs={2} sm={2} md={2}>
                <Button onClick={this.filterArray} color="warning" size="lg">Search</Button>
              </GridItem>
            </div>
            <div>
              <GridItem xs={2} sm={2} md={2}>
                <a href="" onClick={this.filterArray}>Clear All Fields</a>
              </GridItem>
            </div>

          {/* </GridContainer> */}
        </div>

      </React.Fragment>
    )
  }
}

// From https://bitbucket.org/atlassian/atlaskit-mk-2/raw/4ad0e56649c3e6c973e226b7efaeb28cb240ccb0/packages/core/select/src/data/countries.js

const searchByValue = ["All", "Name", "Organization Name", "Services", "Expertise"]

export default Country;